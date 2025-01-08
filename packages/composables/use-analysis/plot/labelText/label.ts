/*
 * @Author: Kang
 * @Date: 2025-01-08 16:01:23
 * @Last Modified by: Kang
 * @LastEditTime: 2025-01-08 16:05:57
 */
import Base from '../base';
// @ts-ignore
import { Cartesian3 } from 'cesium';

import { LabelStyle } from '../interface';

export default class Label extends Base {
  points: Cesium.Cartesian3[] = [];

  constructor(cesium: any, viewer: Cesium.Viewer, style?: LabelStyle) {
    super(cesium, viewer, style);
    this.cesium = cesium;
    this.setState('drawing');
    // this.onDoubleClick();
  }

  getType(): 'polygon' | 'line' | 'point' | 'label' {
    return 'label';
  }

  /**
   * Add points only on click events
   */
  addPoint(cartesian: Cartesian3) {
    this.points.push(cartesian);
    if (this.points.length === 1) {
      this.drawLabel();
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
