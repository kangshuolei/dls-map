/*
 * @Author: Kang
 * @Date: 2024-09-03 16:10:41
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-19 14:56:28
 */
import { compare, CompareOperator } from 'compare-versions';
/**
 * 加载js文件
 * @param src js的地址
 */
export const loadScript = (src: string) => {
  const $script = document.createElement('script');
  $script.async = false;
  $script.src = src;
  document.body.appendChild($script);
  return new Promise((resolve, reject) => {
    $script.onload = () => {
      resolve(true);
    };
  });
};

/**
 * 转换生成每两个点的数组集合
 * @param pointsArray [[long,lat],[long,lat]] 格式的数据
 * @returns
 */
export function groupPoints(pointsArray: any) {
  const groupedPoints = [];

  for (let i = 0; i < pointsArray.length; i++) {
    const group = [pointsArray[i], pointsArray[i + 1]];
    groupedPoints.push(group);
  }
  groupedPoints.pop();
  return groupedPoints;
}

/**
 * 计算两个点之间的中心点坐标
 * @param point1 第一个点的坐标[long,lat]
 * @param point2 第二个点的坐标[long,lat]
 * @returns 返回中心点
 */
export function twoToCenter(point1: any, point2: any) {
  //坐标转换
  const pointNew1 = Cesium.Cartesian3.fromDegrees(point1[0], point1[1]);

  const pointNew2 = Cesium.Cartesian3.fromDegrees(point2[0], point2[1]);

  //计算两个点的中心坐标
  const centerPoint = Cesium.Cartesian3.lerp(
    pointNew1,
    pointNew2,
    0.5,
    new Cesium.Cartesian3()
  );

  return centerPoint;
}

/**
 * 获取实体点的经纬度信息
 * @param point 实体点位
 */
export function getEntitiesPointLnoLat(entitiesPoint: any) {
  let position = entitiesPoint.position.getValue(Cesium.JulianDate.now());
  let longitude = Cesium.Math.toDegrees(
    Cesium.Cartographic.fromCartesian(position).longitude
  );
  let latitude = Cesium.Math.toDegrees(
    Cesium.Cartographic.fromCartesian(position).latitude
  );
  return { position: [longitude, latitude], entities: entitiesPoint };
}

// 将十六进制颜色转换为 Cesium.Color 对象
export function hexToCesiumColor(hex: string) {
  const bigint = parseInt(hex.slice(1), 16); // 去掉 '#' 并解析为整数
  const r = (bigint >> 16) & 255; // 提取红色值
  const g = (bigint >> 8) & 255; // 提取绿色值
  const b = bigint & 255; // 提取蓝色值
  return new Cesium.Color(r / 255, g / 255, b / 255); // 转换为 Cesium.Color 对象
}

/**
 *
 * @param a 当前版本
 * @param b 指定版本
 * @param operator 条件
 * @returns true | false
 */
export function compareCesiumVersion(
  a: string,
  b: string,
  operator: CompareOperator = '>='
) {
  a = a || '1.6.7';
  return compare(a, b, operator);
}

/**
 * Cesium.Cartesian3 批量转 经纬度
 * @param cartesianCoordinates Cesium.Cartesian3[]
 * @returns  经纬度
 */
export function convertToLonLat(cartesianCoordinates: Cesium.Cartesian3[]) {
  const ellipsoid = Cesium.Ellipsoid.WGS84;

  // 将 Cartesian3 批量转换为经纬度
  const convertedCoordinates = cartesianCoordinates.map(
    (cartesian: Cesium.Cartesian3) => {
      const cartographic = ellipsoid.cartesianToCartographic(cartesian);
      const longitude = Cesium.Math.toDegrees(cartographic.longitude);
      const latitude = Cesium.Math.toDegrees(cartographic.latitude);
      const height = cartographic.height;

      return [longitude, latitude, height];
    }
  );
  return convertedCoordinates;
}
