<!--
 * @Author: Kang
 * @Date: 2024-09-11 16:54:34
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-04 16:48:00
-->
# 开始

引入 dls-map 并加载 热力图

## 加载热力图功能

:::demo 

coverage/heatMap

:::


## 介绍

### 创建热力图

- 用法

```javascript
//核心代码 - 具体用法看预览代码
const heatmap = new CesiumHeatMap(Cesium, viewer, heatData, {
    radius: 30,
    maxOpacity: 0.9,
    minOpacity: 0.2,
    blur: 0.75,
    // gradient: {
    //   '.5': 'blue',
    //   '.8': 'red',
    //   '.95': '',
    // },
  });
```

- 类型范围

```tsx
//类型参数
CesiumHeatMap(
  Cesium: any,	//Cesium
  viewer: Cesium.Viewer,	//viewer
  data: HeatPoint[],	//热力图的数据点
  config: HeatConfig	//热力图配置数据
){}

interface HeatPoint {	
  lat: number;	//纬度
  lng: number;	//经度
  value: number;	//点位数值
}

interface HeatConfig {
  radius: number;	
  maxOpacity: number;
  minOpacity: number;
  blur: number;
  gradient?: { [key: string]: string };
}
```

### 热力图 方法

| 方法   | 描述       | 参数 |
| ------ | ---------- | ---- |
| show   | 显示热力图 | `无` |
| hide   | 隐藏热力图 | `无` |
| remove | 删除热力图 | `无` |



