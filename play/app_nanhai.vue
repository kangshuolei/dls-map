<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-16 15:09:43
-->
<template>
  <div class="appMain">
    <dls-map
      :mapConfig="{
        id: 'dls-map-start',
        imageryProvider: dataM.imageryProvider,
        sceneModeNum: 3,
      }"
      :viewer-config="{
        contextOptions: {
          webgl: {
            antialias: true, // 启用抗锯齿
          },
        },
      }"
      :viewer-width="'100%'"
      :viewer-height="'100%'"
      ref="dlsMapRef"
      @ready="onCesiumReady"
    />
    <div class="coords">
      <canvas id="colorRamp"></canvas>
      <!-- 经度：{{ dataM.coords.longitude }}， 纬度：{{ dataM.coords.latitude }}，
      海拔：{{ dataM.coords.altitude }}m， 高度：{{ dataM.coords.height }}m，
      方向：{{ dataM.coords.cameraHeading }}°， 俯仰角：{{
        dataM.coords.pitchDegrees
      }}°， 层级：{{ dataM.coords.zoomLevel }} -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DlsMap } from '@dls-map/components';
import {
  useCesiumCoord,
  useCesiumFlyTo,
  useLoadTerrain,
} from '@dls-map/composables';
import { onMounted, ref, reactive, watch } from 'vue';

const { listenToMouseMovement, coords } = useCesiumCoord();
const dlsMapRef = ref(null);
const dataM = reactive<any>({
  imageryProvider: {
    url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    layer: 'tdtVecBasicLayer',
    style: 'default',
    format: 'image/png',
    tileMatrixSetID: 'GoogleMapsCompatible',
  },
  coords: {},
});

watch(coords, (newValue) => {
  // dataM.coords = newValue;
});

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

