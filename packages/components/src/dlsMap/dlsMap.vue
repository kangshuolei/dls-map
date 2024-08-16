<script lang="ts" setup>
import './style/index.less';
import { onMounted, ref, reactive, defineExpose } from 'vue';
defineOptions({ name: 'dls-map' });

const props = defineProps(['mapConfig']);
const emits = defineEmits(['cesiumReady']);
const mapConfig = props.mapConfig;

const viewer = ref(null);

const dataM = reactive({});

onMounted(() => {
  if (mapConfig.defaultAccessToken) {
    Cesium.Ion.defaultAccessToken = mapConfig.defaultAccessToken;
  }
  let viewerMap = new Cesium.Viewer(mapConfig.id, {
    baseLayerPicker: false,
    geocoder: false,
    animation: false,
    shouldAnimate: true,
    homeButton: false,
    sceneMode:
      mapConfig.sceneMode === 2
        ? Cesium.SceneMode.SCENE2D
        : Cesium.SceneMode.SCENE3D,
    timeline: false,
    fullscreenButton: false,
    scene3DOnly: false,
    sceneModePicker: false,
    navigationInstructionsInitiallyVisible: false,
    navigationHelpButton: false,
    selectionIndicator: false,
    infoBox: false,
    imageryProvider: false,
  });
  if (mapConfig.defaultAccessToken || mapConfig.imageryProvider) {
    viewerMap.imageryLayers.addImageryProvider(
      new Cesium.UrlTemplateImageryProvider(mapConfig.imageryProvider)
    );
  }
  // 移除默认双击事件
  viewerMap.cesiumWidget.screenSpaceEventHandler.removeInputAction(
    Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
  );
  viewer.value = viewerMap;
  emits('cesiumReady', viewer.value);
  //显示 比例尺、缩放控制
});
defineExpose({
  dataM,
  viewer,
});
</script>

<template>
  <div
    :id="mapConfig.id"
    style="position: absolute; width: 100%; height: 100%"
    class="dlsMapContainer"
  ></div>
</template>
