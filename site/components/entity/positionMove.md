<!--
 * @Author: Kang
 * @Date: 2024-09-11 16:54:34
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-12 21:36:08
-->

# 开始

引入 dls-map 并加载 位置移动服务

## 标绘

:::demo 

entity/positionMove

:::


## 介绍


### 添加各种图形的标绘

```javascript
new CesiumEditEntity(dataM.viewer, arrowEntity, {
    radiusNum: 100,
    arrowLength: 120,
    dStep: 1,
    rStep: 1,
});
```


### CesiumEditEntity 方法

| 方法            | 描述                 | 参数 |
| --------------- | -------------------- | ---- |
| editTranslation | 对entity进行平移编辑 | `无` |
| editRotation    | 对entity进行旋转编辑 | `无` |
| destroy         | 取消编辑状态         | `无` |


