import { ExtractPropTypes, PropType } from 'vue';
import street2 from '../../assets/images/street2.png';
/*
 * @Author: Kang
 * @Date: 2024-09-30 14:39:16
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-08 17:49:26
 */

type RangeStyleType = {
  color?: string;
  opacity?: number;
  outlineColor?: string;
};

type PositionStyleType = {
  image?: string;
  scale?: number;
};

type BaseMapType = {
  imageryProvider?: Cesium.ImageryProvider | boolean | undefined;
  sceneModeNum?: number;
};

export const mapEyeProps = {
  marstViewer: {
    type: Object as PropType<Cesium.Viewer>,
    default: () => ({}),
    required: true,
  },
  rangeStyle: {
    type: Object as PropType<RangeStyleType>,
    default: () => ({
      color: '#fecd78',
      opacity: 0.5,
      outlineColor: '#ff7800',
      outline: 2,
    }),
  },
  positionStyle: {
    type: Object as PropType<PositionStyleType>,
    default: () => ({
      image: street2,
      scale: 0.5,
    }),
  },
  baseMap: {
    type: Object as PropType<BaseMapType>,
    default: () => ({
      imageryProvider: false,
      sceneModeNum: 2,
    }),
  },
};
export type mapEyeProps = ExtractPropTypes<typeof mapEyeProps>;
