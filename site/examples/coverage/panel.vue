<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-15 17:27:37
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
      <el-button @click="handleAddPanel" type="primary"
        >添加信息面板场景</el-button
      >
      <el-button @click="handleAddTitle" type="primary"
        >添加标题面板场景</el-button
      >
      <el-button @click="handleRemovePanel" type="primary"
        >删除信息面板</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DlsMap } from '@dls-map/components';
import {
  DlsDivLabel,
  useCesiumEntities,
  useCesiumFlyTo,
} from '@dls-map/composables';
import { onMounted, ref, reactive } from 'vue';
import { divValOptions } from '@dls-map/utils/types';
import lightSpotImg from '../../assets/images/lightSpot.png';
const { addPointEntity, removeSpecifyEntity } = useCesiumEntities();

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
  pointEntity: null,
});

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

//删除面板
const handleRemovePanel = () => {
  if (dataM.dlsDivLabel) {
    dataM.dlsDivLabel.removeAllDiv('.LayerTitle');
    dataM.dlsDivLabel.removeAllDiv('.LayerPlane');
  }
  if (dataM.pointEntity) {
    removeSpecifyEntity([dataM.pointEntity], dataM.viewer);
  }
};

//添加标题面板
const handleAddTitle = () => {
  //初始化面板
  handleRemovePanel();
  //添加的图片类型
  const pointEntity = addPointEntity(116.4134, 39.911, dataM.viewer, {
    type: 'billboard',
    imgUrl: lightSpotImg,
  });
  dataM.pointEntity = pointEntity;
  //添加标题面板
  const jsxContent = `
          <div class="title-model-style">
            设备名称
          </div>
        `;
  let className = 'LayerTitle';
  let val: divValOptions = {
    viewer: dataM.viewer,
    position: [116.4134, 39.911],
    height: 0,
    offset: [0, -90],
    dom: jsxContent,
    className,
  };
  dataM.dlsDivLabel = new DlsDivLabel(val);
  //跳转
  dataM.viewer.flyTo(pointEntity, {
    duration: 2, // 相机飞行的时间（以秒为单位）
    offset: new Cesium.HeadingPitchRange(0, -0.5, 500), // 设置偏移角度和距离（可选）
  });
};

//添加信息面板
const handleAddPanel = () => {
  //初始化面板
  handleRemovePanel();
  //添加信息面板
  const jsxContent = `
          <div class="ip-model-style">
            <div>信息1：value1</div>
            <div>信息2：value2</div>
            <div>信息3：value3</div>
          </div>
        `;
  let className = 'LayerPlane';
  let val: divValOptions = {
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
const onCesiumReady = (e: any) => {
  //加载地形
  dataM.viewer = e.viewer;
  console.log('执行了', e.viewer);
};
</script>

<style lang="less">
.ip-model-style {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.6rem;
  color: #ffffff;
}
.title-model-style {
  background-color: blue;
  border-radius: 6px;
  padding: 1rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
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
