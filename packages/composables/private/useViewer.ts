/*
 * @Author: Kang
 * @Date: 2024-10-08 15:41:17
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-09 17:03:43
 */
import {
  DlsComponentInternalInstance,
  DlsViewerProvider,
} from '@dls-map/utils/types';
import { compareCesiumVersion } from '@dls-map/utils/util';
import { mergeDescriptors } from '@dls-map/utils/merge-descriptors';
import { mapProps, mapEmits } from '@dls-map/components/src/dlsMap/types';
import { computed, ref, nextTick, onMounted } from 'vue';
import { getInstanceListener } from '@dls-map/composables/private/vm';
export default function (
  props: mapProps,
  emits: any,
  dlsInstance: DlsComponentInternalInstance
) {
  const checkCesium = () => {
    return new Promise((resolve, reject) => {
      const checkInterval = setInterval(() => {
        try {
          if (Cesium) {
            nextTick(() => {
              clearInterval(checkInterval);
              console.log('加载完毕');
              resolve(true); // Cesium 加载成功，Promise resolve
            });
          }
        } catch (error) {
          reject(error); // 处理错误，Promise reject
        }
      }, 100); // 每 100ms 检查一次
    });
  };

  const beforeLoad = async () => {
    const listener = getInstanceListener(dlsInstance, 'beforeLoad');
    listener && emits('beforeLoad', dlsInstance);
    await checkCesium();
  };

  const load = async function (): Promise<boolean | typeof Cesium> {
    //初始化
    await beforeLoad();
    return new Promise((resolve, reject) => {
      if (!Cesium) {
        return false;
      }
      const viewer = ref<Cesium.Viewer>(null);
      const mapConfig = props.mapConfig;
      if (mapConfig?.defaultAccessToken) {
        Cesium.Ion.defaultAccessToken = mapConfig.defaultAccessToken;
      }
      const containerId = computed<string>(() => {
        return mapConfig?.id || 'cesiumContainer';
      });
      let viewerMap = new Cesium.Viewer(containerId.value, {
        ...props.viewerConfig,
        ...{
          sceneMode:
            mapConfig.sceneModeNum === 2
              ? Cesium.SceneMode.SCENE2D
              : Cesium.SceneMode.SCENE3D,
        },
      });
      // 获取 canvas 元素
      var canvas = viewerMap.scene.canvas;

      // 调整 canvas 的大小
      canvas.style.width = props.viewerWidth || '100%';
      canvas.style.height = props.viewerHeight || '100%';
      if (mapConfig?.defaultAccessToken || mapConfig?.imageryProvider) {
        viewerMap.imageryLayers.addImageryProvider(
          new Cesium.UrlTemplateImageryProvider(mapConfig?.imageryProvider)
        );
      }
      // 移除默认双击事件
      viewerMap.cesiumWidget.screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
      );
      //赋值
      viewer.value = viewerMap;
      if (compareCesiumVersion(Cesium.VERSION, '1.83')) {
        // viewer.scene.globe.terrainExaggeration = options.terrainExaggeration;
      }
      dlsInstance.Cesium = Cesium;
      dlsInstance.viewer = viewer.value;
      dlsInstance.viewerElement = (viewer.value as any)._element;
      resolve(Cesium);
    });
  };

  onMounted(async () => {
    try {
      await load();
      emits('cesiumReady', Cesium);
      const listenerReady = getInstanceListener(dlsInstance, 'ready');
      listenerReady && emits('ready', dlsInstance);
    } catch (error) {}
  });

  const getServices = function (): DlsViewerProvider {
    return mergeDescriptors(
      {},
      {
        get vm() {
          return dlsInstance;
        },
        get Cesium() {
          return dlsInstance.Cesium;
        },
        get viewer(): Cesium.Viewer {
          return dlsInstance.viewer;
        },
        get dataSources(): Cesium.DataSourceCollection {
          return dlsInstance.viewer?.dataSources;
        },
        get entities() {
          return dlsInstance.viewer?.entities;
        },
        get imageryLayers() {
          return dlsInstance.viewer?.imageryLayers;
        },
        get primitives() {
          return dlsInstance.viewer?.scene.primitives;
        },
        get groundPrimitives() {
          return dlsInstance.viewer?.scene.groundPrimitives;
        },
        get postProcessStages() {
          return dlsInstance.viewer?.postProcessStages;
        },
      }
    ) as DlsViewerProvider;
  };

  return {
    getServices,
  };
}
