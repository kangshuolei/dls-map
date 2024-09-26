/*
 * @Author: Kang
 * @Date: 2024-09-18 14:32:19
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-25 14:34:14
 */
import type { Component } from 'vue';
import KkLayerMap from './layer/map.vue';
import KkAnalysisPlot from './analysis/plot.vue';
import KkLayerTerrain from './layer/terrain.vue';

export const ComponentsGlobals: [string, Component][] = [
  ['KkLayerMap', KkLayerMap],
  ['KkAnalysisPlot', KkAnalysisPlot],
  ['KkLayerTerrain', KkLayerTerrain],
];
