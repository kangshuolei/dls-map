<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-17 11:39:39
-->
<template>
  <div class="appMain">
    <dls-map
      :mapConfig="{
        id: 'dls-map-start',
        imageryProvider: dataM.imageryProvider,
        sceneModeNum: 3,
      }"
      :viewer-width="'100%'"
      :viewer-height="'500px'"
      ref="dlsMapRef"
      @cesium-ready="onCesiumReady"
    />
    <div class="coords">
      经度：{{ dataM.coords.longitude }}， 纬度：{{ dataM.coords.latitude }}，
      海拔：{{ dataM.coords.altitude }}m， 高度：{{ dataM.coords.height }}m，
      方向：{{ dataM.coords.cameraHeading }}°， 俯仰角：{{
        dataM.coords.pitchDegrees
      }}°， 层级：{{ dataM.coords.zoomLevel }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DlsMap } from '@dls-map/components';
import { useCesiumCoord } from 'dls-map';
import { onMounted, ref, reactive, watch } from 'vue';

const { listenToMouseMovement, coords } = useCesiumCoord();
const dlsMapRef = ref(null);
const dataM = reactive<any>({
  imageryProvider: {
    url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    layer: 'tdtVecBasicLayer',
    style: 'default',
    format: 'image/png',
    tileMatrixSetID: 'GoogleMapsCompatible',
  },
  coords: {},
});

watch(coords, (newValue) => {
  dataM.coords = newValue;
});

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

//cesium初始化完成之后
const onCesiumReady = (viewer: Cesium.Viewer) => {
  listenToMouseMovement(viewer);
  console.log('viewer', viewer, Cesium);
};
</script>

<style>
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
