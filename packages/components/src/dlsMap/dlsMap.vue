<!--
 * @Author: Kang
 * @Date: 2024-08-13 21:38:44
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-21 17:29:23
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
      v-if="dataM.isCesiumLoaded"
      :id="containerId"
      style="position: absolute; width: 100%; height: 100%"
      class="dlsMapContainer"
    ></div>
    <LoadingSpinner v-else />
  </div>
</template>
