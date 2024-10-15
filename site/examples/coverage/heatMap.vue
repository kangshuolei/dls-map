<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-15 16:58:12
-->
<template>
  <div class="appMain">
    <dls-map
      :mapConfig="{
        id: 'dls-map-heatmap',
        imageryProvider: dataM.imageryProvider,
        sceneModeNum: 3,
      }"
      ref="dlsMapRef"
      :viewer-width="'100%'"
      :viewer-height="'500px'"
      @cesium-ready="onCesiumReady"
    />
    <div class="operation">
      <el-button @click="handleHeatMap" type="primary">加载热力图</el-button>
      <el-button @click="handleRemoveHeatMap" type="primary">移除</el-button>
      <el-button @click="handleShowHeatMap" type="primary">显示</el-button>
      <el-button @click="handleHideHeatMap" type="primary">隐藏</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DlsMap } from 'dls-map';
import { CesiumHeatMap } from '@dls-map/composables';
import { onMounted, ref, reactive } from 'vue';
import { nextTick } from 'vue';

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
  heatmap: null,
});

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

//移出热力图
const handleRemoveHeatMap = () => {
  dataM.heatmap.remove();
};

//显示热力图
const handleShowHeatMap = () => {
  dataM.heatmap.show();
};

//隐藏热力图
const handleHideHeatMap = () => {
  dataM.heatmap.hide();
};

//加载热力图
const handleHeatMap = () => {
  // 加载热力图
  let heatData = [
    { lat: 39.258476, lng: 110.219918, value: 42 },
    { lat: 39.277398, lng: 110.239745, value: 46 },
    { lat: 39.319952, lng: 110.092288, value: 39 },
    { lat: 39.474548, lng: 110.068417, value: 36 },
    { lat: 39.437506, lng: 110.056819, value: 38 },
    { lat: 38.971221, lng: 110.592357, value: 40 },
    { lat: 38.95199, lng: 111.097213, value: 41 },
    { lat: 38.846696, lng: 110.17917, value: 42 },
    { lat: 39.352112, lng: 110.189824, value: 33 },
    { lat: 39.431853, lng: 110.077273, value: 30 },
    { lat: 39.351684, lng: 110.161226, value: 43 },
    { lat: 38.994047, lng: 110.271835, value: 44 },
    { lat: 38.733172, lng: 110.170308, value: 45 },
    { lat: 39.042436, lng: 110.430257, value: 46 },
  ];
  const heatmap = new CesiumHeatMap(Cesium, dataM.viewer, heatData, {
    radius: 30,
    maxOpacity: 0.9,
    minOpacity: 0.2,
    blur: 0.75,
    // gradient: {
    //   '.5': 'blue',
    //   '.8': 'red',
    //   '.95': '',
    // },
  });
  dataM.heatmap = heatmap;
  console.log('heatmap', dataM.heatmap);
  dataM.viewer.flyTo(heatmap.entity);
};

//cesium初始化完成之后
const onCesiumReady = (viewer: Cesium.Viewer) => {
  //加载地形
  dataM.viewer = viewer;
  console.log('执行了', viewer);
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
