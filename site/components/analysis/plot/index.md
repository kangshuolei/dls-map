<!--
 * @Author: Kang
 * @Date: 2024-09-11 16:54:34
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-18 14:35:06
-->

# 开始

引入 dls-map 并加载 cesium地球

## 创建地球

:::demo  -->

analysis/plot

:::


## Dls-Map API

### Dls-Map 属性

| 名称         | 描述       | 类型     | 默认值 |
| ------------ | ---------- | -------- | ------ |
| mapConfig    | 地图参数   | `object` | —      |
| viewerConfig | viewer参数 | `object` | —      |


### Dls-Map Exposes

| 名称   | 描述       | 类型            |
| ------ | ---------- | --------------- |
| viewer | viewer实例 | `Cesium.Viewer` |

### Dls-Map 事件

| 事件名       | 描述           | 类型       |
| ------------ | -------------- | ---------- |
| cesium-ready | 地图加载完触发 | `Function` |


### mapConfig 属性

| 名称               | 描述                             | 类型                     | 默认值 |
| ------------------ | -------------------------------- | ------------------------ | ------ |
| id                 | 地图容器ID                       | `string`                 | —      |
| imageryProvider    | 地图图层的参数                   | `Cesium.ImageryProvider` | —      |
| sceneModeNum       | 地球视图模式（2为二维，3为三维） | `2 或 3`                 | 3      |
| defaultAccessToken | cesium官方的图层秘钥             | `string`                 | —      |

### viewerConfig 属性

| 名称                                   | 描述                                 | 类型                                            | 默认值 |
| -------------------------------------- | ------------------------------------ | ----------------------------------------------- | ------ |
| baseLayerPicker                        | 是否显示基础图层选择器               | `boolean`                                       | false  |
| geocoder                               | 是否显示地址搜索栏                   | `boolean`                                       | false  |
| animation                              | 是否显示动画控件（如播放、暂停按钮） | `boolean`                                       | false  |
| shouldAnimate                          | 启用或禁用场景动画                   | `boolean`                                       | false  |
| homeButton                             | 是否显示返回主页按钮                 | `boolean`                                       | false  |
| timeline                               | 是否显示时间轴                       | `boolean`                                       | false  |
| fullscreenButton                       | 是否显示全屏按钮                     | `boolean`                                       | false  |
| scene3DOnly                            | 是否仅为3D模式                       | `boolean`                                       | false  |
| sceneModePicker                        | 是否显示2D/3D视图模式切换按钮        | `boolean`                                       | false  |
| navigationInstructionsInitiallyVisible | 是否显示导航帮助信息                 | `boolean`                                       | false  |
| navigationHelpButton                   | 是否显示导航帮助按钮                 | `boolean`                                       | false  |
| selectionIndicator                     | 是否显示显示选择指示器               | `boolean`                                       | false  |
| infoBox                                | 是否显示显示信息窗口                 | `boolean`                                       | false  |
| imageryProvider                        | 默认加载地图图层信息                 | `Cesium.ImageryProvider / boolean / undefined;` | false  |
