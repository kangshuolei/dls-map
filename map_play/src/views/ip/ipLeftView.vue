<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue"
import { getIpInfoByName, getIpInfoList } from "@/api/ip/index"
// import { dlsMapMethods, dlsModel, Cesium, dlsDivLabel } from "dls-map"
import positionImg from "@/assets/image/position.png"
import lightSpotImg from "@/assets/image/lightSpot.png"
import { Search } from "@element-plus/icons-vue"
import { bus } from "@/utils/index"
import { wgs84ToGcj02 } from "@/utils/wgs84ToGcj02"

// const dataM = reactive({
//   queryParams: {
//     ip_name: ""
//   },
//   ipOptions: [],
//   ipData: [
//     {
//       ip_name: "218.19.145.32",
//       lat: "23.098086",
//       lon: "113.288846"
//     },
//     {
//       ip_name: "123.160.246.24",
//       lat: "34.774603",
//       lon: "113.544657"
//     },
//     {
//       ip_name: "183.131.124.131",
//       lat: "28.664894",
//       lon: "121.429792"
//     },
//     {
//       ip_name: "59.56.202.135",
//       lat: "24.902359",
//       lon: "118.557540"
//     },
//     {
//       ip_name: "27.223.78.162",
//       lat: "36.127661",
//       lon: "120.412918"
//     },
//     {
//       ip_name: "112.86.228.194",
//       lat: "32.068027",
//       lon: "118.642786"
//     },
//     {
//       ip_name: "122.193.105.210",
//       lat: "31.317372",
//       lon: "120.669691"
//     },
//     {
//       ip_name: "121.29.213.130",
//       lat: "38.026813",
//       lon: "114.425276"
//     },
//     {
//       ip_name: "223.90.113.170",
//       lat: "32.130123",
//       lon: "114.058550"
//     },
//     {
//       ip_name: "182.150.56.209",
//       lat: "30.584406",
//       lon: "104.055603"
//     },
//     {
//       ip_name: "120.236.76.103",
//       lat: "23.029559",
//       lon: "113.762012"
//     },
//     {
//       ip_name: "113.105.128.70",
//       lat: "22.910632",
//       lon: "113.869255"
//     },
//     {
//       ip_name: "222.185.249.138",
//       lat: "31.698416",
//       lon: "119.949048"
//     },
//     {
//       ip_name: "106.38.50.242",
//       lat: "39.930941",
//       lon: "116.409243"
//     },
//     {
//       ip_name: "106.39.89.15",
//       lat: "39.904423",
//       lon: "116.365888"
//     },
//     {
//       ip_name: "117.35.201.69",
//       lat: "32.702888",
//       lon: "108.976824"
//     },
//     {
//       ip_name: "222.168.14.162",
//       lat: "43.882287",
//       lon: "125.317579"
//     },
//     {
//       ip_name: "58.246.185.14",
//       lat: "31.248639",
//       lon: "121.425222"
//     },
//     {
//       ip_name: "60.15.251.250",
//       lat: "47.246456",
//       lon: "127.105286"
//     },
//     {
//       ip_name: "117.172.173.80",
//       lat: "28.807615",
//       lon: "104.671812"
//     },
//     {
//       ip_name: "120.194.97.26",
//       lat: "33.040202",
//       lon: "112.594009"
//     },
//     {
//       ip_name: "111.17.194.51",
//       lat: "36.541011",
//       lon: "116.789915"
//     },
//     {
//       ip_name: "61.164.47.205",
//       lat: "30.212915",
//       lon: "120.222362"
//     },
//     {
//       ip_name: "218.22.55.242",
//       lat: "31.971699",
//       lon: "117.281077"
//     },
//     {
//       ip_name: "122.195.139.235",
//       lat: "32.311791",
//       lon: "119.400065"
//     },
//     {
//       ip_name: "182.34.127.75",
//       lat: "37.529453",
//       lon: "121.298060"
//     },
//     {
//       ip_name: "61.184.160.83",
//       lat: "30.918971",
//       lon: "113.938178"
//     },
//     {
//       ip_name: "61.184.142.170",
//       lat: "30.475674",
//       lon: "115.228868"
//     },
//     {
//       ip_name: "153.37.195.66",
//       lat: "31.023714",
//       lon: "120.809322"
//     },
//     {
//       ip_name: "113.140.47.102",
//       lat: "33.912676",
//       lon: "106.512114"
//     },
//     {
//       ip_name: "117.36.103.58",
//       lat: "34.226935",
//       lon: "108.911922"
//     },
//     {
//       ip_name: "221.237.179.30",
//       lat: "30.683879",
//       lon: "103.959353"
//     },
//     {
//       ip_name: "222.85.145.137",
//       lat: "26.580734",
//       lon: "106.711152"
//     },
//     {
//       ip_name: "221.10.76.188",
//       lat: "30.708768",
//       lon: "103.856606"
//     },
//     {
//       ip_name: "118.122.122.192",
//       lat: "30.577406",
//       lon: "104.057868"
//     },
//     {
//       ip_name: "222.174.209.180",
//       lat: "36.994003",
//       lon: "121.927389"
//     },
//     {
//       ip_name: "118.122.11.50",
//       lat: "27.889022",
//       lon: "102.234424"
//     },
//     {
//       ip_name: "222.240.1.29",
//       lat: "28.217152",
//       lon: "112.886835"
//     },
//     {
//       ip_name: "113.247.233.117",
//       lat: "28.143703",
//       lon: "113.008050"
//     },
//     {
//       ip_name: "58.48.108.97",
//       lat: "30.584180",
//       lon: "114.248756"
//     },
//     {
//       ip_name: "58.247.32.18",
//       lat: "31.202452",
//       lon: "121.447194"
//     },
//     {
//       ip_name: "218.24.156.49",
//       lat: "39.054304",
//       lon: "121.845131"
//     },
//     {
//       ip_name: "223.112.111.78",
//       lat: "31.322943",
//       lon: "120.410726"
//     },
//     {
//       ip_name: "218.6.77.42",
//       lat: "24.487325",
//       lon: "118.192037"
//     },
//     {
//       ip_name: "61.132.132.219",
//       lat: "31.864561",
//       lon: "117.267381"
//     },
//     {
//       ip_name: "58.56.70.210",
//       lat: "36.661705",
//       lon: "117.059010"
//     },
//     {
//       ip_name: "58.222.11.126",
//       lat: "32.420507",
//       lon: "119.900899"
//     },
//     {
//       ip_name: "223.255.10.161",
//       lat: "36.606716",
//       lon: "117.178165"
//     },
//     {
//       ip_name: "101.230.216.174",
//       lat: "31.237054",
//       lon: "121.501253"
//     },
//     {
//       ip_name: "182.51.86.170",
//       lat: "38.042139",
//       lon: "114.508936"
//     },
//     {
//       ip_name: "118.212.95.54",
//       lat: "26.587708",
//       lon: "116.000753"
//     },
//     {
//       ip_name: "113.140.11.6",
//       lat: "34.124378",
//       lon: "108.823843"
//     },
//     {
//       ip_name: "61.163.86.28",
//       lat: "34.768309",
//       lon: "113.661588"
//     },
//     {
//       ip_name: "43.227.139.36",
//       lat: "30.595019",
//       lon: "114.299448"
//     },
//     {
//       ip_name: "222.223.129.191",
//       lat: "40.419762",
//       lon: "117.508420"
//     },
//     {
//       ip_name: "61.143.209.244",
//       lat: "23.061657",
//       lon: "112.470559"
//     },
//     {
//       ip_name: "121.33.250.90",
//       lat: "23.291296",
//       lon: "113.319325"
//     },
//     {
//       ip_name: "183.239.156.86",
//       lat: "22.547901",
//       lon: "114.050447"
//     },
//     {
//       ip_name: "223.197.234.71",
//       lat: "22.350617",
//       lon: "114.184921"
//     },
//     {
//       ip_name: "124.200.33.42",
//       lat: "39.886866",
//       lon: "116.398900"
//     },
//     {
//       ip_name: "61.129.103.84",
//       lat: "31.238105",
//       lon: "121.507090"
//     },
//     {
//       ip_name: "210.22.106.130",
//       lat: "31.338351",
//       lon: "121.476852"
//     },
//     {
//       ip_name: "210.22.133.173",
//       lat: "31.242823",
//       lon: "121.499902"
//     },
//     {
//       ip_name: "114.80.11.235",
//       lat: "31.223092",
//       lon: "121.346969"
//     },
//     {
//       ip_name: "112.0.171.131",
//       lat: "31.901030",
//       lon: "121.195627"
//     },
//     {
//       ip_name: "218.94.115.114",
//       lat: "32.071174",
//       lon: "118.611256"
//     },
//     {
//       ip_name: "218.4.145.122",
//       lat: "31.247911",
//       lon: "120.636208"
//     },
//     {
//       ip_name: "124.207.72.98",
//       lat: "39.979520",
//       lon: "116.325152"
//     },
//     {
//       ip_name: "124.207.29.254",
//       lat: "39.778614",
//       lon: "116.493474"
//     },
//     {
//       ip_name: "202.108.14.240",
//       lat: "39.933266",
//       lon: "116.438252"
//     },
//     {
//       ip_name: "202.189.0.30",
//       lat: "40.044952",
//       lon: "116.350718"
//     },
//     {
//       ip_name: "124.202.213.114",
//       lat: "39.904013",
//       lon: "116.309937"
//     },
//     {
//       ip_name: "221.7.41.73",
//       lat: "36.055757",
//       lon: "103.880763"
//     },
//     {
//       ip_name: "61.185.129.170",
//       lat: "33.040200",
//       lon: "108.247926"
//     },
//     {
//       ip_name: "171.221.219.119",
//       lat: "30.511635",
//       lon: "104.080143"
//     },
//     {
//       ip_name: "218.24.105.82",
//       lat: "41.789128",
//       lon: "123.427812"
//     },
//     {
//       ip_name: "221.239.127.18",
//       lat: "39.095855",
//       lon: "117.068016"
//     },
//     {
//       ip_name: "60.30.29.214",
//       lat: "39.022265",
//       lon: "117.648510"
//     },
//     {
//       ip_name: "220.180.149.100",
//       lat: "32.650042",
//       lon: "115.664010"
//     },
//     {
//       ip_name: "218.92.9.134",
//       lat: "34.592174",
//       lon: "119.193643"
//     },
//     {
//       ip_name: "101.89.64.239",
//       lat: "31.184810",
//       lon: "121.451476"
//     },
//     {
//       ip_name: "115.236.91.15",
//       lat: "30.188122",
//       lon: "120.161371"
//     },
//     {
//       ip_name: "220.179.90.124",
//       lat: "33.181299",
//       lon: "115.801882"
//     },
//     {
//       ip_name: "112.16.145.114",
//       lat: "29.914807",
//       lon: "121.610983"
//     },
//     {
//       ip_name: "116.55.11.80",
//       lat: "25.049480",
//       lon: "101.533472"
//     },
//     {
//       ip_name: "115.231.65.178",
//       lat: "30.363761",
//       lon: "120.382690"
//     },
//     {
//       ip_name: "218.17.24.194",
//       lat: "22.540179",
//       lon: "114.079262"
//     },
//     {
//       ip_name: "219.159.250.154",
//       lat: "25.276074",
//       lon: "110.261500"
//     },
//     {
//       ip_name: "218.200.122.175",
//       lat: "32.654593",
//       lon: "110.779239"
//     },
//     {
//       ip_name: "119.254.252.190",
//       lat: "40.116341",
//       lon: "116.521976"
//     },
//     {
//       ip_name: "112.95.165.126",
//       lat: "22.531514",
//       lon: "113.944183"
//     },
//     {
//       ip_name: "220.189.216.22",
//       lat: "29.970041",
//       lon: "121.748567"
//     },
//     {
//       ip_name: "61.153.7.60",
//       lat: "30.277178",
//       lon: "120.117480"
//     },
//     {
//       ip_name: "120.192.29.247",
//       lat: "36.693537",
//       lon: "117.089938"
//     },
//     {
//       ip_name: "202.97.139.2",
//       lat: "37.883505",
//       lon: "112.538130"
//     },
//     {
//       ip_name: "119.44.61.239",
//       lat: "29.009562",
//       lon: "111.641685"
//     }
//   ],
//   currentIndex: null,
//   dlsDivLabel: null
// })
//
// const ipListContainer = ref(null)
//
// const handleCesiumEvent = () => {
//   let viewer = window.viewer
//   const handle = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
//   handle.setInputAction(function (e: any) {
//     // const position = {
//     //   x: e.position.x / window.boxScale,
//     //   y: e.position.y / window.boxScale
//     // }
//     // const event = {
//     //   position
//     // }
//     console.log("viewer", viewer, e)
//     const pickedFeature = viewer.scene.pick(e.position)
//     console.log("pickedFeature", pickedFeature)
//     const pickedFeatureId = pickedFeature.id
//     console.log("pickedFeatureId", pickedFeatureId)
//     if (pickedFeatureId._name === pickedFeatureId.attribute.weizhi) {
//       const idx: any = dataM.ipOptions.findIndex((item: any) => item.ip_name === pickedFeatureId.attribute.weizhi)
//       if (idx > -1) {
//         dataM.currentIndex = idx
//         scrollToItem(idx)
//       }
//       const entitysArr = window.viewer.entities.values
//       entitysArr.forEach((item: any) => {
//         if (item.billboard) {
//           if (item.name === pickedFeatureId.attribute.weizhi) {
//             item.billboard.image = positionImg
//             item.billboard.scale = 0.5
//           } else {
//             item.billboard.image = lightSpotImg
//             item.billboard.scale = 1
//           }
//         }
//       })
//       if (dataM.dlsDivLabel) {
//         dataM.dlsDivLabel.removeCountryAllDiv()
//       }
//       const jsxContent = `
//           <div class="ip-model-style">
//             ${pickedFeatureId.attribute.weizhi}
//           </div>
//         `
//       let { lon, lat } = dataM.ipOptions[idx]
//       let className = "LayerTitle"
//       let val = {
//         viewer,
//         position: [lon, lat],
//         height: 0,
//         offset: [0, -90],
//         dom: jsxContent,
//         className
//       }
//       dataM.dlsDivLabel = new dlsDivLabel(val)
//
//       // const jsxContent = `
//       //   <div class="ip-model-style">
//       //     ${pickedFeatureId.attribute.weizhi}
//       //   </div>
//       // `
//       // const { promise } = dlsModel({
//       //   title: "标题",
//       //   event: e,
//       //   viewer,
//       //   pixelOffset: [-110, -29],
//       //   data: [
//       //     {
//       //       label: "测试",
//       //       value: "123"
//       //     }
//       //   ],
//       //   style: {
//       //     // backgroundColor: '#ffffff !important',
//       //     // top: screenPosition.y + "px",
//       //     // left: screenPosition.x  + "px",
//       //   },
//       //   htmlContent: jsxContent
//       // })
//       // promise.then((domId: any) => {
//       //   console.log("domId", domId)
//       //   window.modelDomId = domId
//       // })
//       const { position, weizhi } = pickedFeatureId.attribute
//       bus.emit("select_ip_item", { lat: position[1], lon: position[0], ip_name: weizhi })
//     }
//   }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
// }
//
// const remoteMethod = (query: string) => {
//   if (query) {
//     loading.value = true
//     setTimeout(async () => {
//       loading.value = false
//       const res: any = await getIpInfoList({ ip_name: query })
//       dataM.ipOptions = res.data.map((item: any) => {
//         return {
//           value: item.ip_name,
//           label: item.ip_name,
//           lat: item.lat,
//           lon: item.lon
//         }
//       })
//       if (dataM.ipOptions && dataM.ipOptions.length) {
//         dlsMapMethods.useRemoveCesium(["all"], window.viewer)
//         dataM.ipOptions.forEach((item: any) => {
//           const lon = item.lon
//           const lat = item.lat
//           const option = {
//             name: "test",
//             scale: 1,
//             doubleClickPitch: -30, // 双击放大偏转角
//             attribute: {
//               // 属性信息，点击通过getPopupCon接受
//               position: [lon, lat],
//               weizhi: item.value,
//               ischangeimg: false
//             }
//           }
//           dlsMapMethods.addBillboard(lon, lat, lightSpotImg, option, window.viewer)
//         })
//         handleCesiumEvent()
//       }
//     }, 800)
//   } else {
//     dataM.ipOptions = []
//   }
// }
//
// const handleChangeIp = async (data: any, index: any) => {
//   const res: any = await getIpInfoByName({ ip_name: data.ip_name })
//   dataM.currentIndex = index
//   console.log("res.data", res.data)
//   if (res && res.data) {
//     const lonLat: any = wgs84ToGcj02(parseFloat(res.data.lon), parseFloat(res.data.lat))
//     res.data.lon = lonLat[0]
//     res.data.lat = lonLat[1]
//     const entitysArr = window.viewer.entities.values
//     entitysArr.forEach((item: any) => {
//       if (item.billboard) {
//         if (item.name === data.ip_name) {
//           item.billboard.image = positionImg
//           item.billboard.scale = 0.5
//         } else {
//           item.billboard.image = lightSpotImg
//           item.billboard.scale = 1
//         }
//       }
//     })
//
//     if (dataM.dlsDivLabel) {
//       dataM.dlsDivLabel.removeCountryAllDiv()
//     }
//     const jsxContent = `
//           <div class="ip-model-style">
//             ${data.ip_name}
//           </div>
//         `
//     const { lon, lat } = data
//     const className = "LayerTitle"
//     const val = {
//       viewer: window.viewer,
//       position: [lon, lat],
//       height: 0,
//       offset: [0, -90],
//       dom: jsxContent,
//       className
//     }
//     dataM.dlsDivLabel = new dlsDivLabel(val)
//
//     // const option = {
//     //   name: "test",
//     //   scale: 0.4,
//     //   doubleClickPitch: -30, // 双击放大偏转角
//     //   attribute: {
//     //     // 属性信息，点击通过getPopupCon接受
//     //     position: [res.data.lon, res.data.lat],
//     //     weizhi: res.data.ip_name,
//     //     ischangeimg: false,
//     //     ipInfo: res.data
//     //   }
//     // }
//     // dlsMapMethods.addBillboard(res.data.lon, res.data.lat, positionImg, option, window.viewer)
//     dlsMapMethods.useCesiumFlyTo(window.viewer, [res.data.lon, res.data.lat, 2000])
//     bus.emit("select_ip_item", res.data)
//   }
// }
//
// const handleSearchIp = async () => {
//   if (!dataM.queryParams.ip_name || dataM.queryParams.ip_name === "") {
//     mapInitialization()
//     return false
//   }
//   const res: any = await getIpInfoList({ ip_name: dataM.queryParams.ip_name })
//   dataM.ipOptions = res.data.map((item: any) => {
//     const [lng, lat] = wgs84ToGcj02(parseFloat(item.lon), parseFloat(item.lat))
//     return {
//       ip_name: item.ip_name,
//       lat,
//       lon: lng
//     }
//   })
//   if (dataM.ipOptions && dataM.ipOptions.length) {
//     dlsMapMethods.useRemoveCesium(["all"], window.viewer)
//     dataM.ipOptions.forEach((item: any) => {
//       const lon = item.lon
//       const lat = item.lat
//       const option = {
//         name: item.ip_name,
//         scale: 1,
//         doubleClickPitch: -30, // 双击放大偏转角
//         attribute: {
//           // 属性信息，点击通过getPopupCon接受
//           position: [lon, lat],
//           weizhi: item.ip_name,
//           ischangeimg: false
//         }
//       }
//       dlsMapMethods.addBillboard(lon, lat, lightSpotImg, option, window.viewer)
//     })
//     handleCesiumEvent()
//   }
// }
//
// const loading = ref(false)
//
// onMounted(async () => {})
//
// function scrollToItem(index: any) {
//   nextTick(() => {
//     const listContainer: any = ipListContainer.value
//     const item = listContainer.children[index]
//     if (item) {
//       listContainer.scrollTop = item.offsetTop - listContainer.offsetTop - 10
//     }
//   })
// }
//
// const mapInitialization = () => {
//   dataM.currentIndex = null
//   //隐下拉框
//   dataM.ipOptions = []
//   //删除地图实体
//   dlsMapMethods.useRemoveCesium()
//   //隐藏右边框
//   bus.emit("clear_ip_item")
//   //删除弹框
//   const val: any = {
//     viewer: window.viewer,
//     position: [0, 0],
//     height: 0,
//     offset: [0, -90],
//     dom: ``,
//     className: ""
//   }
//   const classModal: any = new dlsDivLabel(val)
//   classModal.removeCountryAllDiv()
//   dlsMapMethods.useCesiumFlyTo(window.viewer, [116.4134, 39.911, 11000000])
// }
//
// const handleClear = () => {
//   mapInitialization()
// }
</script>

