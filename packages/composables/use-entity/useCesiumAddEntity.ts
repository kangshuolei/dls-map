/**
 * 私有api（底层api），不对外暴露
 * viewer 代表 window.viewer , 所以只能在viewer挂在完后使用
 */
/**
 * 打点billboard私有方法
 * @param {Number} lon 经度 必填
 * @param {Number} lat 纬度 必填
 * @param {String} imgUrl 图片路径 必填
 * @param {String} name 名称 可选
 * @param {Number} width 用于指定图片的宽度（以像素为单位），并覆盖原始尺寸 可选
 * @param {Number} height 用于指定图片的高度（以像素为单位），并覆盖原始尺寸 可选
 * @param {Number| Property} scale 图片缩放比例 可选
 * @param {Boolean} click 是否可点击 可选
 * @param {Number} doubleClickHeight 双击高度 可选
 * @param {Object} attribute 点属性 可选
 * @param {String} popContent 单击弹框内容 可选
 * @param {String} pointHeight 点的高度 可选
 * @param {String} doubleClickPitch 双击pitch 可选
 * @return entity
 */
function addBillboard(
  lon: number,
  lat: number,
  imgUrl: any,
  {
    name = 'Point',
    width,
    height,
    scale,
    click = true,
    shengClick = false,
    doubleClickHeight = 5000,
    attribute = {},
    popContent,
    pointHeight,
    doubleClickPitch = -90,
  }: any,
  viewer: any
) {
  let h = pointHeight ? pointHeight : 0;
  if (!viewer) {
    console.error('viewer is undefined');
    return false;
  }
  let entity = viewer.entities.add({
    name: name,
    position: Cesium.Cartesian3.fromDegrees(lon, lat, h),
    billboard: {
      image: imgUrl,
      width: width,
      height: height,
      scale: scale,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      HorizontalOrigin: Cesium.HorizontalOrigin.CENTER,
    },
    attribute: attribute,
    click: click,
    shengClick: shengClick,
    doubleClickHeight: doubleClickHeight,
    lon: lon,
    lat: lat,
    popContent: popContent,
    doubleClickPitch: doubleClickPitch,
  });
  return entity;
}
/**
 * 添加飞线
 * @param {*} positions 设置指定 Cartesian3 数组的属性定义线条的位置
 * @param {MaterialProperty} material 获取或设置指定用于绘制折线的材料的属性
 * @param {String} name 名称
 * @param {Number} width 宽度
 */
function addLine(
  positions: any,
  material: any,
  { name = 'Line', width = 3 },
  viewer: any
) {
  let entity = viewer.entities.add({
    name: name,
    polyline: {
      positions: positions,
      width: width,
      material: material,
    },
  });
  return entity;
}

/**
 *
 * @param latitude 纬度 必填
 * @param longitude 经度 必填
 * @param radius  半径 必填
 * @param color 颜色 必填
 */
function addCircle(
  longitude: number,
  latitude: number,
  radius: number,
  color: string,
  viewer: any,
  name = 'Circle'
) {
  if (!viewer) {
    console.error('viewer is undefined');
    return false;
  }
  let entity = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(longitude, latitude),
    ellipse: {
      semiMinorAxis: radius,
      semiMajorAxis: radius,
      material: new Cesium.ColorMaterialProperty(
        Cesium.Color.fromCssColorString(color)
      ),
    },
  });
  return entity;
}
export { addBillboard, addLine, addCircle };
