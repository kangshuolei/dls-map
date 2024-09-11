/*
 * @Author: Kang
 * @Date: 2024-05-29 10:56:07
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-11 16:05:07
 */
// @ts-ignore

export type PolygonStyle = {
  material?: Cesium.MaterialProperty | Cesium.Color;
  outlineWidth?: number;
  outlineMaterial?: Cesium.MaterialProperty | Cesium.Color;
};

export type LineStyle = {
  material?: Cesium.Color;
  lineWidth?: number;
};

export type PointStyle = {
  pixelSize: number;
  heightReference: Cesium.HeightReference;
  color: Cesium.Color;
};

export type State = 'drawing' | 'edit' | 'static' | 'animating' | 'hidden';
export type GeometryStyle = PolygonStyle | LineStyle;

export type EventType =
  | 'drawStart'
  | 'drawUpdate'
  | 'drawEnd'
  | 'editEnd'
  | 'editStart';
export type EventListener = (eventData?: any) => void;

export type VisibleAnimationOpts = {
  duration?: number;
  delay?: number;
  callback?: () => void;
};

export type GrowthAnimationOpts = {
  duration: number;
  delay: number;
  callback: Function;
};
