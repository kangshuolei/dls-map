<!--
 * @Author: Kang
 * @Date: 2024-09-11 16:54:34
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-04 17:09:54
-->
# 开始

引入 dls-map 并加载 下雨场景

## 加载下雨场景功能

:::demo 

environment/rain

:::


## 介绍


### 加载下雨场景

- 用法

```javascript
//核心代码 - 具体用法看预览代码
const { addRainScene, removeRainScene } = useEnvironment();
//加载下雨场景
addRainScene(viewer);
//删除下雨场景
removeRainScene(viewer)
```

- 类型范围

```tsx
//类型参数
viewer： Cesium.Viewer
```

### 下雨场景 方法

| 方法            | 描述         | 参数     |
| --------------- | ------------ | -------- |
| addRainScene    | 加载下雨场景 | `viewer` |
| removeRainScene | 删除下雨场景 | `viewer` |




