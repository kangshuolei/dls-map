/*
 * @Author: Kang
 * @Date: 2024-07-22 09:02:25
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-25 14:44:19
 */
/**
 *
 * @param {*} terrainAry 一个数组对象，{url,type,range}  url:地形的地址，type: global | region 全球和区域，range：区域的范围
 * @param {*} height  相机到达或出去这个高度时，加载不同地形
 * @param {*} viewerMap viewer实体
 * @returns
 * 因为所里项目大多是离线的，导致地形不是全的，所以在某一区域只加载某一区域的精细地形
 */

type TerrainAryType = {
  url: string; //地形的链接
  range?: [number, number, number, number] | null; // 必须是包含四个数字的元组
  type: 'global' | 'region'; //整个地球或者是区域
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

export function useLoadTerrain(
  terrainAry: TerrainAryType[],
  height = 1000000,
  viewer: any
) {
  if (!terrainAry.length) return false;
  if (!viewer) {
    console.error('viewer is undefined');
    return false;
  }
  //只有3D地球再加载地形
  if (viewer.scene.mode === Cesium.SceneMode.SCENE3D) {
    //如果有全球，就先加载全球的
    let globalTerrain = terrainAry.filter((item) => item.type === 'global');
    if (globalTerrain && globalTerrain.length) {
      const terrainProvider = new Cesium.CesiumTerrainProvider({
        url: globalTerrain[0].url,
      });
      viewer.terrainProvider = terrainProvider;
    }
    //状态变量
    let hasReturneRange = false;
    let hasExecutedOtherMethod = false;
    //如果有区域的地形，就加载区域地形
    let regionTerrain = terrainAry.filter((item) => item.type === 'region');
    if (regionTerrain && regionTerrain.length) {
      //监听相机高度
      viewer.camera.changed.addEventListener(function () {
        let cameraPosition = viewer.camera.positionCartographic;
        let latitude = Cesium.Math.toDegrees(cameraPosition.latitude);
        let longitude = Cesium.Math.toDegrees(cameraPosition.longitude);
        let heightCam = cameraPosition.height;
        if (!hasReturneRange) {
          let matcheRange = findRange(longitude, latitude, regionTerrain);
          if (matcheRange && heightCam < height) {
            hasReturneRange = true;
            hasExecutedOtherMethod = false;
            const terrainProvider = new Cesium.CesiumTerrainProvider({
              url: matcheRange.url,
            });
            viewer.terrainProvider = terrainProvider;
          }
        } else if (!hasExecutedOtherMethod && heightCam > height) {
          if (globalTerrain && globalTerrain.length) {
            const terrainProvider = new Cesium.CesiumTerrainProvider({
              url: globalTerrain[0].url,
            });
            viewer.terrainProvider = terrainProvider;
          }
          hasExecutedOtherMethod = true;
          hasReturneRange = false;
        }
      });
    }
  }
}
