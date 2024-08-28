import * as Utils from '../utils';
import Base from '../base';
// @ts-ignore
import { Cartesian3 } from 'kmap-3d-engine';
import { LineStyle } from '../interface';

export default class Arc extends Base {
  points: Cartesian3[] = [];
  arrowLengthScale: number = 5;
  maxArrowLength: number = 3000000;
  t: number;

  constructor(cesium: any, viewer: any, style?: LineStyle) {
    super(cesium, viewer, style);
    this.cesium = cesium;
    this.t = 0.3;
    this.setState('drawing');
    this.onDoubleClick();
  }

  getType(): 'polygon' | 'line' {
    return 'line';
  }

  /**
   * Points are only added upon click events.
   */
  addPoint(cartesian: Cartesian3) {
    this.points.push(cartesian);
    if (this.points.length < 2) {
      this.onMouseMove();
    } else if (this.points.length === 2) {
      this.setGeometryPoints(this.points);
      this.drawLine();
    } else if (this.points.length > 2) {
      this.finishDrawing();
    }
  }

  /**
   * Draw the shape based on the mouse movement position during the initial drawing.
   */
  updateMovingPoint(cartesian: Cartesian3) {
    const tempPoints = [...this.points, cartesian];
    let geometryPoints = [];
    if (tempPoints.length === 2) {
      this.setGeometryPoints(tempPoints);
      this.drawLine();
    } else {
      geometryPoints = this.createGraphic(tempPoints);
      this.setGeometryPoints(geometryPoints);
    }
  }

  /**
   * During editing mode, drag key points to update the corresponding data.
   */
  updateDraggingPoint(cartesian: Cartesian3, index: number) {
    this.points[index] = cartesian;
    const geometryPoints = this.createGraphic(this.points);
    this.setGeometryPoints(geometryPoints);
    this.drawLine();
  }

  /**
   * Generate geometric shape points based on key points..
   */
  createGraphic(positions: Cartesian3[]) {
    const lnglatPoints = positions.map((pnt) => {
      return this.cartesianToLnglat(pnt);
    });

    let count = lnglatPoints.length;
    let arr: any = [];
    if (count < 2) return;
    if (count === 2) {
      for (let i = 0; i < lnglatPoints.length; i++) {
        arr = arr.concat(lnglatPoints[i]);
      }
      const cartesianPoints = Cesium.Cartesian3.fromDegreesArray(arr);
      return cartesianPoints;
    } else {
      let [pnt1, pnt2, pnt3, startAngle, endAngle] = [
        lnglatPoints[0],
        lnglatPoints[1],
        lnglatPoints[2],
        null,
        null,
      ];
      let center = Utils.getCircleCenterOfThreePoints(pnt1, pnt2, pnt3);
      let radius = Utils.MathDistance(pnt1, center);
      let angle1 = Utils.getAzimuth(pnt1, center);
      let angle2 = Utils.getAzimuth(pnt2, center);
      if (Utils.isClockWise(pnt1, pnt2, pnt3)) {
        startAngle = angle2;
        endAngle = angle1;
      } else {
        startAngle = angle1;
        endAngle = angle2;
      }
      let points = Utils.getArcPoints(center, radius, startAngle, endAngle);
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
