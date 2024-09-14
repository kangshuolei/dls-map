<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-14 10:46:12
-->
<template>
  <div class="appMain">
    <dls-map
      :mapConfig="{
        id: 'dls-map-id',
        imageryProvider: dataM.imageryProvider,
        sceneModeNum: 3,
      }"
      ref="dlsMapRef"
      @cesium-ready="onCesiumReady"
    />
    <!-- 标绘列表 -->
    <div class="plot_list">
      <div
        v-for="(item, index) in dataM.plotList"
        :class="{ active: dataM.currentIndex === index }"
        @click="handleClickPlot(item, index)"
        class="plot_btn"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DlsMap } from 'dls-map';
import { useCesiumCoord, CesiumPlot } from 'dls-map';
import { onMounted, ref, reactive } from 'vue';

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
  currentIndex: null,
  viewer: null,
  plotList: [
    {
      label: '点',
      key: 'Point',
    },
    {
      label: '线',
      key: 'Polyline',
    },
    {
      label: '面',
      key: 'Polygon',
    },
    {
      label: '直箭头（粗单尖箭头）',
      key: 'FineArrow',
    },
    {
      label: '进攻方向箭头',
      key: 'AttackArrow',
    },
    {
      label: '进攻方向箭头（燕尾）',
      key: 'SwallowtailAttackArrow',
    },
    {
      label: '分队战斗方向',
      key: 'SquadCombat',
    },
    {
      label: '分队战斗方向（燕尾）',
      key: 'SwallowtailSquadCombat',
    },
    {
      label: '细直箭头',
      key: 'StraightArrow',
    },
    {
      label: '曲线箭头',
      key: 'CurvedArrow',
    },
    {
      label: '突击方向（粗单直箭头）',
      key: 'AssaultDirection',
    },
    {
      label: '双箭头（钳击）',
      key: 'DoubleArrow',
    },
    {
      label: '自由线',
      key: 'FreehandLine',
    },
    {
      label: '自由面',
      key: 'FreehandPolygon',
    },
    {
      label: '曲线',
      key: 'Curve',
    },
    {
      label: '椭圆',
      key: 'Ellipse',
    },
    {
      label: '半月面（弓型面）',
      key: 'Lune',
    },
    {
      label: '矩形',
      key: 'Reactangle',
    },
    {
      label: '三角形',
      key: 'Triangle',
    },
    {
      label: '圆形',
      key: 'Circle',
    },
    {
      label: '扇形',
      key: 'Sector',
    },
    {
      label: '集结地',
      key: 'GatheringPlace',
    },
    {
      label: '弓形线',
      key: 'Arc',
    },
    {
      label: '闭合曲面',
      key: 'ClosedCurve',
    },
  ],
});

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

const handleClickPlot = (data: any, index: number) => {
  dataM.currentIndex = index;
  const geometry = new CesiumPlot[data.key](Cesium, dataM.viewer, {
    material: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 0.5)'),
    outlineMaterial: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 1)'),
    outlineWidth: 3,
  });
  console.log('geometry', geometry);
};

//cesium初始化完成之后
const onCesiumReady = (viewer: Cesium.Viewer) => {
  dataM.viewer = viewer;
  listenToMouseMovement(viewer);
};
</script>

<style lang="less" scoped>
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
  .plot_list {
    position: absolute;
    z-index: 1;
    color: #ffffff;
    top: 0;
    left: 0;
    width: auto;
    padding: 0.5rem;
    background-color: rgba(255, 255, 255, 0.5);
    width: 300px;
    height: 100%;
    overflow-y: auto;
    .plot_btn {
      cursor: pointer;
      width: auto;
      padding: 5px;
      background-color: rgb(136, 180, 90);
      margin-bottom: 5px;
    }
    .active {
      background-color: rgb(97, 183, 6);
    }
  }
}
</style>
