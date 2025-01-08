import * as turf from '@turf/turf';
import CesiumPlot from './plot';

export default class MeasureArea {
  public viewer: Cesium.Viewer;
  public tempPositions: Cesium.Cartesian3[] = [];
  public measureArea: number = 0; //测量结果
  public geometry: any = null;
  public centerPosition: any = null;
  public mesureResultEntity: any = null;
  private callback: any = null;
  public polygonStyle: any;
  public lableText: any;

  constructor(viewer: Cesium.Viewer, polygonStyle?: any, lableText?: any) {
    this.viewer = viewer;
    this.polygonStyle = polygonStyle;
    this.lableText = lableText;
  }

  //激活
  public activate(callback: any): void {
    const geometry = new CesiumPlot.Polygon(Cesium, this.viewer, {
      ...{
        material: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 0.5)'),
        outlineMaterial: Cesium.Color.fromCssColorString(
          'rgba(59, 178, 208, 1)'
        ),
        outlineWidth: 3,
        color: Cesium.Color.BLUE,
        pixelSize: 10,
        isEdit: false,
      },
      ...(this.polygonStyle ? this.polygonStyle : {}),
    });
    this.geometry = geometry;
    this.callback = callback;
    geometry.on('drawEnd', this.drawEndHandler);
  }

  cartesian3ToPoint3D = (
    position: Cesium.Cartesian3
  ): {
    x: number;
    y: number;
    z: number;
  } => {
    const cartographic = Cesium.Cartographic.fromCartesian(position);
    const lon = Cesium.Math.toDegrees(cartographic.longitude);
    const lat = Cesium.Math.toDegrees(cartographic.latitude);
    return { x: lon, y: lat, z: cartographic.height };
  };

  drawEndHandler = (e: any) => {
    if (e && e.geometryPoints && e.geometryPoints.length >= 3) {
      let positions = e.geometryPoints;
      this.tempPositions = e.geometryPoints;
      positions.push(positions[0]);
      if (positions.length < 3) return false; // 必须至少有3个点
      const points: number[][] = positions.map((position: any) => {
        const point3d = this.cartesian3ToPoint3D(position);
        return [point3d.x, point3d.y];
      });

      const geo = turf.polygon([points]);
      let area = turf.area(geo); // 使用 turf.js 来计算面积
      if (area) {
        this.createResultLabel(area);
        this.centerPosition = this.getCenterPosition();
        this.measureArea = area;
        if (this.callback && typeof this.callback === 'function') {
          this.callback(this); // 执行回调并传递结果
        }
      }
    } else {
      console.error('请正确画出多边形！');
    }
  };

  //清空绘制
  public clear(): void {
    if (this.mesureResultEntity) {
      this.viewer.entities.remove(this.mesureResultEntity);
      this.mesureResultEntity = undefined;
    }
    if (this.geometry) {
      this.geometry.remove();
      this.geometry = null;
    }
  }

  //测量结果标签
  createResultLabel = (area: number) => {
    this.mesureResultEntity = this.viewer.entities.add({
      position: this.getCenterPosition(),
      label: {
        ...{
          text: '面积: ' + area + '平方米',
          font: 28 + 'px sans-serif',
          fillColor: Cesium.Color.GOLD,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          outlineWidth: 2,
          heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new Cesium.Cartesian2(20, -20),
        },
        ...(this.lableText ? this.lableText : {}),
      },
    });
  };

  //获取节点的中心点
  getCenterPosition = () => {
    let points: number[][] = [];
    if (this.tempPositions.length < 3) return this.tempPositions[0];
    this.tempPositions.forEach((position) => {
      const point3d = this.cartesian3ToPoint3D(position);
      points.push([point3d.x, point3d.y]);
    });

    //构建turf.js  lineString
    let geo = turf.lineString(points);
    let bbox = turf.bbox(geo);
    let bboxPolygon = turf.bboxPolygon(bbox);
    let pointOnFeature = turf.center(bboxPolygon);
    let lonLat = pointOnFeature.geometry.coordinates;

    return Cesium.Cartesian3.fromDegrees(lonLat[0], lonLat[1], 0);
  };
}
