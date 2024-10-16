<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-16 15:03:04
-->
<template>
  <div class="appMain">
    <dls-map
      :mapConfig="{
        id: 'dls-map-layer-tools',
        imageryProvider: dataM.imageryProvider,
        sceneModeNum: 3,
      }"
      ref="dlsMapRef"
      :viewer-width="'100%'"
      :viewer-height="'500px'"
      @ready="onCesiumReady"
    />
    <div class="operation">
      <el-tooltip
        v-for="(item, index) in dataM.toolsData"
        :key="index"
        class="box-item"
        effect="light"
        ref="tooltip"
        :content="item.content"
      >
        <div class="tools-item">
          <img @click="handleImg(item)" :src="item.img" />
        </div>
        <template #content>
          <div v-if="item.name === 'Layers'">
            <div class="map_item">
              <div @click="handleToolLayers(1)" class="map-type">卫星图</div>
              <div @click="handleToolLayers(2)" class="map-type">电子图</div>
            </div>
          </div>
          <div v-if="item.name === 'PitchDegrees'">
            <el-input
              v-model="dataM.pitchValue"
              @keydown.enter="handleSearchPitchDegree(dataM.pitchValue)"
              placeholder="请输入倾斜角"
            />
          </div>
        </template>
      </el-tooltip>
    </div>
    <div class="eye">
      <dls-map-eye
        :base-map="{ width: '200px', height: '150px' }"
        :marst-viewer="dataM.viewer"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  DrawSoildLine,
  handlePitchDegrees,
  useCesiumFlyTo,
  useSwitchViewPoint,
} from '@dls-map/composables';
import { DlsMap, DlsMapEye } from '@dls-map/components';
import { onMounted, ref, reactive } from 'vue';

import BackCenterImg from '../../assets/images/tools/backCenter.png';
import ZoomInImg from '../../assets/images/tools/zoomIn.png';
import ZoomOutImg from '../../assets/images/tools/zoomOut.png';
import PitchDegreesImg from '../../assets/images/tools/pitchDegrees.png';
import LineImg from '../../assets/images/tools/line.svg';
import LayersImg from '../../assets/images/tools/layers.png';
import EarthImg from '../../assets/images/tools/earth.png';
import ClearImg from '../../assets/images/tools/clear.svg';

const dlsMapRef = ref(null);
const dataM = reactive<any>({
  imageryProvider: {
    url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    layer: 'tdtVecBasicLayer',
    style: 'default',
    format: 'image/png',
    tileMatrixSetID: 'GoogleMapsCompatible',
  },
  viewer: null,
  toolsData: [
    {
      img: ZoomInImg,
      name: 'ZoomIn',
      methods: () => handleToolZoomIn,
      content: '放大',
    },
    {
      img: ZoomOutImg,
      name: 'ZoomOut',
      methods: () => handleToolZoomOut,
      content: '缩小',
    },
    {
      img: LayersImg,
      name: 'Layers',
      methods: null,
      content: '切换图层',
    },
    {
      img: EarthImg,
      name: 'Earth',
      methods: () => handleToolEarth,
      content: '切换视角',
    },
    {
      img: BackCenterImg,
      name: 'BackCenter',
      methods: () => handleToolBackCenter,
      content: '中心点',
    },
    {
      img: PitchDegreesImg,
      name: 'PitchDegrees',
      methods: () => handleToolPitchDegrees,
      content: '倾斜角',
    },
    {
      img: LineImg,
      name: 'Line',
      methods: () => handleToolLine,
      content: '测距',
    },
    {
      img: ClearImg,
      name: 'Clear',
      methods: () => handleToolClear,
      content: '清除',
    },
  ],
  pitchValue: -11,
  lineEntity: null,
});

const tooltip = ref(null);
const modes: any = [
  {
    mode: Cesium.SceneMode.SCENE3D,
    type: '3d',
  },
  {
    mode: Cesium.SceneMode.SCENE2D,
    type: '2d',
  },
  {
    mode: Cesium.SceneMode.COLUMBUS_VIEW,
    type: '2.5d',
  },
];

const handleSearchPitchDegree = (value: any) => {
  handlePitchDegrees(dataM.viewer, value);
};

// 获取当前模式索引
function getCurrentModeIndex() {
  const currentMode = dataM.viewer.scene.mode;
  return modes.findIndex((item: any) => item.mode === currentMode);
}
const handleToolZoomIn = () => {
  const camera = dataM.viewer.camera;
  camera.zoomIn(1000000);
};
const handleToolZoomOut = () => {
  const camera = dataM.viewer.camera;
  camera.zoomOut(1000000);
};
const handleToolLayers = (value: any) => {
  dataM.viewer.imageryLayers.removeAll();
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmYThlOTk4Mi1iY2QyLTRlZTItODJjOS0zOWFmOTA5ZTZlZjAiLCJpZCI6NDUyNTUsImlhdCI6MTcyMTI5NDMyNX0.k0XVbL506OHCyG7gI3KTdmMn3wwTYig3k6hJnWuvJag';
  switch (value) {
    case 1:
      dataM.viewer.imageryLayers.addImageryProvider(
        new Cesium.UrlTemplateImageryProvider({
          // 内网-电子图
          url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
        })
      );
      break;
    case 2:
      dataM.viewer.imageryLayers.addImageryProvider(
        new Cesium.UrlTemplateImageryProvider({
          // 内网-电子图
          url: 'https://webst02.is.autonavi.com/appmaptile?style=10&x={x}&y={y}&z={z}',
        })
      );
      break;
  }
};
const handleToolEarth = () => {
  // 获取当前模式索引
  let currentModeIndex = getCurrentModeIndex();
  // 切换到下一个模式
  currentModeIndex = (currentModeIndex + 1) % modes.length;
  const type = modes[currentModeIndex].type;
  console.log('type', type);
  useSwitchViewPoint(type, dataM.viewer);
};
const handleToolBackCenter = () => {
  useCesiumFlyTo(dataM.viewer, [116.4134, 39.911, 11000000]);
};
const handleToolPitchDegrees = () => {};
const handleToolLine = () => {
  dataM.lineEntity = DrawSoildLine(dataM.viewer, 'lines', [255, 10, 255], 5);
};
const handleToolClear = () => {
  dataM.viewer.dataSources.removeAll();
};

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

const handleImg = (data: any) => {
  if (data.methods) {
    data.methods()(data);
  }
};

//cesium初始化完成之后
const onCesiumReady = (e: any) => {
  //加载地形
  dataM.viewer = e.viewer;
  console.log('执行了', e.viewer);
};
</script>

<style lang="less" scoped>
.appMain {
  width: 100%;
  height: 100%;
  .eye {
    position: absolute;
    z-index: 9999;
    color: #ffffff;
    bottom: 1rem;
    right: 1rem;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .operation {
    position: absolute;
    z-index: 1;
    color: #ffffff;
    top: 10px;
    right: 10px;
    width: 390px;
    //padding: 9px 0;
    height: 43px;
    background: rgba(45, 84, 128, 0.8);
    display: flex;
    align-items: center;
    .tools-item:not(:last-child) {
      border-right: rgba(255, 255, 255, 0.5) 1px solid;
    }
    :deep(.el-popper.is-light) {
      cursor: pointer !important;
      .map_item {
        cursor: pointer !important;
        .map-type {
          cursor: pointer !important;
        }
      }
    }

    .tools-item {
      cursor: pointer;
      display: flex;
      padding: 0 12px;
      .map_item {
        cursor: pointer !important;
        .map-type {
          cursor: pointer !important;
        }
      }
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>
