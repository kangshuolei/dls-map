<template>
  <div class="appMain">
    <DlsMap
      :mapConfig="{
        id: 'dls-map-id',
        imageryProvider: dataM.imageryProvider,
        sceneMode: 3,
      }"
      ref="dlsMapRef"
      @cesium-ready="onCesiumReady"
    />
    <div class="coords">
      经度：{{ dataM.coords.longitude }}， 纬度：{{ dataM.coords.latitude }}，
      海拔：{{ dataM.coords.altitude }}m， 高度：{{ dataM.coords.height }}m，
      方向：{{ dataM.coords.cameraHeading }}°， 俯仰角：{{
        dataM.coords.pitchDegrees
      }}°， 层级：{{ dataM.coords.zoomLevel }}
    </div>
    <div class="plot" @click="handleCesiumPlot">标绘</div>
    <div class="drawLine" @click="handleDrawLine">绘制线段</div>
    <div class="backCenter" @click="handleBackCenter">回到中心点</div>
    <div class="setPitchDegrees" @click="handleSetPitchDegrees">仰角设置</div>
  </div>
</template>

<script lang="ts" setup>
import { Button, DlsMap } from '@dls-map/components';
import wallLine from '/static/images/wall_line.png';
import {
  useSwitchMap,
  useCesiumCoord,
  useCesiumFlyTo,
  DlsDivLabel,
  CesiumPlot,
  addSnowScene,
  addRainScene,
  addLine,
  addWall,
} from '@dls-map/composables';
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
  dlsDivLabel: null,
});

watch(coords, (newValue) => {
  dataM.coords = newValue;
});

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
  // console.log(dataM.imageryProvider);
});
const handleDrawLine = () => {
  // dlsMapContainer.value.DrawSoildLine(dataM.viewer,'lines', [255, 10, 255], 5)
};

const handleCesiumPlot = () => {
  const geometry = new CesiumPlot.Point(Cesium, dataM.viewer, {
    pixelSize: 10,
  });
  console.log('geometry', geometry);
};

const handleBackCenter = () => {
  useCesiumFlyTo(dataM.viewer, [116.4134, 39.911, 11000000]);
};

const handleSetPitchDegrees = () => {
  // dlsMapContainer.value.handlePitchDegrees(dataM.viewer,-11)
};
//cesium初始化完成之后
const onCesiumReady = (e: any) => {
  dataM.viewer = e;
  // useSwitchMap({},e)
  listenToMouseMovement(e);
  if (dataM.dlsDivLabel) {
    dataM.dlsDivLabel.removeCountryAllDiv('.LayerTitle');
  }
  const jsxContent = `
          <div class="ip-model-style">
            123
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
  // addRainScene(dataM.viewer);
  //生成一个线段
  addLine([-115.0, 37.0, -115.0, 32.0], Cesium.Color.RED, dataM.viewer, {});
  //生成一个墙
  addWall(dataM.viewer, wallLine);
};
</script>

<style>
.appMain {
  width: 100%;
  height: 100%;
  .coords {
    position: absolute;
    z-index: 9999;
    color: #ffffff;
    bottom: 0;
    right: 0;
    width: auto;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .drawLine {
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    color: #ffffff;
    top: 0;
    right: 0;
    width: auto;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .backCenter {
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    color: #ffffff;
    top: 0;
    right: 5rem;
    width: auto;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .setPitchDegrees {
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    color: #ffffff;
    top: 0;
    right: 12rem;
    width: auto;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .plot {
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    color: #ffffff;
    top: 0;
    right: 20rem;
    width: auto;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
