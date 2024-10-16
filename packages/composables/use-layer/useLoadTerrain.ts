/*
 * @Author: Kang
 * @Date: 2024-07-22 09:02:25
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-16 17:48:43
 */
import { ref } from 'vue';
type TerrainAryType =
  | {
      url: string; //地形的链接
      type: 'global'; //整个地球
      height?: number;
      otherOptios?: {
        //其他配置项
        [key: string]: any;
      };
    }
  | {
      url: string; //地形的链接
      range: [number, number, number, number]; // 必须是包含四个数字的元组
      type: 'region'; //区域的话，区域范围是必填
      height: number;
      otherOptios?: {
        //其他配置项
        [key: string]: any;
      };
    };

type TerrainInfoTypes =
  | {
      type: 'offline'; //离线模式
      url: string;
      otherOptios?: {
        //其他配置项
        [key: string]: any;
      };
    }
  | {
      type: 'online'; //在线模式
    };

//检查经纬度是否在单个范围内的函数
function isInRange(lon: number, lat: number, range: any) {
  const [minLon, maxLon, minLat, maxLat] = range;
  return lon >= minLon && lon <= maxLon && lat >= minLat && lat <= maxLat;
}

//检查经纬度是否在任何范围内的函数
function findRange(lon: number, lat: number, ranges: any) {
  for (const rangeObj of ranges) {
    if (isInRange(lon, lat, rangeObj.range)) {
      return rangeObj;
    }
  }
  return null;
}

/**
 * @param {*} viewerMap viewer实体
 * @param {*} terrainAry 一个数组对象，{url,type,range}  url:地形的地址，type: global | region 全球和区域，range：区域的范围
 * @returns
 * 因为所里项目大多是离线的，导致地形不是全的，所以在某一区域只加载某一区域的精细地形
 */
