<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-29 14:42:18
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
    <div class="operation">
      <el-button @click="handleLoadTrajectory" type="primary"
        >加载轨迹</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CesiumTrack, DlsMap } from 'dls-map';
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
  let data: any = [
    {
      positions: [
        [-75.1, 39.57],
        [-80.12, 25.46],
        [-85.12, 30.46],
        [-90.12, 35.46],
        [-95.12, 40.46],
      ],
      color: '#FF0000',
    },
    {
      positions: [
        [-70.1, 40.57],
        [-75.12, 35.46],
        [-80.12, 30.46],
        [-85.12, 25.46],
        [-90.12, 20.46],
      ],
      color: '#FF0000',
    },
  ];
  CesiumTrack(data, dataM.viewer, ArrowImg).then(() => {});
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