//cesium初始化完成之后
const onCesiumReady = async (e: any) => {
  const viewer = e.viewer;
  // useLoadTerrain(
  //   [
  //     {
  //       type: 'global',
  //       url: '/map/nanahaidixing',
  //       range: [0, 0, 0, 0],
  //     },
  //   ],
  //   28000,
  //   viewer
  // );

  function formatNumberLength(num = 0, radix = 10, length = 0) {
    let str = num.toString(radix);
    if (length === 0) {
      return str;
    }
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }
  const arcgis_layer = new Cesium.UrlTemplateImageryProvider({
    url: '/map/alllayers/_alllayers/{zz}/{yy}/{xx}.png',
    // rectangle: Cesium.Rectangle.fromDegrees(0, 0, 0, 0),
    // rectangle: Cesium.Rectangle.fromDegrees(
    //   101.7594,
    //   3.173675,
    //   125.6025,
    //   30.06546
    // ), // 瓦片原点调整
    // rectangle: Cesium.Rectangle.fromDegrees(
    //   101.7594,
    //   3.173675,
    //   125.6025,
    //   30.06546
    // ),
    // minimumLevel: 0,
    // maximumLevel: 11,
    // CGCS2000坐标系的切片使用GeographicTilingScheme切片方案也可以加载，目前没有发现异常
    tilingScheme: new Cesium.GeographicTilingScheme({
      // tileWidth: 1024, // 瓦片宽度
      // tileHeight: 1024, // 瓦片高度
      // rectangle: Cesium.Rectangle.fromDegrees(
      //   101.7594,
      //   3.173675,
      //   125.6025,
      //   30.06546
      // ), // 瓦片原点调整
      numberOfLevelZeroTilesX: 2,
      numberOfLevelZeroTilesY: 1,
    }),
    // 解析自定义占位符号
    customTags: {
      xx: (imageryProvider: any, x: any, y: any, level: any) => {
        const xx = 'C' + formatNumberLength(x, 16, 8);
        return xx;
      },
      yy: (imageryProvider: any, x: any, y: any, level: any) => {
        const yy = 'R' + formatNumberLength(y, 16, 8);
        return yy;
      },
      zz: (imageryProvider: any, x: any, y: any, level: any) => {
        const zz = 'L' + formatNumberLength(level, 10, 2);
        return zz;
      },
    },
  });
  viewer.scene.imageryLayers.addImageryProvider(arcgis_layer);
  // const tileUrl = '/map/alllayers/L{z}/R{y}/C{x}.png';
  // viewer.scene.imageryLayers.addImageryProvider(
  //   //lab切的影像图
  //   await Cesium.ArcGisMapServerImageryProvider.fromUrl('/map/alllayers')
  // );
  // viewer.scene.globe.enableLighting = false; // 禁用默认光照效果

  //viewer.scene.globe.maximumScreenSpaceError = 0.5; // 默认值为2，减小可以提高细节
  // listenToMouseMovement(viewer);
  useCesiumFlyTo(viewer, [114.62, 15.02, 2800000]);
  // viewer.terrainProvider = await  ({
  //   requestVertexNormals: true,
  // });
  viewer.terrainProvider = await Cesium.CesiumTerrainProvider.fromUrl(
    '/map/nanahaidixing',
    // 'https://data.mars3d.cn/terrain',
    {
      // requestWaterMask: true,
      // requestVertexNormals: true,
      // minimumPixelSize: 64,
      // maximumScale: 20000,
      // requestMetadata: true,
      requestVertexNormals: true,
    }
  );
  // viewer.scene.globe.terrainExaggeration = 50.0;

  const scene: Cesium.Scene = viewer.scene;

  const globe: Cesium.Globe = scene.globe;

  viewer.scene.globe.showGroundAtmosphere = false;
  viewer.scene.globe.showSkyAtmosphere = false;

  // globe.maximumScreenSpaceError = 1;

  const minHeight = -10000.0;
  const maxHeight = 2000.0;
  // const minHeight = -8926.0;
  // const maxHeight = 5775.0;

  const range = maxHeight - minHeight;
  const d = (height: any) => (height - minHeight) / range;
  function getColorRamp() {
    const ramp: any = document.getElementById('colorRamp');
    ramp.width = 100;
    ramp.height = 15;
    const ctx = ramp.getContext('2d');
    const grd = ctx.createLinearGradient(0, 0, 100, 0);
    grd.addColorStop(d(maxHeight), '#FF0000'); // rgb(255, 0, 0)
    grd.addColorStop(d(100), '#FF5500'); // rgb(255, 85, 0)
    grd.addColorStop(d(0), '#E69900'); // rgb(230, 153, 0)
    grd.addColorStop(d(-500), '#FFD280'); // rgb(255, 210, 128)
    // grd.addColorStop(d(-1000), '#F9FCCA');
    grd.addColorStop(d(-1000), '#FFFF73'); // rgb(255, 255, 115)
    grd.addColorStop(d(-1500), '#FFFFBF'); // rgb(255, 255, 191)
    grd.addColorStop(d(-2000), '#006FFF'); // rgb(0, 111, 255)
    grd.addColorStop(d(-2500), '#00A8E6'); // rgb(0, 168, 230)
    grd.addColorStop(d(-5000), '#0084A8'); // rgb(0, 132, 168)
    grd.addColorStop(d(minHeight), '#004CA8'); // rgb(0, 76, 168)
    // grd.addColorStop(d(-8000.0), 'rbg(255,85,0)');
    // grd.addColorStop(d(minHeight), 'rbg(255,85,0)');

    // grd.addColorStop(d(maxHeight), '#B79E6C');
    // grd.addColorStop(d(100.0), '#FBFFEE');
    // grd.addColorStop(d(0.0), '#F9FCCA');
    // grd.addColorStop(d(-500.0), '#BDE7AD');
    // grd.addColorStop(d(-1000.0), '#81D2A3');
    // grd.addColorStop(d(-1500.0), '#5AB7A4');
    // grd.addColorStop(d(-2000.0), '#4C9AA0');
    // grd.addColorStop(d(-2500.0), '#437D9A');
    // grd.addColorStop(d(-4000.0), '#3E6194');
    // grd.addColorStop(d(-5000.0), '#424380');
    // grd.addColorStop(d(-8000.0), '#392D52');
    // grd.addColorStop(d(minHeight), '#291C2F');

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, ramp.width, ramp.height);

    return ramp;
  }
  function showTerrain() {
    let material = Cesium.Material.fromType('ElevationRamp');
    // viewer.scene.sun.lightIntensity = 0.5; // 调整光照强度
    const shadingUniforms = material.uniforms;
    shadingUniforms.image = getColorRamp();
    shadingUniforms.minimumHeight = minHeight * scene.verticalExaggeration;
    shadingUniforms.maximumHeight = maxHeight * scene.verticalExaggeration;
    globe.material = material;
    return;
  }
  scene.verticalExaggeration = 10;

  // scene.skyAtmosphere.show = true;

  // scene.fog.enabled = true;
  // globe.showGroundAtmosphere = true;

  // // 启用阴影
  // viewer.scene.shadows = Cesium.ShadowMode.ENABLED;

  // // 启用光照
  viewer.scene.globe.enableLighting = true;

  viewer.scene.fxaa = true;

  // 调整太阳位置和强度
  // viewer.scene.sun.show = true;
  // viewer.scene.sun.lightIntensity = 1.0;

  // 设置背景颜色
  viewer.scene.backgroundColor = Cesium.Color.BLACK;

  viewer.scene.globe.tileCacheSize = 1000;

  viewer.scene.globe.depthTestAgainstTerrain = true;

  viewer.scene.globe.maximumScreenSpaceError = 1;

  // function updateGlobeMaterialUniforms(zoomMagnitude: any) {
  //   const material = globe.material;
  //   if (!Cesium.defined(material)) {
  //     return;
  //   }

  //   const spacing = 5.0 * Math.pow(10, Math.floor(4 * zoomMagnitude));

  //   const uniforms = material.uniforms;
  //   uniforms.spacing = spacing * scene.verticalExaggeration;
  //   uniforms.minimumHeight = minHeight * scene.verticalExaggeration;
  //   uniforms.maximumHeight = maxHeight * scene.verticalExaggeration;
  // }

  // const camera = scene.camera;
  // const cameraMaxHeight = globe.ellipsoid.maximumRadius * 2;
  // const scratchNormal = new Cesium.Cartesian3();
  // scene.preRender.addEventListener(function (scene, time) {
  //   const surfaceNormal = globe.ellipsoid.geodeticSurfaceNormal(
  //     camera.positionWC,
  //     scratchNormal
  //   );
  //   const negativeNormal = Cesium.Cartesian3.negate(
  //     surfaceNormal,
  //     surfaceNormal
  //   );
  //   scene.light.direction = Cesium.Cartesian3.normalize(
  //     Cesium.Cartesian3.add(negativeNormal, camera.rightWC, surfaceNormal),
  //     scene.light.direction
  //   );

  //   const zoomMagnitude =
  //     Cesium.Cartesian3.magnitude(camera.positionWC) / cameraMaxHeight;

  //   updateGlobeMaterialUniforms(zoomMagnitude);
  // });

  // // 添加太阳光源
  // viewer.scene.light = new Cesium.DirectionalLight({
  //   direction: new Cesium.Cartesian3(0.0, -1.0, -1.0),
  // });

  showTerrain();
};
</script>

<style>
.appMain {
  width: 100%;
  height: 100%;
  .coords {
    position: absolute;
    z-index: 1;
    color: #ffffff;
    bottom: 0;
    right: 0;
    width: auto;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
