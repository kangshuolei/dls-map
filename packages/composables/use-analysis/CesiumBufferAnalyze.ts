import { buffer, polygon, lineString, point } from '@turf/turf';
import { convertToLonLat } from '@dls-map/utils';

interface Position {
  lon: number;
  lat: number;
  alt: number;
}
type DrawTypes = 'Point' | 'Polyline' | 'Polygon';

export default class Buffer {
  viewer: Cesium.Viewer;
  drawLayer: Cesium.CustomDataSource;
  radius: number = 0;
  maxRadius: number = 999000; // 设置最大值为100（可以根据需要修改）
  drawPolyogn: Cesium.Cartesian3[] = null;
  drawType: DrawTypes;
  constructor(viewer: Cesium.Viewer | unknown, radius: number) {
    this.viewer = viewer;
    this.radius = this.setRadius(radius);
    this.drawLayer = new Cesium.CustomDataSource('measureLayer');
    this.viewer.dataSources.add(this.drawLayer);
  }

  /**
   * 坐标转换 84转笛卡尔
   * @param {Position} position 位置
   * @param {number} alt 高度
   * @returns {any} 笛卡尔坐标
   */
  transformWGS84ToCartesian = (position: Position, alt = 0): any =>
    position
      ? Cesium.Cartesian3.fromDegrees(
          position.lon,
          position.lat,
          alt || position.alt,
          Cesium.Ellipsoid.WGS84
        )
      : Cesium.Cartesian3.ZERO;

  /**
   * 坐标数组转换 笛卡尔转84
   * @param {Array} WSG84Arr {lon,lat,alt} 地理坐标数组
   * @param {Number} alt 拔高
   * @return {Array} Cartesian3 三维位置坐标数组
   */
  transformWGS84ArrayToCartesianArray(WSG84Arr: number[], alt: number): any[] {
    return WSG84Arr
      ? WSG84Arr.map((item: any) => this.transformWGS84ToCartesian(item, alt))
      : [];
  }

  /**
   * 坐标转换 笛卡尔转84
   * @param {Object} cartesian 三维位置坐标
   * @return {Object} {lon,lat,alt} 地理坐标
   */
  transformCartesianToWGS84 = (cartesian: any | undefined): any => {
    const ellipsoid = Cesium.Ellipsoid.WGS84;
    const cartographic = ellipsoid.cartesianToCartographic(cartesian);

    return {
      lon: Cesium.Math.toDegrees(cartographic.longitude),
      lat: Cesium.Math.toDegrees(cartographic.latitude),
      alt: cartographic.height,
    };
  };

  /**
   * 坐标数组转换 笛卡尔转86
   * @param {Array} cartesianArr 三维位置坐标数组
   * @return {Array} {lon,lat,alt} 地理坐标数组
   */
  transformCartesianArrayToWGS84Array(cartesianArr: number[]): any {
    if (this.viewer) {
      return cartesianArr
        ? cartesianArr.map((item: any) => this.transformCartesianToWGS84(item))
        : [];
    }
  }

  /**
   * 84坐标转弧度坐标
   * @param {Object} position wgs84
   * @return {Object} Cartographic 弧度坐标
   */
  transformWGS84ToCartographic = (position: Position): any =>
    position
      ? Cesium.Cartographic.fromDegrees(
          position.lon || position.lon,
          position.lat,
          position.alt
        )
      : Cesium.Cartographic.ZERO;

