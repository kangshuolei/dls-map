<!--
 * @Author: Kang
 * @Date: 2024-08-13 21:38:44
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-11 17:09:20
-->
<script lang="ts" setup>
import './style/index.less';
import { onMounted, ref, reactive, defineExpose, computed } from 'vue';
import { mapProps, mapEmits, ViewerConfigType } from './types';
// import * as Cesium from 'cesium';
defineOptions({ name: 'dls-map' });

const props = defineProps(mapProps);
const emits = defineEmits(mapEmits);
const mapConfig = props.mapConfig;

const viewer = ref(null);

const dataM = reactive({});

const containerId = computed<string>(() => {
  return mapConfig?.id || 'cesiumContainer';
});

onMounted(() => {
  if (mapConfig?.defaultAccessToken) {
    Cesium.Ion.defaultAccessToken = mapConfig.defaultAccessToken;
  }
  let viewerMap = new Cesium.Viewer(containerId.value, {
    // 不显示基础图层选择器
    baseLayerPicker: false,
    // 不显示地址搜索栏
    geocoder: false,
    // 不显示动画控件（如播放、暂停按钮）
    animation: false,
    // 启用或禁用场景动画
    shouldAnimate: true,
    // 不显示返回主页按钮
    homeButton: false,
    // 场景模式设置为2D或3D，根据 `mapConfig.sceneMode` 来决定
    sceneMode:
      mapConfig?.sceneModeNum === 2
        ? Cesium.SceneMode.SCENE2D
        : Cesium.SceneMode.SCENE3D,
    // 不显示时间轴
    timeline: false,
    // 不显示全屏按钮
    fullscreenButton: false,
    // 允许切换2D/3D模式
    scene3DOnly: false,
    // 不显示2D/3D视图模式切换按钮
    sceneModePicker: false,
    // 不显示导航帮助信息
    navigationInstructionsInitiallyVisible: false,
    // 不显示导航帮助按钮
    navigationHelpButton: false,
    // 不显示选择指示器
    selectionIndicator: false,
    // 不显示信息窗口
    infoBox: false,
    // 不使用默认影像提供者
    imageryProvider: false,
    ...(props.viewerConfig as ViewerConfigType),
  } as ViewerConfigType);
  if (mapConfig?.defaultAccessToken || mapConfig?.imageryProvider) {
    viewerMap.imageryLayers.addImageryProvider(
      new Cesium.UrlTemplateImageryProvider(mapConfig?.imageryProvider)
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
    :id="containerId"
    style="position: absolute; width: 100%; height: 100%"
    class="dlsMapContainer"
  ></div>
</template>
