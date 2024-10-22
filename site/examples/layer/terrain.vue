<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-22 16:25:52
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
    <div ref="legend" class="legend"></div>
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
  materialColor: [
    { height: 2000, color: '#B79E6C' },
    { height: 100.0, color: '#FDF6CE' },
    { height: 0.0, color: '#F9FCCA' },
    { height: -500.0, color: '#BDE7AD' },
    { height: -1000.0, color: '#81D2A3' },
    { height: -1500.0, color: '#5AB7A4' },
    { height: -2000.0, color: '#4C9AA0' },
    { height: -2500.0, color: '#437D9A' },
    { height: -4000.0, color: '#3E6194' },
    { height: -5000.0, color: '#274777' },
    { height: -8000.0, color: '#112E5B' },
    { height: -10000.0, color: '#08234C' },
  ],
});

const legend = ref<HTMLElement | null>(null);

const { loadTerrain, removeTerrain, loadSeafloorTerrain, legendCanvans } =
  useLoadTerrain();

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

//移除地形
const handleRemoveTerrain = () => {
  removeTerrain(dataM.viewer);
  legendCanvans.value.remove();
};

//加载地形
const handleLoadTerrain = () => {
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
  useCesiumFlyTo(dataM.viewer, [116.0339, 40.0144, 1000], { pitch: -11 });
};

//加载海洋地形
const handleLoadSeafloorTerain = () => {
  //颜色，图例，是否开启光照，夸张程度
  loadSeafloorTerrain(dataM.viewer, {
    type: 'online',
    verticalExaggeration: 20, //地形夸张-非必填
    enableLighting: true, //是否开启光照-非必填
    materialColor: dataM.materialColor, //材质颜色-非必填
    legendMountElement: legend.value, //图例加载-非必填
  });
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
  .legend {
    position: absolute;
    z-index: 1;
    color: #ffffff;
    bottom: 1rem;
    right: 1rem;
    width: auto;
    // padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
