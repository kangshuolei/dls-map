/*
 * @Author: Kang
 * @Date: 2024-09-18 14:32:19
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-29 15:59:30
 */
import type { Component } from 'vue';
import KkLayerMap from './layer/map.vue';
import KkAnalysisPlot from './analysis/plot.vue';
import KkLayerTerrain from './layer/terrain.vue';
import KkEntityGraphics from './entity/graphics.vue';
import KkAnalysisMeasure from './analysis/measure.vue';
import KkAnalysisTrajectory from './analysis/trajectory.vue';
import KkAnalysisSpacePoint from './analysis/spacePoint.vue';
import KkAnalysisBufferArea from './analysis/bufferArea.vue';
import KkCoverageHeatMap from './coverage/heatMap.vue';
import KkEnvironmentRain from './environment/rain.vue';
import KkEnvironmentSnow from './environment/snow.vue';
import KkCoverageLoadEcharts from './coverage/loadEcharts.vue';
import KkCoveragePanel from './coverage/panel.vue';
import KkLayerPhotography from './layer/photography.vue';
import KkCoverageLayers from './coverage/layers.vue';
import KkToolsTools from './tools/tools.vue';

export const ComponentsGlobals: [string, Component][] = [
  ['KkLayerMap', KkLayerMap],
  ['KkAnalysisPlot', KkAnalysisPlot],
  ['KkLayerTerrain', KkLayerTerrain],
  ['KkEntityGraphics', KkEntityGraphics],
  ['KkAnalysisMeasure', KkAnalysisMeasure],
  ['KkAnalysisTrajectory', KkAnalysisTrajectory],
  ['KkAnalysisSpacePoint', KkAnalysisSpacePoint],
  ['KkAnalysisBufferArea', KkAnalysisBufferArea],
  ['KkCoverageHeatMap', KkCoverageHeatMap],
  ['KkEnvironmentRain', KkEnvironmentRain],
  ['KkEnvironmentSnow', KkEnvironmentSnow],
  ['KkCoverageLoadEcharts', KkCoverageLoadEcharts],
  ['KkCoveragePanel', KkCoveragePanel],
  ['KkLayerPhotography', KkLayerPhotography],
  ['KkCoverageLayers', KkCoverageLayers],
  ['KkToolsTools', KkToolsTools],
];
