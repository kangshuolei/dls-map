import Base from '../base';
// @ts-ignore
import { Cartesian3 } from 'cesium';

import { PolygonStyle } from '../interface';

export default class Point extends Base {
  points: Cesium.Cartesian3[] = [];

  constructor(cesium: any, viewer: any, style?: PolygonStyle) {
    super(cesium, viewer, style);
    this.cesium = cesium;
    this.setState('drawing');
    // this.onDoubleClick();
  }

  getType(): 'polygon' | 'line' | 'point' {
    return 'point';
  }

  /**
   * Add points only on click events
   */
  addPoint(cartesian: Cartesian3) {
    this.points.push(cartesian);
    if (this.points.length === 1) {
      this.drawPoint();
      this.finishDrawing();
    }
  }

  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(cartesian: Cartesian3) {
    const tempPoints = [...this.points, cartesian];
    this.setGeometryPoints(tempPoints);
  }

  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(cartesian: Cartesian3, index: number) {
    this.points[index] = cartesian;
    this.setGeometryPoints(this.points);
  }

  getPoints() {
    return this.points;
  }
}
