<!--
 * @Author: Kang
 * @Date: 2024-09-11 16:54:34
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-04 17:11:32
-->
# 开始

引入 dls-map 并加载 下雪场景

## 加载下雪场景功能

:::demo 

environment/snow

:::


## 介绍

### 加载下雪场景

- 用法

```javascript
//核心代码 - 具体用法看预览代码
const { addSnowScene, removeSnowScene } = useEnvironment();
//加载下雪场景
addSnowScene(viewer);
//删除下雪场景
removeSnowScene(viewer)
```

- 类型范围

```tsx
//类型参数
viewer： Cesium.Viewer
```

### 下雨场景 方法

| 方法            | 描述         | 参数     |
| --------------- | ------------ | -------- |
| addSnowScene    | 加载下雪场景 | `viewer` |
| removeSnowScene | 删除下雪场景 | `viewer` |

