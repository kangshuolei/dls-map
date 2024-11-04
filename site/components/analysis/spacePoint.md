<!--
 * @Author: Kang
 * @Date: 2024-09-11 16:54:34
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-04 16:13:02
-->
# 开始

引入 dls-map 并加载 空间点查询

## 加载空间点查询功能

:::demo 

analysis/spacePoint

:::


## 介绍

### 根据标绘图形得到该图形范围内的点位，并获取到点位

- 用法

```javascript
//核心代码 
const data = CesiumScpacePoint(
    dataM.geometry.geometryPoints,	//图形的坐标范围
    dataM.pointEntityArr	//点位的坐标集合
  );
  if (data && data.length) {
    data.forEach((item: any) => {
      item.billboard.image = markRedImg;	//获取该图形范围的点位，并把更选点位的图标来显示
    });
  }
```

- 类型范围

```tsx
/**
 * 分析点在不在面里
 * @param viewer Cesium.Viewer
 * @param polygonData 面的数据
 * @param pointData 点位的实例
 */
export function CesiumScpacePoint(
  polygonData: Cesium.Cartesian3[],
  pointData: Cesium.Entity[]
) {}
```

  



