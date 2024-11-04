<!--
 * @Author: Kang
 * @Date: 2024-09-11 16:54:34
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-04 15:57:36
-->
# 开始

引入 dls-map 并加载 测量

## 加载测量功能

:::demo 

analysis/measure

:::


## 介绍

### 绘制线段实现距离的测量

```javascript
//测距方法
DrawSoildLine(dataM.viewer, 'lines', [255, 10, 255], 5);

/**
 * 绘制线路-测距
 * @param {Object} viewer 图层视图
 * @param {String} name  线路名称
 * @param {Array} color 线路颜色 可选
 * @param {Number} color 线路宽度 可选
 */
function DrawSoildLine(
  viewer: Cesium.Viewer,
  names: string,
  color: [number, number, number] | [number, number, number, number],
  width: number
) {}
```

