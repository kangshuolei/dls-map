<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-29 09:53:14
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
      @cesium-ready="onCesiumReady"
    />
  </div>
</template>

<script lang="ts" setup>
import { DlsMap, useLoadTerrain, useCesiumFlyTo } from 'dls-map';
import { onMounted, ref, reactive, watch } from 'vue';

const dlsMapRef = ref(null);
const dataM = reactive<any>({
  imageryProvider: {
    url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    layer: 'tdtVecBasicLayer',
    style: 'default',
    format: 'image/png',
    tileMatrixSetID: 'GoogleMapsCompatible',
  },
});

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

//cesium初始化完成之后
const onCesiumReady = (viewer: Cesium.Viewer) => {
  //加载地形
  console.log('执行了', viewer);
  useLoadTerrain(
    [
      {
        type: 'global',
        url: 'https://data.marsgis.cn/terrain/',
        range: [0, 0, 0, 0],
      },
    ],
    28000,
    viewer
  );
  viewer.scene.globe.terrainExaggeration = 1.0;
  useCesiumFlyTo(viewer, [116.0339, 40.0144, 1000]);
};
</script>

<style lang="less" scoped>
.appMain {
  width: 100%;
  height: 100%;
  .coords {
    position: absolute;
    z-index: 1;
    color: #ffffff;
    bottom: 0;
    right: 0;
    width: auto;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
