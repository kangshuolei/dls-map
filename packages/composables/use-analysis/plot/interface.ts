/*
 * @Author: Kang
 * @Date: 2024-05-29 10:56:07
 * @Last Modified by: Kang
 * @LastEditTime: 2025-01-08 16:23:54
 */
// @ts-ignore

export type PolygonStyle = {
  material?: Cesium.MaterialProperty | Cesium.Color;
  outlineWidth?: number;
  outlineMaterial?: Cesium.MaterialProperty | Cesium.Color;
  isEdit?: boolean;
  controlPoints?: controlPointsType;
  clampToGround?: boolean;
  heightReference?: Cesium.HeightReference;
};

export type controlPointsType = {
  heightReference?: Cesium.HeightReference;
  pixelSize?: number;
  color?: Cesium.Color;
};

export type LineStyle = {
  material?: Cesium.Color;
  lineWidth?: number;
  isEdit?: boolean;
  clampToGround?: boolean;
  controlPoints?: controlPointsType;
};

export type LabelStyle = {
  text: string; // 标签的文字内容
  font?: string; // 字体样式，例如 '16px sans-serif'
  fillColor?: Cesium.Color; // 填充颜色
  style?: Cesium.LabelStyle; // 标签样式，例如 FILL、OUTLINE 或 FILL_AND_OUTLINE
  outlineWidth?: number; // 描边宽度
  heightReference?: Cesium.HeightReference; // 高度参考，例如 CLAMP_TO_GROUND
  verticalOrigin?: Cesium.VerticalOrigin; // 垂直对齐方式，例如 BOTTOM、CENTER、TOP
  pixelOffset?: Cesium.Cartesian2; // 像素偏移，Cartesian2 对象表示
  isEdit?: boolean;
};

export type PointStyle = {
  pixelSize: number;
  heightReference: Cesium.HeightReference;
  color: Cesium.Color;
  isEdit?: boolean;
  controlPoints?: controlPointsType;
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
