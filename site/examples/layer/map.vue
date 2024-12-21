<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-12-21 20:59:00
-->
<template>
  <div class="appMain">
    <dls-map
      v-if="dataM.show"
      :mapConfig="{
        id: 'dls-map-layer-map',
        imageryProvider: dataM.imageryProvider,
        sceneModeNum: 3,
      }"
      ref="dlsMapRef"
      :viewer-width="'100%'"
      :viewer-height="'500px'"
      @ready="onReady"
      @destroyed="onDestroyed"
      @cesium-ready="onCesiumReady"
    />
    <div class="operation">
      <el-button @click="handleUnLoadMap" type="primary">销毁</el-button>
      <el-button @click="handleLoadMao" type="primary">加载</el-button>
      <el-button @click="handleReload" type="primary">重载</el-button>
    </div>
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
import { useCesiumCoord } from '@dls-map/composables';
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
  viewer: null,
  show: true,
});

watch(coords, (newValue) => {
  dataM.coords = newValue;
});

//销毁地球
const handleUnLoadMap = async () => {
  await dlsMapRef.value.viewerStates.unload();
  dataM.show = false;
};

//加载地球
const handleLoadMao = () => {
  dataM.show = true;
};

//重载地球
const handleReload = async () => {
  await dlsMapRef.value.viewerStates.reload();
};

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

//地球销毁时触发
const onDestroyed = (e: any) => {
  console.log('地球销毁了', e);
};

//cesium初始化完成之后
const onCesiumReady = (e: any) => {
  console.log('cesium初始话完成', e);
};

//图层实例初始化完成
const onReady = (e: any) => {
  listenToMouseMovement(e.viewer);
  dataM.viewer = e.viewer;
  console.log('图层实例初始化完成', e);
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