  /**
   * 拾取位置点
   * @param {Object} px 屏幕坐标
   * @return {Object} Cartesian3 三维坐标
   */
  getCatesian3FromPX(px: any | undefined): any {
    if (this.viewer && px) {
      const picks = this.viewer.scene.drillPick(px);

      let cartesian = null;
      let isOn3dtiles = false;
      let isOnTerrain = false;
      // drillPick

      Object.keys(picks).forEach((i: any) => {
        const pick = picks[i];

        if (
          pick &&
          pick.primitive instanceof
            (Cesium.Cesium3DTileFeature ||
              Cesium.Cesium3DTileset ||
              Cesium.Model)
        ) {
          isOn3dtiles = true;
        }
        // 3dtilset
        if (isOn3dtiles) {
          this.viewer.scene.pick(px);
          cartesian = this.viewer.scene.pickPosition(px);
          if (cartesian) {
            const cartographic = Cesium.Cartographic.fromCartesian(cartesian);

            if (cartographic.height < 0) cartographic.height = 0;
            const lon = Cesium.Math.toDegrees(cartographic.longitude);
            const lat = Cesium.Math.toDegrees(cartographic.latitude);
            const { height } = cartographic;

            cartesian = this.transformWGS84ToCartesian({
              lon,
              lat,
              alt: height,
            });
          }
        }
      });

      // 地形
      const boolTerrain =
        this.viewer.terrainProvider instanceof Cesium.EllipsoidTerrainProvider;
      // Terrain

      if (!isOn3dtiles && !boolTerrain) {
        const ray = this.viewer.scene.camera.getPickRay(px);

        if (!ray) return null;
        cartesian = this.viewer.scene.globe.pick(ray, this.viewer.scene);
        isOnTerrain = true;
      }
      // 地球
      if (!isOn3dtiles && !isOnTerrain && boolTerrain) {
        cartesian = this.viewer.scene.camera.pickEllipsoid(
          px,
          this.viewer.scene.globe.ellipsoid
        );
      }
      if (cartesian) {
        const position = this.transformCartesianToWGS84(cartesian);

        if (position.alt < 0) {
          cartesian = this.transformWGS84ToCartesian(position, 0.1);
        }

        return cartesian;
      }

      return false;
    }
  }

  async createBuffer(drawPolyogn: Cesium.Cartesian3[], drawType: DrawTypes) {
    return new Promise((resolve, reject) => {
      this.drawPolyogn = drawPolyogn;
      this.drawType = drawType;
      if (drawType === 'Polygon') {
        if (
          drawPolyogn[0].x !== drawPolyogn[drawPolyogn.length - 1].x ||
          drawPolyogn[0].y !== drawPolyogn[drawPolyogn.length - 1].y ||
          drawPolyogn[0].z !== drawPolyogn[drawPolyogn.length - 1].z
        ) {
          // 如果不一致，添加一个相同的点
          drawPolyogn.push(drawPolyogn[0]);
        }
      }
      let drawPolyognLatLon = convertToLonLat(drawPolyogn);
      let bufferPosition = this.initPolygonBuffer(
        drawPolyognLatLon,
        this.radius,
        drawType
      );
      resolve(bufferPosition);
    });
  }

  // 初始化面缓冲
  initPolygonBuffer(
    bufferPolyogn: any,
    distance: number | undefined,
    drawType: 'Point' | 'Polyline' | 'Polygon'
  ) {
    let degreesArray = this.pointsToDegreesArray(bufferPolyogn);
    let polygonF = null;
    if (drawType === 'Polygon') {
      polygonF = polygon([bufferPolyogn]);
    } else if (drawType === 'Polyline') {
      polygonF = lineString(bufferPolyogn);
    } else if (drawType === 'Point') {
      polygonF = point(bufferPolyogn[0]);
    }
    const buffered = buffer(polygonF, distance, { units: 'meters' });
    const { coordinates } = buffered.geometry;

    const points = coordinates[0];

    degreesArray = this.pointsToDegreesArray(points);
    this.addBufferPolyogn(Cesium.Cartesian3.fromDegreesArray(degreesArray));
    return Cesium.Cartesian3.fromDegreesArray(degreesArray);
  }

  // 添加缓冲面
  addBufferPolyogn(positions: any) {
    this.drawLayer.entities.add({
      id: 'polyognBuffer',
      polygon: {
        hierarchy: new Cesium.PolygonHierarchy(positions),
        material: Cesium.Color.RED.withAlpha(0.3),
        classificationType: Cesium.ClassificationType.BOTH,
        // clampToGround: true,
      },
    });
  }

  //更新缓冲面
  updateBuffer(distance: number) {
    //设置半径
    this.setRadius(distance);
    //删除已有的
    this.clear();
    //创建新的 缓冲区
    this.createBuffer(this.drawPolyogn, this.drawType);
  }

  // 坐标点格式转换
  pointsToDegreesArray(points: any): any {
    const degreesArray: any[] = [];

    points.map((item: any) => {
      degreesArray.push(item[0]);
      degreesArray.push(item[1]);
    });

    return degreesArray;
  }

  setRadius(changeDis: number): number {
    let radius = Math.max(0, Math.min(changeDis, this.maxRadius));
    this.radius = radius;
    return radius;
  }
  // 地图绘制要素清除
  clear = (): void => {
    if (this.drawLayer.entities) {
      this.drawLayer.entities.removeAll();
    }
  };
}