<template>
  <div class="left_main">
    <el-input
      placeholder="请输入ip地址"
      clearable
      class="input"
      @clear="handleClear"
      v-model="dataM.queryParams.ip_name"
      @keydown.enter="handleSearchIp"
    >
      <template #suffix>
        <el-icon color="rgba(28, 237, 241, 1)" class="el-input__icon"><search /></el-icon>
      </template>
    </el-input>
    <div ref="ipListContainer" v-if="dataM.ipOptions.length" class="ip-list">
      <div
        :class="{ active: dataM.currentIndex === index }"
        v-for="(item, index) in dataM.ipOptions"
        @click="handleChangeIp(item, index)"
        :key="index"
        class="ip-list-item"
      >
        <div>{{ item.ip_name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.left_main {
  padding: 18px 33px;
  :deep(.el-input__wrapper) {
    background: transparent !important;
    background-image: url("@/assets/image/input_back.png") !important;
    background-size: 100% 100% !important;
    background-repeat: no-repeat !important;
    border: none !important;
  }
  :deep(.el-input__wrapper:hover) {
    box-shadow: none !important;
  }
  :deep(.el-input__wrapper:focus) {
    box-shadow: none !important;
    border: none !important;
  }
  :deep(.el-input) {
    --el-input-border-color: transparent !important;
    --el-input-focus-border: none !important;
    --el-input-focus-border-color: transparent !important;
  }
  .input {
    width: 442px;
  }
  .ip-list {
    background: rgba(45, 84, 128, 0.8);
    width: 442px;
    height: 820px;
    margin-top: 22px;
    padding: 20px;
    overflow-y: auto;
    .active {
      background: rgba(24, 98, 160, 0.9);
    }
    .ip-list-item {
      cursor: pointer;
      color: #ffffff;
      display: flex;
      align-items: center;
      padding: 16px;
      height: 60px;
      border-bottom: 1px solid RGBA(38, 181, 255, 1);
    }
  }
}
</style>
