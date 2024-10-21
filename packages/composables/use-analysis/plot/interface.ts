/*
 * @Author: Kang
 * @Date: 2024-05-29 10:56:07
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-21 16:27:32
 */
// @ts-ignore

export type PolygonStyle = {
  material?: Cesium.MaterialProperty | Cesium.Color;
  outlineWidth?: number;
  outlineMaterial?: Cesium.MaterialProperty | Cesium.Color;
  isEdit?: boolean;
};

export type LineStyle = {
  material?: Cesium.Color;
  lineWidth?: number;
  isEdit?: boolean;
};

export type PointStyle = {
  pixelSize: number;
  heightReference: Cesium.HeightReference;
  color: Cesium.Color;
  isEdit?: boolean;
};

export type State = 'drawing' | 'edit' | 'static' | 'animating' | 'hidden';
export type GeometryStyle = PolygonStyle | LineStyle | PointStyle;

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
