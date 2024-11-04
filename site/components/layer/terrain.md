<!--
 * @Author: Kang
 * @Date: 2024-09-11 16:54:34
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-04 10:45:39
-->
# 开始

引入 dls-map 并加载 地形数据

## 加载地形

:::demo 

layer/terrain

:::


## 介绍

### 加载默认地形和海洋地形

```javascript
const { loadTerrain, removeTerrain, loadSeafloorTerrain, legendCanvans } = useLoadTerrain();
```

1. #### loadTerrain  方法实现加载地形，支持加载离线的区域地形和在线的全地形

- 用法

  ```javascript
  loadTerrain(dataM.viewer, [
    {
      type: 'global',
      url: 'https://data.marsgis.cn/terrain/',
      verticalExaggeration: 1,
    },
    {
      type: 'region',
      url: 'https://data.marsgis.cn/terrain/',
      range: [112.3242, 123.574, 33.8378, 45.1757], //模拟北京区域
      height: 1000000, //相机低于这个高度并且在范围内的时候加载指定北京的地形
      verticalExaggeration: 1,
    },
  ]);
  ```

- 类型参数

  ```tsx
  //方法参数
  const loadTerrain = (
  	viewer: Cesium.Viewer,
  	terrainAry: TerrainAryType[]
  )
  
  //类型参数
  type TerrainAryType =
    | {
    url: string; //地形的链接
    type: 'global'; //整个地球
    height?: number; //没用
    otherOptios?: Cesium.CesiumTerrainProvider.ConstructorOptions;
    verticalExaggeration?: number; //地形夸张
    }
    | {
    url: string; //地形的链接
    range: [number, number, number, number]; // 必须是包含四个数字的元组
    type: 'region'; //区域的话，区域范围是必填
    height: number; //低于高度后加载区域
    otherOptios?: Cesium.CesiumTerrainProvider.ConstructorOptions;
    verticalExaggeration?: number; //地形夸张程度
  };
  ```

  2. #### loadSeafloorTerrain 方法实现根据配色加载海洋地形

  - 用法

    ```javascript
    loadSeafloorTerrain(dataM.viewer, {
    	type: 'online',
    	verticalExaggeration: 20, //地形夸张-非必填
    	enableLighting: true, //是否开启光照-非必填
    	materialColor: dataM.materialColor, //材质颜色-非必填
    	legendMountElement: legend.value, //图例加载-非必填
    });
    ```

  - 类型参数

    ```tsx
    //方法参数
    const loadSeafloorTerrain = async (
    	viewer: Cesium.Viewer,
    	terrainInfo: TerrainInfoTypes
    )
    
    //类型参数
    type materialColorType = {
      height: number;
      color: string;
    };
    
    type TerrainInfoTypes =
      | {
          type: 'offline'; //离线模式
          url: string;	//地形链接
          otherOptios?: Cesium.CesiumTerrainProvider.ConstructorOptions;	
          verticalExaggeration?: number; //地形夸张
          materialColor?: materialColorType[]; //地形材质的颜色
          legendMountElement?: HTMLElement | null; //图例的挂载元素
          enableLighting?: boolean; //是否开启光照
        }
      | {
          type: 'online'; //在线模式
          materialColor?: materialColorType[]; //地形材质的颜色
          legendMountElement?: HTMLElement | null; //图例的挂载元素
          enableLighting?: boolean; //是否开启光照
          verticalExaggeration?: number; //地形的夸张程度
        };
       
    ```

    3. #### legendCanvans  当开发者传给 loadSeafloorTerrain 一个 legendMountElement（图例的挂载元素） 的参数的时候，海洋地形会把图例挂载到 legendMountElement 下面，并把这个图例给返回回来

    4. #### removeTerrain  删除通过hooks 创建的地形 和海洋地形的方法

    - 用法

      ```javascript
      removeTerrain(viewer);
      ```

    - 类型参数

      ```tsx
      const removeTerrain = (viewer: Cesium.Viewer)
      ```

      

  

  

  

