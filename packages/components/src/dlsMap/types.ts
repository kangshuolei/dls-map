/*
 * @Author: Kang
 * @Date: 2024-09-09 14:49:32
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-10 18:20:42
 */
import { ExtractPropTypes, PropType } from 'vue';
import * as Cesium from 'cesium';

export type ViewerConfigType = {
  // 不显示基础图层选择器
  baseLayerPicker?: boolean;
  // 不显示地址搜索栏
  geocoder?: boolean;
  // 不显示动画控件（如播放、暂停按钮）
  animation?: boolean;
  // 启用或禁用场景动画
  shouldAnimate?: boolean;
  // 不显示返回主页按钮
  homeButton?: boolean;
  // 不显示时间轴
  timeline?: boolean;
  // 不显示全屏按钮
  fullscreenButton?: boolean;
  // 允许切换2D/3D模式
  scene3DOnly?: boolean;
  // 不显示2D/3D视图模式切换按钮
  sceneModePicker?: boolean;
  // 不显示导航帮助信息
  navigationInstructionsInitiallyVisible?: boolean;
  // 不显示导航帮助按钮
  navigationHelpButton?: boolean;
  // 不显示选择指示器
  selectionIndicator?: boolean;
  // 不显示信息窗口
  infoBox?: boolean;
  // 不使用默认影像提供者
  imageryProvider?: Cesium.ImageryProvider | undefined;
  [key: string]: any;
};

export type MapConfigType = {
  id: string;
  imageryProvider: {
    url: string;
    layer?: string;
    style?: string;
    format: string;
    tileMatrixSetID?: string;
    [key: string]: any;
  };
  sceneModeNum: 2 | 3;
  defaultAccessToken?: string;
};

export const mapProps = {
  mapConfig: {
    type: Object as PropType<MapConfigType>,
    // required: true,
  },
  viewerConfig: {
    type: Object as PropType<ViewerConfigType>,
    // required: false,
  },
};

export const mapEmits = {
  cesiumReady: (payload: typeof Cesium.Viewer | undefined) => true,
};

export type mapProps = ExtractPropTypes<typeof mapProps>;
