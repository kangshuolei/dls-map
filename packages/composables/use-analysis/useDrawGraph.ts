/**
 * 添加实线
 * @param {Array} position 经纬度坐标 [lon,lat, ..., lon,lat] 至少二个经纬度坐标
 * @param {Object} option 配置项 可选
 */
function addSoildLine(position: any, option: any = {}) {
  let color = option.color
    ? Cesium.Color.fromBytes(...option.color)
    : Cesium.Color.RED;
  let positions = Cesium.Cartesian3.fromDegreesArray(position);
  // let material = new Cesium.PolylineArrowMaterialProperty(color)  // 带箭头的线
  let material = color;
  // let entity = addLine(positions, material, option);
  // return entity;
}
/**
 * 绘制线路
 * @param {Object} viewer 图层视图
 * @param {String} name  线路名称
 * @param {Array} color 线路颜色 可选
 * @param {Number} color 线路宽度 可选
 */
function DrawSoildLine(
  viewer: Cesium.Viewer,
  names: string,
  color: [number, number, number] | [number, number, number, number],
  width: number
) {
  if (!viewer) {
    console.error('viewer is undefined');
    return false;
  }
  let distance: any = 0;
  var layerLine = undefined;
  let lineEntityCollection = new Cesium.CustomDataSource('measureLine');
  viewer.dataSources.add(lineEntityCollection);
  document.body.style.cursor = 'crosshair'; // 鼠标
  var handler: Cesium.ScreenSpaceEventHandler =
    new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
  // 线路配置项
  let option = {
    name: names,
    color: color ? Cesium.Color.fromBytes(...color) : Cesium.Color.RED,
    width: width,
  };

  var layer = new Cesium.CustomDataSource('MyLines');
  viewer.dataSources.add(layer);
  var activeShapePoints: any[] = [],
    activeShape: any = undefined;
  // 鼠标左键单击画点
  handler.setInputAction((click: any) => {
    const earthPosition = getPosition(viewer, click.position);
    if (Cesium.defined(earthPosition)) {
      if (activeShapePoints.length === 0) {
        activeShapePoints.push(earthPosition);
        const dynamicPositions = new Cesium.CallbackProperty(() => {
          return activeShapePoints;
        }, false);
        activeShape = drawLine(layer, dynamicPositions, option);
      }
      activeShapePoints.push(earthPosition);
      try {
        if (lineEntityCollection) {
          let textDisance = distance + '米';
          lineEntityCollection.entities.add({
            name: '空间直线距离',
            position: activeShapePoints[activeShapePoints.length - 1],
            point: {
              pixelSize: 5,
              color: Cesium.Color.RED,
              outlineColor: Cesium.Color.WHITE,
              outlineWidth: 2,
            },
            label: {
              text: textDisance,
              font: '18px sans-serif',
              fillColor: Cesium.Color.GOLD,
              style: Cesium.LabelStyle.FILL_AND_OUTLINE,
              outlineWidth: 2,
              verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
              pixelOffset: new Cesium.Cartesian2(20, -20),
            },
          });
        }
      } catch (error) {
        console.log(`errorerror`, error);
      }
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  // 鼠标移动
  handler.setInputAction((move: any) => {
    if (activeShapePoints.length >= 2) {
      const earthPosition = getPosition(viewer, move.endPosition);
      if (Cesium.defined(earthPosition)) {
        activeShapePoints.pop();
        activeShapePoints.push(earthPosition);
      }
      distance = getSpaceDistance(activeShapePoints);
    }
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  // 单击鼠标右键结束画线
  handler.setInputAction((click: any) => {
    handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    activeShapePoints.pop();
    layer.entities.remove(activeShape);
    layerLine = drawLine(layer, activeShapePoints, option);
    document.body.style.cursor = 'default';
    // 移除监听事件
    setTimeout(() => {
      activeShapePoints = [];
      handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
      handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
      if (handler) {
        handler.destroy(); // 销毁 handler
        handler = null; // 将 handler 设为 null
      }
    }, 500);
  }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
  return layerLine;
}
/**
 * 添加鼠标点击事件的位置
 * @param {Cesium.Viewer} viewer 目标地图
 * @param {Cesium.Cartesian2} position 鼠标位置
 * @return {Cesium.Cartesian3} 鼠标点击位置的坐标
 */
function getPosition(viewer: Cesium.Viewer, position: any) {
  let earthPosition = undefined;
  // 球面
  if (viewer.terrainProvider instanceof Cesium.EllipsoidTerrainProvider) {
    earthPosition = viewer.scene.camera.pickEllipsoid(position);
  }
  // 地形
  else {
    const ray = viewer.camera.getPickRay(position);
    earthPosition = viewer.scene.globe.pick(ray, viewer.scene);
  }
  return earthPosition;
}

function drawLine(layer: any, positionData: any, option: any) {
  return layer.entities.add({
    name: option.name,
    polyline: {
      positions: positionData,
      clampToGround: true,
      width: option.width,
      material: option.color,
    },
  });
}
function removeDrawLine(viewer: Cesium.Viewer) {
  if (!viewer) {
    console.error('viewer is undefined');
    return false;
  }
  viewer.dataSources.removeAll();
}
//空间两点距离计算函数
function getSpaceDistance(positions: any) {
  let distance = 0;
  for (let i = 0; i < positions.length - 1; i++) {
    let point1cartographic = Cesium.Cartographic.fromCartesian(positions[i]);
    let point2cartographic = Cesium.Cartographic.fromCartesian(
      positions[i + 1]
    );
    /**根据经纬度计算出距离**/
    let geodesic = new Cesium.EllipsoidGeodesic();
    geodesic.setEndPoints(point1cartographic, point2cartographic);
    let s = geodesic.surfaceDistance;
    //返回两点之间的距离
    s = Math.sqrt(
      Math.pow(s, 2) +
        Math.pow(point2cartographic.height - point1cartographic.height, 2)
    );
    distance = distance + s;
  }
  return distance.toFixed(2);
}

export { DrawSoildLine, removeDrawLine };
