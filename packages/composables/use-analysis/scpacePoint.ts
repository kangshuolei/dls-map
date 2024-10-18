/*
 * @Author: Kang
 * @Date: 2024-10-18 17:05:06
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-18 17:58:39
 */
import * as turf from '@turf/turf';
/**
 * 获取实体点的经纬度信息
 * @param point 实体点位
 */
function getEntitiesPointLnoLat(entitiesPoint: any) {
  let position = entitiesPoint.position.getValue(Cesium.JulianDate.now());
  let longitude = Cesium.Math.toDegrees(
    Cesium.Cartographic.fromCartesian(position).longitude
  );
  let latitude = Cesium.Math.toDegrees(
    Cesium.Cartographic.fromCartesian(position).latitude
  );
  return { position: [longitude, latitude], entities: entitiesPoint };
}
function cartograhicToDegrees(cartograhic: any) {
  return [
    Cesium.Math.toDegrees(cartograhic.longitude),
    Cesium.Math.toDegrees(cartograhic.latitude),
  ];
}
/**
 * 分析点在不在面里
 * @param viewer Cesium.Viewer
 * @param polygonData 面的数据
 * @param pointData 点位的实例
 */
export function CesiumScpacePoint(
  polygonData: Cesium.Cartesian3[],
  pointData: Cesium.Entity[]
) {
  if (
    polygonData[0].x !== polygonData[polygonData.length - 1].x ||
    polygonData[0].y !== polygonData[polygonData.length - 1].y ||
    polygonData[0].z !== polygonData[polygonData.length - 1].z
  ) {
    // 如果不一致，添加一个相同的点
    polygonData.push(polygonData[0]);
  }
  let brightEntities: Cesium.Entity[] = [];
  // 转换为 Cesium.Cartesian3 格式
  const cartesianCoordinates = polygonData.map(
    (coord) => new Cesium.Cartesian3(coord.x, coord.y, coord.z)
  );
  // 使用 Cesium.PolygonHierarchy 创建多边形
  const polygonHierarchy = new Cesium.PolygonHierarchy(cartesianCoordinates);
  let cartographicPolygon =
    Cesium.Ellipsoid.WGS84.cartesianArrayToCartographicArray(
      polygonHierarchy.positions
    );
  //把面转成turf格式的面
  let geoJsonPolygon = turf.polygon([
    cartographicPolygon.map(cartograhicToDegrees),
  ]);

  pointData.forEach((item) => {
    //获取实体点的经纬度信息
    let res = getEntitiesPointLnoLat(item);
    //根据点的经纬度，通过turf转成turf格式的点
    let pointTurf = turf.point(res.position);
    //通过 turf 的 booleanPointInPolygon 方法判断点是不是在面里
    let isInside = turf.booleanPointInPolygon(pointTurf, geoJsonPolygon);
    if (isInside) {
      //把在范围内的坐标点位实体存到 brightEntities 中
      brightEntities.push(item);
    }
  });

  return brightEntities;
}
