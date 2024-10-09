/*
 * @Author: Kang
 * @Date: 2024-10-08 10:05:50
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-09 17:07:38
 */
import useLog from '@dls-map/composables/private/useLog';
import { dlsKey } from '@dls-map/utils/config';
import { DlsViewerProvider } from '@dls-map/utils/types';
import { getCurrentInstance, inject, onMounted } from 'vue';
export default function useDlsMap(containerId?: string) {
  const instance = getCurrentInstance();
  const provides =
    instance?.parent === null
      ? instance.vnode.appContext && instance.vnode.appContext.provides
      : (instance?.parent as any)?.provides;
  if ((!provides || !(dlsKey in provides)) && !containerId) {
    containerId = 'cesiumContainer';
  }
  const logger = useLog();
  if (instance) {
    if (containerId) {
      const $vc =
        instance.appContext.config.globalProperties?.$DlsMap?.[containerId];
      if (!$vc) {
        return inject<DlsViewerProvider>(dlsKey);
      }
      return $vc;
    } else {
      logger.warn(
        `Failed to get $vc, reason: vc-viewer with containerId: ${containerId} was not found.`
      );
    }
  } else {
    logger.warn('DlsMap useDlsMap() can only be used inside setup().');
  }
}
