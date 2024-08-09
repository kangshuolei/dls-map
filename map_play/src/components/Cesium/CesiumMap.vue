<template>
  <div class="appMain">
    <dlsMap
      :mapConfig="{
        id: 'dlsMapContainer',
        // mapIndex: 3,
        imageryProvider: dataM.imageryProvider,
        // defaultAccessToken: dataM.defaultAccessToken,
        sceneMode: 2,
        navigation: {
          enableDistanceLegend: true,
          enableCompassOuterRing: false,
          enableCompass: false,
          enableZoomControls: false
        }
      }"
      ref="dlsMapContainer"
    />
    <!--    <div class="coords">-->
    <!--      经度：{{ dataM.coords.longitude }}，-->
    <!--      纬度：{{ dataM.coords.latitude }}，-->
    <!--      海拔：{{ dataM.coords.altitude }}m，-->
    <!--      高度：{{ dataM.coords.height }}m，-->
    <!--      方向：{{ dataM.coords.cameraHeading }}°，-->
    <!--      俯仰角：{{ dataM.coords.pitchDegrees }}°，-->
    <!--      层级：{{ dataM.coords.zoomLevel }}-->
    <!--    </div>-->
    <!--    <div class="drawLine" @click="handleDrawLine">绘制线段</div>-->
    <!--    <div class="backCenter" @click="handleBackCenter">回到中心点</div>-->
    <!--    <div class="setPitchDegrees" @click="handleSetPitchDegrees">仰角设置</div>-->
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, watch, getCurrentInstance } from "vue"
import { dlsModel, dlsDivLabel, Cesium, dlsMap } from "dls-map"
const dlsMapContainer = ref()
const dataM = reactive({
  viewer: null,
  coords: {},
  imageryProvider: new Cesium.UrlTemplateImageryProvider({
    // 内网-电子图
    url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
    layer: "tdtVecBasicLayer",
    style: "default",
    format: "image/png",
    tileMatrixSetID: "GoogleMapsCompatible"
  })
})

// const dlsModel = getCurrentInstance().appContext.config.globalProperties.$dlsModel
// const dlsDivLabel = getCurrentInstance().appContext.config.globalProperties.$dlsDivLabel

