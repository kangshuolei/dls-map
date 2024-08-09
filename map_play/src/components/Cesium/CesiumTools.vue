<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue"
import BackCenterImg from "@/assets/image/backCenter.png"
import ZoomInImg from "@/assets/image/zoomIn.png"
import ZoomOutImg from "@/assets/image/zoomOut.png"
import PitchDegreesImg from "@/assets/image/pitchDegrees.png"
import LineImg from "@/assets/image/line.svg"
import LayersImg from "@/assets/image/layers.png"
import EarthImg from "@/assets/image/earth.png"
import ClearImg from "@/assets/image/clear.svg"
import { dlsMapMethods, Cesium } from "dls-map"

const dataM = reactive({
  toolsData: [
    {
      img: ZoomInImg,
      name: "ZoomIn",
      methods: () => handleToolZoomIn,
      content: "放大"
    },
    {
      img: ZoomOutImg,
      name: "ZoomOut",
      methods: () => handleToolZoomOut,
      content: "缩小"
    },
    {
      img: LayersImg,
      name: "Layers",
      methods: null,
      content: "切换图层"
    },
    {
      img: EarthImg,
      name: "Earth",
      methods: () => handleToolEarth,
      content: "切换视角"
    },
    {
      img: BackCenterImg,
      name: "BackCenter",
      methods: () => handleToolBackCenter,
      content: "中心点"
    },
    {
      img: PitchDegreesImg,
      name: "PitchDegrees",
      methods: () => handleToolPitchDegrees,
      content: "倾斜角"
    },
    {
      img: LineImg,
      name: "Line",
      methods: () => handleToolLine,
      content: "测距"
    },
    {
      img: ClearImg,
      name: "Clear",
      methods: () => handleToolClear,
      content: "清除"
    }
  ],
  pitchValue: -11,
  lineEntity: null
})
const tooltip = ref(null)
const modes = [
  {
    mode: Cesium.SceneMode.SCENE3D,
    type: "3d"
  },
  {
    mode: Cesium.SceneMode.SCENE2D,
    type: "2d"
  },
  {
    mode: Cesium.SceneMode.COLUMBUS_VIEW,
    type: "2.5d"
  }
]

onMounted(() => {
  nextTick(() => {
    const interval = setInterval(() => {
      if (window.viewer) {
        clearInterval(interval)
        try {
          const viewer = window.viewer
          const camera = viewer.camera
          viewer.scene.camera.moveEnd.addEventListener(function () {
            const pitch = camera.pitch
            dataM.pitchValue = Cesium.Math.toDegrees(pitch).toFixed(0)
          })
        } catch (error) {
          clearInterval(interval)
        }
      }
    }, 100)
  })
})

const handleImg = (data: any) => {
  if (data.methods) {
    data.methods()(data)
  }
}

const handleSearchPitchDegree = (value: any) => {
  dlsMapMethods.handlePitchDegrees(window.viewer, value)
}

// 获取当前模式索引
function getCurrentModeIndex() {
  const currentMode = window.viewer.scene.mode
  return modes.findIndex((item: any) => item.mode === currentMode)
}
const handleToolZoomIn = () => {
  const camera = window.viewer.camera
  camera.zoomIn(1000000)
}
const handleToolZoomOut = () => {
  const camera = window.viewer.camera
  camera.zoomOut(1000000)
}
const handleToolLayers = (value: any) => {
  console.log("value", value)
  window.viewer.imageryLayers.removeAll()
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmYThlOTk4Mi1iY2QyLTRlZTItODJjOS0zOWFmOTA5ZTZlZjAiLCJpZCI6NDUyNTUsImlhdCI6MTcyMTI5NDMyNX0.k0XVbL506OHCyG7gI3KTdmMn3wwTYig3k6hJnWuvJag"
  switch (value) {
    case 1:
      window.viewer.imageryLayers.addImageryProvider(
        new Cesium.UrlTemplateImageryProvider({
          // 内网-电子图
          url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
          layer: "tdtVecBasicLayer",
          style: "default",
          format: "image/png",
          tileMatrixSetID: "GoogleMapsCompatible"
        })
      )
      break
    case 2:
      window.viewer.imageryLayers.addImageryProvider(
        new Cesium.UrlTemplateImageryProvider({
          // 内网-电子图
          url: "https://webst02.is.autonavi.com/appmaptile?style=10&x={x}&y={y}&z={z}",
          layer: "tdtVecBasicLayer",
          style: "default",
          format: "image/png",
          tileMatrixSetID: "GoogleMapsCompatible"
        })
      )
      break
  }
}
const handleToolEarth = () => {
  // 获取当前模式索引
  let currentModeIndex = getCurrentModeIndex()
  // 切换到下一个模式
  currentModeIndex = (currentModeIndex + 1) % modes.length
  const type = modes[currentModeIndex].type
  dlsMapMethods.useSwitchViewPoint(type, window.viewer)
}
const handleToolBackCenter = () => {
  dlsMapMethods.useCesiumFlyTo(window.viewer, [116.4134, 39.911, 11000000])
}
const handleToolPitchDegrees = () => {}
const handleToolLine = () => {
  dataM.lineEntity = dlsMapMethods.DrawSoildLine(window.viewer, "lines", [255, 10, 255], 5)
}
const handleToolClear = () => {
  window.viewer.dataSources.removeAll()
  // const dataSourcesList = window.viewer.dataSources._dataSources
  // for (let i = 0; i < dataSourcesList.length; i++) {
  //   if (dataSourcesList[i]._name === "measureLine") {
  //     window.viewer.dataSources.remove(dataSourcesList[i])
  //   }
  //   if (dataSourcesList[i]._name === "MyLines") {
  //     window.viewer.dataSources.remove(dataSourcesList[i])
  //   }
  // }
}
</script>

<template>
  <div class="cesium-tools-main">
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
</template>

<style>
.map-type {
  cursor: pointer !important;
}
</style>
<style scoped lang="scss">
.cesium-tools-main {
  width: 490px;
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
    padding: 0 18px;
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
</style>
