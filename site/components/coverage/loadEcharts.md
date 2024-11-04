<!--
 * @Author: Kang
 * @Date: 2024-09-11 16:54:34
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-04 16:47:56
-->
# 开始

引入 dls-map 并加载 Echarts 图

## 加载Echarts功能

:::demo 

coverage/loadEcharts

:::


## 介绍

### 创建 echarts版的热力图以及迁徙图

- 用法

```javascript
//核心代码 - 具体用法看预览代码
CesiumUseEcharts(Cesium, dataM.viewer, option);
```

- 类型范围

```tsx
//类型参数
//因为目前这个只支持echarts 4.x版本
// 所以没有通过 import 的方式引用 echarts，用 index.html 引入 echart.js的方式引用的
type canvasConfigTypes = {
  width?: string;
  height?: string;
};
type optionTypes = {
  animation: boolean;
  GLMap: Object;
  series: any;
};
export default async function CesiumUseEcharts(
  Cesium: any,	//Cesium实例
  viewer: Cesium.Viewer,	//viewer实例
  option: optionTypes,	//echarts配置 - 具体看预览代码示例
  canvasConfig?: canvasConfigTypes	//echarts 的宽高
) {
```

### 加载 echarts 方法

| 方法    | 描述        | 参数 |
| ------- | ----------- | ---- |
| show    | 显示echarts | `无` |
| hide    | 隐藏echarts | `无` |
| dispose | 销毁echarts | `无` |

