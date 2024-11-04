<!--
 * @Author: Kang
 * @Date: 2024-09-11 16:54:34
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-04 17:01:58
-->
# 开始

引入 dls-map 并加载 信息面板

## 加载信息面板功能

:::demo 

coverage/panel

:::


## 介绍

### 创建地图信息面板弹框和标题面板弹框

- 用法

```javascript
//核心代码 - 具体用法看预览代码
 const jsxContent = `
          <div class="title-model-style">
       			元素
          </div>
        `;
let className = 'LayerTitle';
let val: divValOptions = {
  viewer: viewer,		//viewer 实例	
  position: [116.4134, 39.911],	//弹出的点位位置
  height: 0,	//弹框高度
  offset: [0, -90],	//弹框的偏移位置
  dom: jsxContent,	//弹框的样式和div元素
  className,	//弹框的样式类名
};
dataM.dlsDivLabel = new DlsDivLabel(val);
```

- 类型范围

```tsx
//类型参数
interface divValOptions {
  viewer: Cesium.Viewer;
  height: number;
  position: [number, number];
  dom: HTMLElement | string;
  id?: string;
  className?: string;
  offset?: [number, number];
  type?: string;
}
```


### 面板 方法

| 方法         | 描述                          | 参数          |
| ------------ | ----------------------------- | ------------- |
| removeAllDiv | 根据样式calss名称删除面板弹框 | `class类名称` |