onMounted(() => {
  const {
    viewer,
    useRemoveCesium,
    useSwitchMap,
    useSwitchViewPoint,
    useLoadTerrain,
    listenToMouseMovement,
    coords,
    addBillboard,
    addCircle,
    DrawSoildLine
  } = dlsMapContainer.value
  // let mapContent = document.getElementById("dlsMapContainer")
  // mapContent.style.transform = "scale(0.712037) translate(-50%, -50%)"
  // mapContent.style.width = "1920px"
  // mapContent.style.height = "1080px"
  // mapContent.style.left = "50%"
  // mapContent.style.top = "50%"
  // mapContent.style.transformOrigin = "0 0"
  dataM.viewer = viewer
  window.dlsMapRef = dlsMapContainer.value
  // viewer.scene.globe.enableLighting = true
  // viewer.scene.globe.depthTestAgainstTerrain = true
  window.viewer = viewer
  // viewer.imageryLayers.addImageryProvider(
  //   new Cesium.UrlTemplateImageryProvider({
  //     // 内网-电子图
  //     url: "/tile/basemap/{z}/{x}/{y}.jpg",
  //     style: "default",
  //     name: "basemap",
  //     format: "image/jpg"
  //   })
  // )
  //删除地图的图层
  // useRemoveCesium(["all"], viewer)
  //切换图层
  // useSwitchMap(1, viewer)
  //切换视角
  // useSwitchViewPoint('3d', viewer)
  //加载地形
  // useLoadTerrain([
  //   {
  //     url: 'http://192.168.0.200:9005/map/terrain',
  //     range: [],
  //     type: 'global'
  //   },
  //   {
  //     url: 'http://192.168.0.200:9005/map/terrain/terrain_beijing',
  //     range: [112.3242, 123.574, 33.8378, 45.1757],
  //     type: 'region'
  //   },
  //   {
  //     url: 'http://192.168.0.200:9005/map/terrain/terrain_ocean',
  //     range: [108, 123, 0.097, 21.466],
  //     type: 'region'
  //   }
  // ], 1000000, viewer)
  // var datalist = [
  //   { name: "河北省", xzbm: 130000, LonLat: { lon: 115.1305725, lat: 36.54583368 }, key: 1 },
  //   { name: "山西省", xzbm: 140000, LonLat: { lon: 112.2897504, lat: 37.57231628 }, key: 1 },
  //   { name: "天津省", xzbm: 120000, LonLat: { lon: 117.4309148, lat: 40.00141766 }, key: 1 },
  //   { name: "河南省", xzbm: 410000, LonLat: { lon: 113.6143889, lat: 33.8832028 }, key: 1 },
  //   { name: "山东省", xzbm: 370000, LonLat: { lon: 118.1501521, lat: 36.35357739 }, key: 1 },
  //   { name: "重庆市", xzbm: 500000, LonLat: { lon: 107.8808439, lat: 30.04807106 }, key: 0 },
  //   { name: "湖北省", xzbm: 420000, LonLat: { lon: 112.2687885, lat: 30.9760881 }, key: 0 },
  //   { name: "湖南省", xzbm: 430000, LonLat: { lon: 111.7084209, lat: 27.60697667 }, key: 0 },
  //   { name: "陕西省", xzbm: 610000, LonLat: { lon: 108.8691613, lat: 35.19507602 }, key: 0 }
  // ]
  // datalist.forEach((row) => {
  //   let LonLat = row.LonLat
  //   let lon = LonLat.lon,
  //     lat = LonLat.lat
  //   let imgUrl = row.key == 1 ? "/img/blue1.png" : "/img/red1.png"
  //   let option = {
  //     name: "test",
  //     scale: 1,
  //     doubleClickPitch: -30, // 双击放大偏转角
  //     attribute: {
  //       // 属性信息，点击通过getPopupCon接受
  //       position: [lon, lat],
  //       weizhi: row.name,
  //       ischangeimg: false
  //     },
  //     popContent: `<div class="popstyle">
  //     <h3>LED大屏信息</h3>
  //     <p><span class="label">所属地：</span>${row.name}</p>
  //     <p><span class="label">经纬度：</span>${lon},${lat}</p>
  //     </div>`
  //   }
  //   addBillboard(lon, lat, imgUrl, option, viewer)
  // })
  // //获取 当前鼠标的经纬度，当前的相机高度，当前点击海拔，当前俯仰角
  // listenToMouseMovement(viewer)
  watch(
    coords,
    (newValue, oldValue) => {
      dataM.coords = newValue
    },
    { deep: true }
  )
  // const handle = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
  // //鼠标左键点击
  // const jsxContent = `
  //   <div class="jsxMain">
  //     This is a JSX content!
  //   </div>
  // `
  // handle.setInputAction(function (e) {
  //   dlsModel({
  //     title: "标题",
  //     event: e,
  //     viewer,
  //     data: [
  //       {
  //         label: "测试",
  //         value: "123"
  //       }
  //     ],
  //     style: {
  //       // backgroundColor: '#ffffff !important',
  //       // top: screenPosition.y + "px",
  //       // left: screenPosition.x  + "px",
  //     },
  //     htmlContent: jsxContent
  //   })
  // }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
  // //根据经纬度添加弹框
  // //添加岛屿的名称标签
  // let tooltip = `
  //   <div class="isLandMain">
  //     <span class="isLandName">测试</span>
  //   </div>
  // `
  // let className = "LayerTitle"
  // let val = {
  //   viewer,
  //   position: [115.1305725, 36.54583368],
  //   height: 0,
  //   offset: [0, -90],
  //   dom: tooltip,
  //   className
  // }
  // new dlsDivLabel(val)
  //
  // //生成圆
  // addCircle(115.1305725, 36.54583368, 500000, "rgba(255, 0, 0, 0.5)", viewer)

  dlsMapContainer.value.useCesiumFlyTo(dataM.viewer, [116.4134, 39.911, 11000000])
})

const handleDrawLine = () => {
  dlsMapContainer.value.DrawSoildLine(dataM.viewer, "lines", [255, 10, 255], 5)
}

const handleBackCenter = () => {
  dlsMapContainer.value.useCesiumFlyTo(dataM.viewer, [116.4134, 39.911, 11000000])
}

const handleSetPitchDegrees = () => {
  dlsMapContainer.value.handlePitchDegrees(dataM.viewer, -11)
}
</script>

<style>
:deep(.dls-model-main) {
  background: #ffffff !important;
}
.appMain {
  width: 100%;
  height: 100%;
  .coords {
    position: absolute;
    z-index: 9999;
    color: #ffffff;
    bottom: 0;
    right: 0;
    width: auto;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .drawLine {
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    color: #ffffff;
    top: 0;
    right: 0;
    width: auto;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .backCenter {
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    color: #ffffff;
    top: 0;
    right: 80px;
    width: auto;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .setPitchDegrees {
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    color: #ffffff;
    top: 0;
    right: 192px;
    width: auto;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
