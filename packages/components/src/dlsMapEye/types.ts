import { ExtractPropTypes, PropType } from 'vue';
import street2 from '../../assets/images/street2.png';
/*
 * @Author: Kang
 * @Date: 2024-09-30 14:39:16
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-15 17:55:19
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
  width?: string;
  height?: string;
};

export const mapEyeProps = {
  marstViewer: {
    type: Object as PropType<Cesium.Viewer>,
    default: () => ({}),
    required: true,
  },
  rangeStyle: {
    type: Object as PropType<RangeStyleType>,
    default: (): RangeStyleType => ({
      color: '#fecd78',
      opacity: 0.5,
      outlineColor: '#ff7800',
      // outline: 2,
    }),
    required: false,
  },
  positionStyle: {
    type: Object as PropType<PositionStyleType>,
    default: (): PositionStyleType => ({
      image: street2,
      scale: 0.5,
    }),
    required: false,
  },
  baseMap: {
    type: Object as PropType<BaseMapType>,
    default: (): BaseMapType => ({
      imageryProvider: false,
      sceneModeNum: 2,
      width: '100%',
      height: '100%',
    }),
    required: false,
  },
};
export type mapEyeProps = ExtractPropTypes<typeof mapEyeProps>;
