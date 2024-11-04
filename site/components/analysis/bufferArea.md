<!--
 * @Author: Kang
 * @Date: 2024-09-11 16:54:34
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-04 17:05:13
-->
# 开始

引入 dls-map 并加载 绘制缓冲区

## 加载绘制缓冲区功能

:::demo 

analysis/bufferArea

:::


## 介绍

### 根据标绘图形,形成一个以指定距离范围的缓冲区，并分析缓冲区

- 用法

```javascript
//核心代码 - 返回 buffer 实例
let buffer = new CesiumBufferAnalyze(viewer, dataM.radiusNum * 1000);
```

- 类型范围

```tsx
viewer: Cesium.Viewer
radius: 缓冲半径 (最大值 999000，最小值 0)(单位：米)
```

### 缓冲区 方法

| 方法         | 描述       | 参数                                         |
| ------------ | ---------- | -------------------------------------------- |
| createBuffer | 创建缓冲区 | `见示例`                                     |
| clear        | 清空缓冲区 | `duration: 动画持续时间 delay: 动画延迟时间` |

### 创建缓冲区

- 用法

```javascript
//具体用法看预览代码
buffer
    .createBuffer(dataM.geometry.geometryPoints, dataM.drawType)
    .then((geometryPoints: any) => {
      const data = CesiumScpacePoint(geometryPoints, dataM.pointEntityArr);
      if (data && data.length) {
        data.forEach((item: any) => {
          item.billboard.image = markRedImg;
        });
      }
    });
```

- 类型范围

```tsx
//方法参数
createBuffer(drawPolyogn: Cesium.Cartesian3[], drawType: DrawTypes) {}

//类型参数
interface Position {
  lon: number;
  lat: number;
  alt: number;
}
type DrawTypes = 'Point' | 'Polyline' | 'Polygon';

//返回值
return new Promise
```

### 删除缓冲区

- 用法

```tsx
buffer.clear()
```





