<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-12-16 16:35:48
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
      <el-button @click="handleAddPoint" type="primary">添加点</el-button>
      <el-button @click="handleAddLine" type="primary">添加线</el-button>
      <el-button @click="handleAddCircle" type="primary">添加圆</el-button>
      <el-button @click="handleAddWall" type="primary">添加墙</el-button>
      <el-button @click="handleRemovePoint" type="primary">删除点</el-button>
      <el-button @click="handleRemoveWall" type="primary">删除墙</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DlsMap } from '@dls-map/components';
import { useCesiumFlyTo, useCesiumEntities } from '@dls-map/composables';
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
  pointEntity: null,
  wallEntity: null,
});
const {
  addPointEntity,
  addLine,
  addCircle,
  addWall,
  removeSpecifyEntity,
  removeSpecifyPrimitive,
} = useCesiumEntities();

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

//删除点
const handleRemovePoint = () => {
  removeSpecifyEntity([dataM.pointEntity], dataM.viewer);
  dataM.pointEntity = null;
};

//删除墙
const handleRemoveWall = () => {
  removeSpecifyPrimitive([dataM.wallEntity], dataM.viewer);
  dataM.wallEntity = null;
};

//添加点
const handleAddPoint = () => {
  if (!dataM.pointEntity) {
    //添加的图片类型
    const pointEntity = addPointEntity(116.4134, 39.911, dataM.viewer, {
      type: 'billboard',
      imgUrl: lightSpotImg,
    });
    // const pointEntity = addPointEntity(116.4134, 39.911, dataM.viewer, {
    //   type: 'point',
    //   pointColor: Cesium.Color.YELLOW,
    //   pointSize: 20,
    //   otherOptions: {
    //     color: Cesium.Color.PINK,
    //   },
    // });
    dataM.pointEntity = pointEntity;
    dataM.viewer.flyTo(pointEntity, {
      duration: 2, // 相机飞行的时间（以秒为单位）
      offset: new Cesium.HeadingPitchRange(0, -0.5, 500), // 设置偏移角度和距离（可选）
    });
  } else {
    dataM.viewer.flyTo(dataM.pointEntity, {
      duration: 2, // 相机飞行的时间（以秒为单位）
      offset: new Cesium.HeadingPitchRange(0, -0.5, 500), // 设置偏移角度和距离（可选）
    });
  }
};

//添加线
const handleAddLine = () => {
  const lineEntity = addLine(
    [-115.0, 37.0, -115.0, 32.0],
    new Cesium.PolylineDashMaterialProperty({
      color: Cesium.Color.BLUE, // 虚线的颜色
      dashLength: 16, // 虚线的每个段的长度
    }),
    dataM.viewer,
    {}
  );
  dataM.viewer.flyTo(lineEntity, {
    duration: 2, // 相机飞行的时间（以秒为单位）
  });
};

//添加圆
const handleAddCircle = () => {
  const circleEntity = addCircle(
    116.4134,
    39.911,
    10000,
    'rgba(77, 225, 247,0.3)',
    dataM.viewer
  );
  dataM.viewer.flyTo(circleEntity, {
    duration: 2, // 相机飞行的时间（以秒为单位）
    offset: new Cesium.HeadingPitchRange(0, -0.5, 500),
  });
};

//添加墙
const handleAddWall = () => {
  if (!dataM.wallEntity) {
    const wallEntity = addWall(
      dataM.viewer,
      [
        -115.0, 37.0, 100000, -115.0, 32.0, 100000, -107.0, 33.0, 100000,
        -115.0, 37.0, 100000,
      ],
      '#00FFFF',
      { MaterialIndex: 4 }
    );
    dataM.wallEntity = wallEntity;
    dataM.viewer.flyTo(wallEntity, {
      duration: 2, // 相机飞行的时间（以秒为单位）
      offset: new Cesium.HeadingPitchRange(0, -0.5, 500),
    });
  } else {
    dataM.viewer.flyTo(dataM.wallEntity, {
      duration: 2, // 相机飞行的时间（以秒为单位）
      offset: new Cesium.HeadingPitchRange(0, -0.5, 500),
    });
  }
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
