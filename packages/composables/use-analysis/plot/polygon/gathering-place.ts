import Base from '../base';
import * as Utils from '../utils';
// @ts-ignore
import { Cartesian3 } from 'cesium';
import { PolygonStyle } from '../interface';

export default class GatheringPlace extends Base {
  points: Cartesian3[] = [];
  freehand: boolean;
  t: number;

  constructor(cesium: any, viewer: any, style?: PolygonStyle) {
    super(cesium, viewer, style);
    this.cesium = cesium;
    this.freehand = true;
    this.t = 0.4;
    this.setState('drawing');
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
    } else if (this.points.length === 2) {
    } else if (this.points.length > 2) {
      this.finishDrawing();
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

  createGraphic(positions: Cartesian3[]) {
    let arr: any = [];
    let lnglatPoints: any = positions
      .map((pnt) => {
        return this.cartesianToLnglat(pnt);
      })
      .slice(0);

    if (lnglatPoints.length === 2) {
      const mid = Utils.Mid(lnglatPoints[0], lnglatPoints[1]);
      const d = Utils.MathDistance(lnglatPoints[0], mid);
      const pnt = Utils.getThirdPoint(
        lnglatPoints[0],
        mid,
        Math.PI / 2,
        d,
        true
      );
      lnglatPoints = [lnglatPoints[0], pnt, lnglatPoints[1]];
    }
    let mid = Utils.Mid(lnglatPoints[0], lnglatPoints[2]);
    lnglatPoints.push(mid, lnglatPoints[0], lnglatPoints[1]);
    let [normals, pnt1, pnt2, pnt3, pList] = [
      [],
      undefined,
      undefined,
      undefined,
      [],
    ];
    for (let i = 0; i < lnglatPoints.length - 2; i++) {
      pnt1 = lnglatPoints[i];
      pnt2 = lnglatPoints[i + 1];
      pnt3 = lnglatPoints[i + 2];
      let normalPoints: any = Utils.getBisectorNormals(
        this.t,
        pnt1,
        pnt2,
        pnt3
      );
      normals = normals.concat(normalPoints);
    }
    let count = normals.length;
    normals = [normals[count - 1]].concat(normals.slice(0, count - 1));
    for (let i = 0; i < lnglatPoints.length - 2; i++) {
      pnt1 = lnglatPoints[i];
      pnt2 = lnglatPoints[i + 1];
      pList.push(pnt1);
      for (let t = 0; t <= 40; t++) {
        let pnt: any = Utils.getCubicValue(
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

  getPoints() {
    return this.points;
  }
}
