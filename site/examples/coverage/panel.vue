<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-29 15:44:40
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
      <el-button @click="handleAddPanel" type="primary">添加信息面板</el-button>
      <el-button @click="handleRemovePanel" type="primary"
        >删除信息面板</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DlsMap, DlsDivLabel, useCesiumFlyTo } from 'dls-map';
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
  dlsDivLabel: null,
});

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

//删除信息面板
const handleRemovePanel = () => {
  if (dataM.dlsDivLabel) {
    dataM.dlsDivLabel.removeAllDiv('.LayerTitle');
  }
};

//添加信息面板
const handleAddPanel = () => {
  if (dataM.dlsDivLabel) {
    dataM.dlsDivLabel.removeAllDiv('.LayerTitle');
  }
  const jsxContent = `
          <div class="ip-model-style">
            <div>信息1：value1</div>
            <div>信息2：value2</div>
            <div>信息3：value3</div>
          </div>
        `;
  let className = 'LayerTitle';
  let val = {
    viewer: dataM.viewer,
    position: [116.4134, 39.911],
    height: 0,
    offset: [0, -90],
    dom: jsxContent,
    className,
  };
  dataM.dlsDivLabel = new DlsDivLabel(val);
  useCesiumFlyTo(dataM.viewer, [116.4134, 39.911, 8000000]);
};

//cesium初始化完成之后
const onCesiumReady = (viewer: Cesium.Viewer) => {
  //加载地形
  dataM.viewer = viewer;
  console.log('执行了', viewer);
};
</script>

<style lang="less">
.ip-model-style {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.6rem;
}
</style>
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
