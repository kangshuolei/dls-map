<!--
 * @Author: Kang
 * @Date: 2024-09-11 16:54:34
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-04 17:29:22
-->
# 开始

引入 dls-map 并加载 地图操作工具

## 加载地图操作工具功能

:::demo 

tools/tools

:::


## 介绍

### 加载鹰眼

## Dls-Map-Eye API

### Dls-Map-Eye 属性

| 名称          | 描述                 | 类型                     | 默认值        |
| ------------- | -------------------- | ------------------------ | ------------- |
| marstViewer   | 主地图的viewer的实例 | `object / marstViewer`   | {}            |
| rangeStyle    | 鹰眼矩形范围样式     | `object / rangeStyle`    | rangeStyle    |
| positionStyle | 鹰眼方向点位样式     | `object / positionStyle` | positionStyle |
| baseMap       | 鹰眼地图的配置       | `object / baseMap`       | baseMap       |


### Dls-Map-Eye 类型参数
```tsx
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
```
