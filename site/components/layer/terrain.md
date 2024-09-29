<!--
 * @Author: Kang
 * @Date: 2024-09-11 16:54:34
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-29 10:17:29
-->
# 开始

引入 dls-map 并加载 地形数据

## 加载地形

:::demo 

layer/terrain

:::


## 介绍

### useLoadTerrain 参数

| 名称       | 描述                         | 类型            | 默认值  | 是否必填 |
| ---------- | ---------------------------- | --------------- | ------- | -------- |
| terrainAry | 地形参数                     | `Array`         | —       | true     |
| height     | 低于这个高度时，加载指定区域 | `number`        | 1000000 | false    |
| viewer     | viewer实例                   | `Cesium.Viewer` | —       | true     |

### terrainAry 参数

| 名称  | 描述             | 类型               | 默认值 | 是否必填 |
| ----- | ---------------- | ------------------ | ------ | -------- |
| url   | 地形链接         | `Array`            | —      | true     |
| range | 指定地形加载范围 | `Array`            | —      | false    |
| type  | 地形的加载类型   | `global 或 region` | —      | true     |