<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-29 14:21:52
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
      <el-button @click="handleAddPoint" type="primary">添加点</el-button>
      <el-button @click="handleAddLine" type="primary">添加线</el-button>
      <el-button @click="handleAddCircle" type="primary">添加圆</el-button>
      <el-button @click="handleAddWall" type="primary">添加墙</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  addBillboard,
  addCircle,
  addLine,
  addWall,
  DlsMap,
  useCesiumFlyTo,
} from 'dls-map';
import lightSpotImg from '../../assets/images/lightSpot.png';
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
  viewer: null,
});

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

//添加点
const handleAddPoint = () => {
  const option = {
    name: 'test',
    scale: 1,
    doubleClickPitch: -30, // 双击放大偏转角
    attribute: {
      // 属性信息，点击通过getPopupCon接受
      position: [-115.0, 37.0],
      weizhi: '123',
      ischangeimg: false,
    },
  };
  addBillboard(-115.0, 37.0, lightSpotImg, option, dataM.viewer);
  useCesiumFlyTo(dataM.viewer, [-115.0, 37.0, 1000000]);
};

//添加线
const handleAddLine = () => {
  let entity = addLine(
    [-115.0, 37.0, -115.0, 32.0],
    Cesium.Color.RED,
    dataM.viewer,
    {}
  );
  useCesiumFlyTo(dataM.viewer, [-115.0, 37.0, 1000000]);
};

//添加圆
const handleAddCircle = () => {
  let entity = addCircle(
    -115.0,
    37.0,
    100000,
    'rgba(77, 225, 247,0.3)',
    dataM.viewer
  );
  useCesiumFlyTo(dataM.viewer, [-115.0, 37.0, 1000000]);
};

//添加墙
const handleAddWall = () => {
  addWall(
    dataM.viewer,
    [
      -115.0, 37.0, 100000, -115.0, 32.0, 100000, -107.0, 33.0, 100000, -115.0,
      37.0, 100000,
    ],
    '#00FFFF',
    0.7,
    1
  );
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
