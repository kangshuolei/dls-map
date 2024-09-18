/*
 * @Author: Kang
 * @Date: 2024-09-18 14:32:19
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-18 14:39:02
 */
import type { Component } from 'vue';
import KkStartIndex from './start/index.vue';
import KkAnalysisPlot from './analysis/plot.vue';
import KkLayerIndex from './layer/index.vue';

export const ComponentsGlobals: [string, Component][] = [
  ['KkStartIndex', KkStartIndex],
  ['KkAnalysisPlot', KkAnalysisPlot],
  ['KkLayerIndex', KkLayerIndex],
];
