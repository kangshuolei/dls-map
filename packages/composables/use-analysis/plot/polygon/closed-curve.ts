import Base from '../base';
import * as Utils from '../utils';
// @ts-ignore
import { Cartesian3 } from 'cesium';
import { PolygonStyle } from '../interface';

export default class ClosedCurve extends Base {
  points: Cesium.Cartesian3[] = [];
  freehand: boolean;
  t: number;

  constructor(cesium: any, viewer: any, style?: PolygonStyle) {
    super(cesium, viewer, style);
    this.cesium = cesium;
    this.freehand = true;
    this.t = 0.4;
    this.setState('drawing');
    this.onDoubleClick();
  }

  getType(): 'polygon' | 'line' {
    return 'polygon';
  }

  /**
   * Add points only on click events
   */
  addPoint(cartesian: Cartesian3) {
    this.points.push(cartesian);
    if (this.points.length === 1) {
      this.onMouseMove();
    }
  }

  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian: Cartesian3) {
    const tempPoints = [...this.points, cartesian];
    const geometryPoints = this.createGraphic(tempPoints);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }

  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian: Cartesian3, index: number) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawPolygon();
  }

  createGraphic(positions: Cesium.Cartesian3[]) {
    let arr: any = [];
    let lnglatPoints: any = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });
    if (lnglatPoints.length === 2) {
      for (let i = 0; i < lnglatPoints.length; i++) {
        arr = arr.concat(lnglatPoints[i]);
      }
      const cartesianPoints = Cesium.Cartesian3.fromDegreesArray(arr);
      return cartesianPoints;
    } else {
      let pnts = lnglatPoints.slice(0);
      pnts.push(pnts[0], pnts[1]);
      let [normals, pList] = [[], []];
      for (let i = 0; i < pnts.length - 2; i++) {
        let normalPoints: any = Utils.getBisectorNormals(
          this.t,
          pnts[i],
          pnts[i + 1],
          pnts[i + 2]
        );
        normals = normals.concat(normalPoints);
      }
      let count = normals.length;
      normals = [normals[count - 1]].concat(normals.slice(0, count - 1));
      for (let i = 0; i < pnts.length - 2; i++) {
        let pnt1 = pnts[i];
        let pnt2 = pnts[i + 1];
        pList.push(pnt1);
        for (let t = 0; t <= 40; t++) {
          let pnt = Utils.getCubicValue(
            t / 40,
            pnt1,
            normals[i * 2],
            normals[i * 2 + 1],
            pnt2
          );
          pList.push(pnt);
        }
        pList.push(pnt2);
      }
      let points = pList;
      for (let i = 0; i < points.length; i++) {
        arr = arr.concat(points[i]);
      }
      const cartesianPoints = Cesium.Cartesian3.fromDegreesArray(arr);
      return cartesianPoints;
    }
  }

  getPoints() {
    return this.points;
  }
}
