import { buffer, polygon } from '@turf/turf';

interface Position {
  lon: number;
  lat: number;
  alt: number;
}

export default class Buffer {
  viewer: any;

  drawLayer: any;

  handler: any;

  radius = 500000;

  constructor(
    viewer: any | unknown,
    radius: number,
    options = { basePath: '' }
  ) {
    this.viewer = viewer;
    this.radius = radius;
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

      Object.keys(picks).forEach((i) => {
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

  /**
   * 绘制面
   */
  polyBuffer(): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      if (this.viewer) {
        this.viewer.scene.globe.depthTestAgainstTerrain = true;
        let positions: any = [];
        let polyPoint: any = [];
        const polygonHie = new Cesium.PolygonHierarchy();
        const polygonEntity: any = new Cesium.Entity();

        if (this.handler) {
          this.handler.destroy();
        }
        this.handler = new Cesium.ScreenSpaceEventHandler(
          this.viewer.scene.canvas
        );

        this.handler.setInputAction((movement: any) => {
          const cartesian = this.getCatesian3FromPX(movement.position);
          const cartographic = Cesium.Cartographic.fromCartesian(cartesian);

          if (cartesian) {
            const lon = Cesium.Math.toDegrees(cartographic.longitude);
            const lat = Cesium.Math.toDegrees(cartographic.latitude);
            const { height } = cartographic;

            if (positions.length === 0) {
              polygonHie.positions.push(cartesian.clone());
              positions.push(cartesian.clone());
              polyPoint.push([lon, lat, height]);
            }
            positions.push(cartesian.clone());
            polygonHie.positions.push(cartesian.clone());
            polyPoint.push([lon, lat, height]);
          }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        // mouse_move
        this.handler.setInputAction((movement: any) => {
          const cartesian = this.getCatesian3FromPX(movement.endPosition);
          const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
          const lon = Cesium.Math.toDegrees(cartographic.longitude);
          const lat = Cesium.Math.toDegrees(cartographic.latitude);
          const { height } = cartographic;

          if (positions.length >= 2) {
            if (cartesian) {
              positions.pop();
              positions.push(cartesian);
              polygonHie.positions.pop();
              polygonHie.positions.push(cartesian);
              polyPoint.pop();
              polyPoint.push([lon, lat, height]);
            }
          }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        // left结束绘制
        this.handler.setInputAction((movement: any) => {
          if (positions.length > 2) {
            positions.push(positions[0]);
            polyPoint.push(polyPoint[0]);
            const arrData = [...polyPoint];
            this.addPolygon(positions);
            this.initPolygonBuffer(polyPoint, this.radius);
            positions = [];
            polyPoint = [];
            polygonHie.positions = [];
            resolve(arrData);
          }
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
        this.handler.setInputAction((e: any) => {
          this.clear();
          // bus.emit('bufferState')
        }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
        polygonEntity.polyline = {
          width: 3,
          material: Cesium.Color.YELLOW.withAlpha(0.8),
          clampToGround: true,
        };

        polygonEntity.polyline.positions = new Cesium.CallbackProperty(
          () => positions,
          false
        );
        polygonEntity.polygon = {
          hierarchy: new Cesium.CallbackProperty(() => polygonHie, false),
          material: Cesium.Color.WHITE.withAlpha(0.1),
          clampToGround: true,
        };
        this.drawLayer.entities.add(polygonEntity);
      }
    });
  }

  // 初始化面缓冲
  initPolygonBuffer(
    bufferPolyogn: any,
    distance: number | undefined
  ): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      let degreesArray = this.pointsToDegreesArray(bufferPolyogn);

      const polygonF = polygon([bufferPolyogn]);
      const buffered = buffer(polygonF, distance, { units: 'meters' });
      const { coordinates } = buffered.geometry;

      const points = coordinates[0];

      degreesArray = this.pointsToDegreesArray(points);
      this.addBufferPolyogn(Cesium.Cartesian3.fromDegreesArray(degreesArray));
      //resolve(Cesium.Cartesian3.fromDegreesArray(degreesArray))
      resolve(bufferPolyogn);
    });
  }

  // 添加缓冲面
  addBufferPolyogn(positions: any) {
    this.drawLayer.entities.add({
      id: 'polyognBuffer',
      polygon: {
        hierarchy: new Cesium.PolygonHierarchy(positions),
        material: Cesium.Color.RED.withAlpha(0.3),
        classificationType: Cesium.ClassificationType.BOTH,
        clampToGround: true,
      },
    });
  }

  // 添加面
  addPolygon(positions: any) {
    this.drawLayer.entities.add({
      polygon: {
        hierarchy: new Cesium.PolygonHierarchy(positions),
        material: Cesium.Color.WHITE.withAlpha(0.1),
        classificationType: Cesium.ClassificationType.BOTH,
        clampToGround: true,
      },
      polyline: {
        positions,
        width: 2,
        material: Cesium.Color.YELLOW.withAlpha(0.4),
        clampToGround: true,
      },
    });
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

  changeRadius(changeDis: number): void {
    this.radius = changeDis;
  }
  // 地图绘制要素清除
  clear = (): void => {
    this.drawLayer.entities.removeAll();
    return this.handler && this.handler.destroy();
  };
}
