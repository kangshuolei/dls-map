/*
 * @Author: Kang
 * @Date: 2024-10-08 15:47:41
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-15 11:19:18
 */
import { ComponentInternalInstance } from 'vue';

interface AnyObject {
  [propName: string]: any;
}

export type AnyFunction<T = void> = (...args: any[]) => T;

interface DlsComponentInternalInstance extends ComponentInternalInstance {
  loading: boolean;
  Cesium: typeof Cesium;
  viewer: Cesium.Viewer;
  viewerElement?: HTMLElement;
}

interface DlsViewerProvider {
  Cesium: typeof Cesium;
  viewer: Cesium.Viewer;
  vm: DlsComponentInternalInstance;
  dataSources: Cesium.DataSourceCollection;
  entities: Cesium.EntityCollection;
  imageryLayers: Cesium.ImageryLayerCollection;
  primitives: Cesium.PrimitiveCollection;
  groundPrimitives: Cesium.PrimitiveCollection;
  postProcessStages: Cesium.PostProcessStageCollection;
}

interface divValOptions {
  viewer: Cesium.Viewer;
  height: number;
  position: [number, number];
  dom: HTMLElement | string;
  id?: string;
  className?: string;
  offset?: [number, number];
  type?: string;
}

export { DlsComponentInternalInstance, DlsViewerProvider, divValOptions };
