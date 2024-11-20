<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-20 16:33:23
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
      <el-button @click="handleLoadWindy('load')" type="primary"
        >加载风场</el-button
      >
      <el-button @click="handleLoadWindy('hidden')" type="primary"
        >隐藏风场</el-button
      >
      <el-button @click="handleLoadWindy('show')" type="primary"
        >显示风场</el-button
      >
      <el-button @click="handleLoadWindy('pause')" type="primary"
        >暂停风场</el-button
      >
      <el-button @click="handleLoadWindy('resume')" type="primary"
        >恢复风场</el-button
      >
      <el-button @click="handleLoadWindy('destroy')" type="primary"
        >销毁风场</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DlsMap } from '@dls-map/components';
import { Windy } from '@dls-map/composables';
import { onMounted, ref, reactive, onUnmounted } from 'vue';
import axios from 'axios';

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

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

//加载下雨场景
const handleLoadWindy = (type: string) => {
  if (type === 'load') {
    let url =
      import.meta.env.MODE === 'development'
        ? '/2017121300.json'
        : '/dls-map-doc/2017121300.json';
    axios
      .get(url)
      .then((response: any) => {
        dataM.windy = new Windy({
          json: response.data,
          cesiumViewer: dataM.viewer,
          speed: 100,
        });
        dataM.windy.loadWindy();
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  } else if (type === 'hidden') {
    dataM.windy.hideWindy();
  } else if (type === 'show') {
    dataM.windy.showWindy();
  } else if (type === 'pause') {
    dataM.windy.pauseWindy();
  } else if (type === 'resume') {
    dataM.windy.resumeWindy();
  } else if (type === 'destroy') {
    dataM.windy.destroyWindy();
  }
};

onUnmounted(() => {
  dataM.windy && dataM.windy.destroyWindy();
});

//cesium初始化完成之后
const onCesiumReady = (e: any) => {
  //加载地形
  dataM.viewer = e.viewer;
  console.log('执行了', e.viewer);
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
