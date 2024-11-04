<!--
 * @Author: Kang
 * @Date: 2024-09-11 16:54:34
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-04 15:16:28
-->
# 开始

引入 dls-map 并加载 图形

## 加载图形

:::demo 

entity/graphics

:::


## 介绍

### 添加点、线、圆、墙 的 hooks

```javascript
const {
  addPointEntity,	//添加点
  addLine,	//添加线
  addCircle,	//添加圆
  addWall,	//添加墙
  removeSpecifyEntity,	//删除 entity 实例
  removeSpecifyPrimitive,	//删除 Primitive 实例
} = useCesiumEntities();
```

1. #### addPointEntity  方法实现添加 点或图标点或模型

- 用法

  ```javascript
  //添加图标点
  const pointEntity = addPointEntity(116.4134, 39.911, dataM.viewer, {
    type: 'billboard',
    imgUrl: lightSpotImg,
  });
  ```
  
- 类型参数

  ```tsx
  //方法参数
  function addPointEntity(
      lon: number,
      lat: number,
      viewer: Cesium.Viewer,
      {
        type, // 根据类型来确定是点、图片还是模型
        name = 'Point',
        width,
        height,
        scale,
        click = true,
        doubleClickHeight = 5000,
        attribute = {},
        popContent,
        pointHeight,
        doubleClickPitch = -90,
        modelUrl,
        modelScale = 1,
        modelMinimumPixelSize = 64,
        imgUrl, // 图片 URL
      }: billboardOptionTypes
    ): Cesium.Entity | boolean {}
  
  //类型参数
  type EntityType = 'billboard' | 'model' | 'point';
  
  interface billboardOptionTypes {
    type: EntityType; // 新增的字段，表示实体的类型
    name?: string;	//名称 可选
    width?: number;	//用于指定图片的宽度（以像素为单位），并覆盖原始尺寸 可选
    height?: number;	//用于指定图片的高度（以像素为单位），并覆盖原始尺寸 可选
    scale?: number;	//图片缩放比例 可选
    click?: boolean;	//是否可点击 可选
    doubleClickHeight?: number; //双击高度 可选
    attribute?: Record<string, any>; //点属性 可选
    popContent?: string;	//单击弹框内容 可选
    pointHeight?: number; //点的高度 可选
    doubleClickPitch?: number; //双击pitch 可选
    modelUrl?: string; // 模型URL
    modelScale?: number; // 模型缩放
    modelMinimumPixelSize?: number; // 模型的最小像素尺寸
    imgUrl?: string; // 图片URL
  }
  ```
  
  2. #### addLine 添加线段
  
  - 用法
  
    ```javascript
    const lineEntity = addLine(
        [-115.0, 37.0, -115.0, 32.0],
        new Cesium.PolylineDashMaterialProperty({
          color: Cesium.Color.BLUE, // 虚线的颜色
          dashLength: 16, // 虚线的每个段的长度
        }),
        viewer,
        {}
      );
    ```
  
  - 类型参数
  
    ```tsx
    //方法参数
    function addLine(
        positions: number[],
        material: Cesium.MaterialProperty | Cesium.Color,
        viewer: Cesium.Viewer,
        { name = 'Line', width = 3 }: LineOptionType
      ): Cesium.Entity | boolean {}
    
    //类型参数
    type LineOptionType = {
      name?: string;
      width?: number;
    };
       
    ```
    
    3. #### addCircle  添加圆
    
    - 用法
    
      ```javascript
      const circleEntity = addCircle(
          116.4134,
          39.911,
          10000,
          'rgba(77, 225, 247,0.3)',
          viewer
       );
      ```
    
    - 类型参数
  
      ```tsx
      //方法参数
      function addCircle(
          longitude: number,	//经度
          latitude: number,	//纬度
          radius: number,	//半径
          color: string,	//颜色
          viewer: Cesium.Viewer,	//viewer
          name = 'Circle'	//名称
       ){}
      ```
      
      
    
    4. addWall  添加墙
  
    - 用法
    
      ```javascript
      const wallEntity = addWall(
      	viewer,
      	[
      		-115.0, 37.0, 100000, -115.0, 32.0, 100000, -107.0, 33.0, 100000,
      		-115.0, 37.0, 100000,
      	],
      	'#00FFFF',
      	{ MaterialIndex: 4 }
      );
      ```
      
    - 类型参数
    
      ```tsx
      /**
         * 创建动态墙
         * @param viewer
         * @param positions 墙体的经纬度组合
         * @param hexColor 墙体的颜色
         * @param alpha 墙体透明度
         * @param maximumHeights 定义了墙体顶部的高度（沿路径的每个点的高度）,墙体的顶部高度
         * @param minimumHeights 定义了墙体底部的高度。
         * @param MaterialIndex 1：上下移动条纹材质 2：闪烁材质  3：顶部到底部渐变效果  4：左右移动条纹
         */
        function addWall(
          viewer: Cesium.Viewer,
          positions: number[],
          hexColor: string,
          {
            maximumHeights = [],
            minimumHeights = [],
            alpha = 0.5,
            MaterialIndex = 1,
          }: wallOptionTypes
        ): Cesium.Primitive | boolean {}
      
      //类型参数
      type wallOptionTypes = {
        maximumHeights?: number[];
        minimumHeights?: number[];
        alpha?: number;
        MaterialIndex?: 1 | 2 | 3 | 4;
      };
      ```
      
       
    
    5. removeSpecifyEntity  根据指定的 entity 实例 删除
    - 用法
    
      ```javascript
      removeSpecifyEntity([Entity1,Entity2], viewer);
      ```
    
    - 类型参数
    
      ```tsx
      const removeSpecifyEntity = (
      	entitys: Cesium.Entity[],
      	viewer: Cesium.Viewer
      )
      ```
    
    6. handleRemoveWall 删除墙体的方法
    - 用法
    
      ```javascript
      removeSpecifyPrimitive([wallEntity1,wallEntity2], viewer);
      ```
    
    - 类型参数
    
      ```tsx
      //根据指定的 Primitive删除指定的 Primitive
      const removeSpecifyPrimitive = (
          primitives: Cesium.Primitive[],
          viewer: Cesium.Viewer
      )
      ```
    
      
  
  

