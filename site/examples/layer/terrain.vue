<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-16 17:37:43
-->
<template>
  <div class="appMain">
    <dls-map
      :mapConfig="{
        id: 'dls-map-layer-terrain',
        imageryProvider: dataM.imageryProvider,
        sceneModeNum: 3,
      }"
      ref="dlsMapRef"
      :viewer-width="'100%'"
      :viewer-height="'500px'"
      @ready="onCesiumReady"
    />
    <div class="operation">
      <el-button @click="handleLoadTerrain" type="primary">加载地形</el-button>
      <el-button @click="handleLoadSeafloorTerain" type="primary"
        >加载海洋地形</el-button
      >
      <el-button @click="handleRemoveTerrain" type="primary"
        >移除地形</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLoadTerrain, useCesiumFlyTo } from '@dls-map/composables';
import { DlsMap } from '@dls-map/components';
import { onMounted, ref, reactive } from 'vue';

const dlsMapRef = ref(null);
const dataM = reactive<any>({
  imageryProvider: {
    url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    layer: 'tdtVecBasicLayer',
    style: 'default',
    format: 'image/png',
    tileMatrixSetID: 'GoogleMapsCompatible',
  },
  viewer: null,
});

const { loadTerrain, removeTerrain, loadSeafloorTerrain } = useLoadTerrain();

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

//移除地形
const handleRemoveTerrain = () => {
  removeTerrain(dataM.viewer);
};

//加载地形
const handleLoadTerrain = () => {
  loadTerrain(dataM.viewer, [
    {
      type: 'global',
      url: 'https://data.marsgis.cn/terrain/',
    },
    {
      type: 'region',
      url: 'https://data.marsgis.cn/terrain/',
      range: [112.3242, 123.574, 33.8378, 45.1757], //模拟北京区域
      height: 1000000, //相机低于这个高度并且在范围内的时候加载指定北京的地形
    },
  ]);
  dataM.viewer.scene.globe.terrainExaggeration = 1.0;
  useCesiumFlyTo(dataM.viewer, [116.0339, 40.0144, 1000], { pitch: -11 });
};

//加载海洋地形
const handleLoadSeafloorTerain = () => {
  loadSeafloorTerrain(dataM.viewer, { type: 'online' });
  useCesiumFlyTo(dataM.viewer, [114.62, 15.02, 10000], { pitch: -11 });
};

//cesium初始化完成之后
const onCesiumReady = (e: any) => {
  //加载地形
  console.log('执行了', e.viewer);
  dataM.viewer = e.viewer;
};
</script>

<style lang="less" scoped>
.appMain {
  width: 100%;
  height: 100%;
  .operation {
    position: absolute;
    z-index: 1;
    color: #ffffff;
    top: 0;
    right: 0;
    width: auto;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