export function useLoadTerrain() {
  const handlerIns = ref<any>(null);
  //加载地形
  const loadTerrain = async (
    viewer: Cesium.Viewer,
    terrainAry: TerrainAryType[]
  ) => {
    if (!terrainAry.length) return false;
    if (!viewer) {
      console.error('viewer is undefined');
      return false;
    }
    if (viewer.scene.mode !== Cesium.SceneMode.SCENE3D) {
      console.error('The map mode should be in 3D mode.');
      return false;
    }
    //如果有全球，就先加载全球的
    let globalTerrain = terrainAry.filter((item) => item.type === 'global');
    if (globalTerrain && globalTerrain.length) {
      viewer.terrainProvider = await Cesium.CesiumTerrainProvider.fromUrl(
        globalTerrain[0].url,
        {
          requestVertexNormals: true,
          ...globalTerrain[0].otherOptios,
        }
      );
    }
    //状态变量
    let hasReturneRange = false;
    let hasExecutedOtherMethod = false;
    //如果有区域的地形，就加载区域地形
    let regionTerrain: TerrainAryType[] = terrainAry.filter(
      (item) => item.type === 'region'
    );
    if (regionTerrain && regionTerrain.length) {
      const handler = async () => {
        let cameraPosition = viewer.camera.positionCartographic;
        let latitude = Cesium.Math.toDegrees(cameraPosition.latitude);
        let longitude = Cesium.Math.toDegrees(cameraPosition.longitude);
        let heightCam = cameraPosition.height;
        if (!hasReturneRange) {
          let matcheRange: TerrainAryType = findRange(
            longitude,
            latitude,
            regionTerrain
          );
          if (matcheRange && heightCam < matcheRange.height) {
            hasReturneRange = true;
            hasExecutedOtherMethod = false;
            viewer.terrainProvider = await Cesium.CesiumTerrainProvider.fromUrl(
              matcheRange.url,
              {
                requestVertexNormals: true,
                ...matcheRange.otherOptios,
              }
            );
          }
        } else if (
          !hasExecutedOtherMethod &&
          heightCam > regionTerrain[0].height
        ) {
          if (globalTerrain && globalTerrain.length) {
            viewer.terrainProvider = await Cesium.CesiumTerrainProvider.fromUrl(
              globalTerrain[0].url,
              {
                requestVertexNormals: true,
              }
            );
          }
          hasExecutedOtherMethod = true;
          hasReturneRange = false;
        }
      };
      handlerIns.value = handler;
      //监听相机高度
      viewer.camera.changed.addEventListener(handler);
    }
  };
  //加载海底地形
  const loadSeafloorTerrain = async (
    viewer: Cesium.Viewer,
    terrainInfo: TerrainInfoTypes
  ) => {
    if (!viewer) {
      console.error('viewer is undefined');
      return false;
    }
    if (viewer.scene.mode !== Cesium.SceneMode.SCENE3D) {
      console.error('The map mode should be in 3D mode.');
      return false;
    }
    //离线模式
    if (terrainInfo.type === 'offline') {
      viewer.terrainProvider = await Cesium.CesiumTerrainProvider.fromUrl(
        terrainInfo.url,
        {
          requestVertexNormals: true,
          ...terrainInfo.otherOptios,
        }
      );
    } else if (terrainInfo.type === 'online') {
      // @ts-ignore
      viewer.terrainProvider = await Cesium.createWorldBathymetryAsync({
        requestVertexNormals: true,
      });
    }
    //创建 canvas 元素
    const canvas = document.createElement('canvas');
    canvas.id = 'colorRamp';
    //设置 canvas 的宽度和高度
    canvas.width = 500;
    canvas.height = 500;
    //设置 canvas 为隐藏状态
    canvas.style.display = 'none';
    //将 canvas 添加到 body中
    document.body.appendChild(canvas);

    const scene: any = viewer.scene;

    const globe: any = scene.globe;

    globe.showGroundAtmosphere = false;
    globe.showSkyAtmosphere = false;

    //控制地形和影像瓦片精度的一个参数,值越小越精细
    globe.maximumScreenSpaceError = 2;

    const minHeight = -10000.0;
    const maxHeight = 2000.0;

    const range = maxHeight - minHeight;
    const d = (height: any) => (height - minHeight) / range;
    function getColorRamp() {
      const ramp: any = document.getElementById('colorRamp');
      ramp.width = 100;
      ramp.height = 15;
      const ctx = ramp.getContext('2d');
      const grd = ctx.createLinearGradient(0, 0, 100, 0);
      // grd.addColorStop(d(maxHeight), '#FF0000'); // rgb(255, 0, 0)
      // grd.addColorStop(d(100), '#FF5500'); // rgb(255, 85, 0)
      // grd.addColorStop(d(0), '#E69900'); // rgb(230, 153, 0)
      // grd.addColorStop(d(-500), '#FFD280'); // rgb(255, 210, 128)
      // // grd.addColorStop(d(-1000), '#F9FCCA');
      // grd.addColorStop(d(-1000), '#FFFF73'); // rgb(255, 255, 115)
      // grd.addColorStop(d(-1500), '#FFFFBF'); // rgb(255, 255, 191)
      // grd.addColorStop(d(-2000), '#006FFF'); // rgb(0, 111, 255)
      // grd.addColorStop(d(-2500), '#00A8E6'); // rgb(0, 168, 230)
      // grd.addColorStop(d(-5000), '#0084A8'); // rgb(0, 132, 168)
      // grd.addColorStop(d(minHeight), '#004CA8'); // rgb(0, 76, 168)

      grd.addColorStop(d(maxHeight), '#B79E6C');
      grd.addColorStop(d(100.0), '#FBFFEE');
      grd.addColorStop(d(0.0), '#F9FCCA');
      grd.addColorStop(d(-500.0), '#BDE7AD');
      grd.addColorStop(d(-1000.0), '#81D2A3');
      grd.addColorStop(d(-1500.0), '#5AB7A4');
      grd.addColorStop(d(-2000.0), '#4C9AA0');
      grd.addColorStop(d(-2500.0), '#437D9A');
      grd.addColorStop(d(-4000.0), '#3E6194');
      grd.addColorStop(d(-5000.0), '#424380');
      grd.addColorStop(d(-8000.0), '#392D52');
      grd.addColorStop(d(minHeight), '#291C2F');

      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, ramp.width, ramp.height);

      return ramp;
    }
    function showTerrain() {
      let material = Cesium.Material.fromType('ElevationRamp');
      const shadingUniforms = material.uniforms;
      shadingUniforms.image = getColorRamp();
      shadingUniforms.minimumHeight = minHeight * scene.verticalExaggeration;
      shadingUniforms.maximumHeight = maxHeight * scene.verticalExaggeration;
      globe.material = material;
      return;
    }
    scene.verticalExaggeration = 10;

    // 启用阴影
    scene.shadows = Cesium.ShadowMode.ENABLED;

    // 启用光照
    scene.globe.enableLighting = false;

    scene.fxaa = true;
    showTerrain();
  };
  //销毁地形
  const removeTerrain = (viewer: Cesium.Viewer) => {
    if (handlerIns.value) {
      //清除事件监听
      viewer.camera.changed.removeEventListener(handlerIns.value);
      //初始化 handlerIns
      handlerIns.value = null;
    }
    //恢复默认材质
    viewer.scene.globe.material = undefined;
    //销毁地形
    viewer.scene.terrainProvider = new Cesium.EllipsoidTerrainProvider({});
  };
  return {
    loadTerrain,
    loadSeafloorTerrain,
    removeTerrain,
  };
}
