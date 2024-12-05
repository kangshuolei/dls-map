<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-12-02 10:43:22
-->
<template>
  <div class="appMain">
    <dls-map
      :mapConfig="{
        id: 'dls-map-keyboard-roma',
        imageryProvider: dataM.imageryProvider,
        sceneModeNum: 3,
      }"
      ref="dlsMapRef"
      :viewer-width="'100%'"
      :viewer-height="'500px'"
      @ready="onCesiumReady"
    />
    <div class="operation">
      <el-button @click="handleOpenKeyBoard" type="primary"
        >加载键盘控制漫游</el-button
      >
      <el-button @click="handleCloseKeyBoard" type="primary"
        >销毁键盘控制漫游</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DlsMap } from '@dls-map/components';
import { useCesiumFlyTo, useKeyboardRoam } from '@dls-map/composables';
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

const { keyboardMapRoamingInit, keyboardMapRoamingRemove } = useKeyboardRoam();

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

//加载键盘控制漫游
const handleOpenKeyBoard = () => {
  keyboardMapRoamingInit(dataM.viewer);
};

//销毁下雨场景
const handleCloseKeyBoard = () => {
  keyboardMapRoamingRemove();
};

//cesium初始化完成之后
const onCesiumReady = (e: any) => {
  dataM.viewer = e.viewer;
  useCesiumFlyTo(dataM.viewer, [116.4074, 39.9042, 206], {
    heading: 357,
    pitch: -25,
  });
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
