<!--
 * @Author: Kang
 * @Date: 2024-09-11 16:54:34
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-04 15:52:06
-->

# 开始

引入 dls-map 并加载 标绘服务

## 标绘

:::demo 

analysis/plot

:::


## 介绍


### 添加各种图形的标绘

```javascript
//key 代表多种图形 - 详见预览代码
const geometry = new CesiumPlot[key](Cesium, dataM.viewer, {
    material: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 0.5)'),	//标绘图形的材质
    outlineMaterial: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 1)'),	//标绘图形边框的材质
    outlineWidth: 3,	//标绘图形的边框宽度
    color: Cesium.Color.BLUE,	//颜色
    pixelSize: 10,	//点样式
    isEdit: true,	//是否开启编辑
 });
```

### Plot 事件

| 事件名     | 说明                       | 回调参数          |
| ---------- | -------------------------- | ----------------- |
| drawStart  | 标绘开始触发事件           | `标绘实例 / null` |
| drawUpdate | 标绘更新编辑时触发事件     | `标绘实例 / null` |
| drawEnd    | 标绘结束时触发事件         | `标绘实例 / null` |
| editStart  | 标绘开启编辑状态时触发事件 | `标绘实例 / null` |
| editEnd    | 标绘编辑结束时触发事件     | `标绘实例 / null` |

### Plot 方法

| 方法                 | 描述                   | 参数                                         |
| -------------------- | ---------------------- | -------------------------------------------- |
| show                 | 显示标绘图形           | `无`                                         |
| hide                 | 隐藏标绘图形           | `duration: 动画持续时间 delay: 动画延迟时间` |
| remove               | 删除标绘图形           | `无`                                         |
| startGrowthAnimation | 显示指定标绘的动画回放 | `无`                                         |


