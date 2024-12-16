<!--
 * @Author: Kang
 * @Date: 2024-08-13 21:38:44
 * @Last Modified by: Kang
 * @LastEditTime: 2024-12-16 22:02:11
-->
<script lang="ts" setup>
import './style/index.less';
import {
  onMounted,
  ref,
  reactive,
  defineExpose,
  computed,
  nextTick,
  getCurrentInstance,
  provide,
} from 'vue';
import useViewer from '@dls-map/composables/private/useViewer';
import { dlsKey } from '@dls-map/utils/config';
import { mapProps, mapEmits, ViewerConfigType } from './types';
import LoadingSpinner from './LoadingSpinner.vue';
import {
  DlsComponentInternalInstance,
  DlsViewerProvider,
} from '@dls-map/utils/types';

defineOptions({ name: 'dls-map' });

const props = defineProps(mapProps);
const emits = defineEmits(mapEmits);
const mapConfig = props.mapConfig;

const instance = getCurrentInstance() as DlsComponentInternalInstance;

const viewer = ref(null);

const dataM = reactive({
  isCesiumLoaded: true,
  isClient: true,
});

const containerId = computed<string>(() => {
  return mapConfig?.id || 'cesiumContainer';
});

const viewerStates = useViewer(props, emits, instance);

const dlsMapInstance = viewerStates.getServices();

provide<DlsViewerProvider>(dlsKey, dlsMapInstance);
instance.appContext.config.globalProperties.$DlsMap =
  instance.appContext.config.globalProperties.$DlsMap || {};
instance.appContext.config.globalProperties.$DlsMap[containerId.value] =
  viewerStates.getServices();

onMounted(() => {
  dataM.isClient = true;
  //设置 threejs宽和高
  if (props.isThreeJSActive) {
    const canvas = document.getElementById('threeContainerId');
    // 检查是否成功获取
    if (canvas instanceof HTMLCanvasElement) {
      console.log('props', props);
      canvas.style.width = props.threejsWidth || '100%';
      canvas.style.height = props.threejsHeight || '100%';
      console.log('canvas.style', canvas.style.width, canvas.style.height);
    }
  }
});
defineExpose({
  dataM,
  viewer,
  viewerStates,
});
</script>

<template>
  <div v-if="dataM.isClient">
    <div
      :id="containerId"
      style="position: absolute; width: 100%; height: 100%"
      class="dlsMapContainer"
    ></div>
    <canvas v-if="props.isThreeJSActive" id="threeContainerId"></canvas>
  </div>
</template>

<style lang="less">
#threeContainerId {
  position: absolute;
  margin: 0%;
  z-index: 10;
  pointer-events: none;
}
</style>
