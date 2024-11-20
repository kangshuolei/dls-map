<!--
 * @Author: Kang
 * @Date: 2024-09-11 16:54:34
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-20 16:21:17
-->
# 开始

引入 dls-map 并加载 风场

## 加载风场功能

:::demo 

environment/windy

:::


## 介绍

### 加载风场场景

- 用法

```javascript
axios
  .get('../../assets/json/windy/2017121300.json')
  .then((response: any) => {
    dataM.windy = new Windy({
      json: response.data,
      cesiumViewer: dataM.viewer,
      speed: 100,
    });
    dataM.windy.loadWindy();
  })
  .catch((error) => {
    console.error('There was an error!', error);
  });
```

- 类型范围

```tsx
//类型参数
json: any[]; // 风场数据
cesiumViewer: Cesium.Viewer; // Cesium Viewer 对象
speed: number; //风场的更新频率
```

### 风场场景 方法

| 方法         | 描述     | 参数 |
| ------------ | -------- | ---- |
| loadWindy    | 加载风场 | `无` |
| hideWindy    | 隐藏风场 | `无` |
| showWindy    | 显示风场 | `无` |
| pauseWindy   | 暂停风场 | `无` |
| resumeWindy  | 恢复风场 | `无` |
| destroyWindy | 销毁风场 | `无` |

