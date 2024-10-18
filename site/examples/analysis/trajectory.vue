<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-18 16:15:14
-->
<template>
  <div class="appMain">
    <dls-map
      :mapConfig="{
        id: 'dls-map-trajectory',
        imageryProvider: dataM.imageryProvider,
        sceneModeNum: 2,
      }"
      ref="dlsMapRef"
      :viewer-width="'100%'"
      :viewer-height="'500px'"
      @ready="onCesiumReady"
    />
    <div class="operation">
      <el-button @click="handleLoadTrajectory" type="primary"
        >加载轨迹</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DlsMap } from '@dls-map/components';
import { CesiumTrack, useCesiumFlyTo } from '@dls-map/composables';
import { onMounted, ref, reactive } from 'vue';
import ArrowImg from '../../assets/images/arrowImg.png';

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

//加载轨迹
const handleLoadTrajectory = () => {
  //加载轨迹线
  let data = [
    {
      positions: [
        [112.1514, 20.820353],
        [114.774, 21.7316],
        [118.114, 23.3144],
        [122.3759, 27.2888],
        [123.9299, 32.2732],
      ],
      color: '#FF0000',
    },
  ];
  CesiumTrack(dataM.viewer, data, ArrowImg).then(() => {});
  useCesiumFlyTo(dataM.viewer, [118.1417, 26.8013, 2581065]);
};

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
