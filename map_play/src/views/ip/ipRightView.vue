<script setup lang="ts">
// import { onMounted, reactive } from "vue"
// import { bus } from "@/utils/index"
// import titleImg from "@/assets/image/title.png"
// import title1Img from "@/assets/image/title1.png"
// import { getIpInfoByName, getIpInfoList, getPoiTest } from "@/api/ip/index"
// import { dlsMapMethods } from "dls-map"
// import { wgs84ToGcj02 } from "@/utils/wgs84ToGcj02"
//
// const dataM: any = reactive<any>({
//   ipInfo: {},
//   radius: 200,
//   companyList: [
//     // "广州桥一艺术设计有限公司",
//     // "精英汇设计中心",
//     // "广州三晖文化传播有限公司",
//     // "三晖图书仓库",
//     // "煤建图书仓",
//     // "山田设计集团",
//     // "集美山田组公司",
//     // "花果山教育科技发展有限公司",
//     // "广州市红叶图书有限公司",
//     // "诚信装饰",
//     // "广州市海珠区保安服务公司驻新港中队",
//     // "广州新经典发行有限公司",
//     // "广州市三优文化传播有限公司",
//     // "广州市图书批发市场经营管理有限公司",
//     // "华翰文化集团有限公司",
//     // "广州星火",
//     // "广州豪镁装饰设计工程有限公司",
//     // "广州贵阅图书有限公司",
//     // "广州万向文化传播有限公司(广东外贸广场店)"
//   ],
//   isShowRight: false,
//   address: [
//     // "广州桥一艺术设计有限公司",
//     // "精英汇设计中心",
//     // "广州三晖文化传播有限公司",
//     // "三晖图书仓库",
//     // "煤建图书仓",
//     // "山田设计集团",
//     // "集美山田组公司",
//     // "花果山教育科技发展有限公司",
//     // "广州市红叶图书有限公司",
//     // "诚信装饰",
//     // "广州市海珠区保安服务公司驻新港中队",
//     // "广州新经典发行有限公司",
//     // "广州市三优文化传播有限公司",
//     // "广州市图书批发市场经营管理有限公司",
//     // "华翰文化集团有限公司",
//     // "广州星火",
//     // "广州豪镁装饰设计工程有限公司",
//     // "广州贵阅图书有限公司",
//     // "广州万向文化传播有限公司(广东外贸广场店)"
//   ],
//   currentIndex: 0,
//   radiusEntity: null,
//   radiusData: [
//     {
//       label: "200M",
//       value: 200,
//       isCustom: false
//     },
//     {
//       label: "500M",
//       value: 500,
//       isCustom: false
//     },
//     {
//       label: "M",
//       value: "",
//       isCustom: true
//     }
//   ],
//   radiusCustom: ""
// })
//
// const handleGetPoi = async (data: any) => {
//   const [lng, lat] = wgs84ToGcj02(parseFloat(data.lon), parseFloat(data.lat))
//   const res: any = await getPoiTest({
//     ip_name: `${data.lat},${data.lon}`,
//     keywords: "公司",
//     radius: dataM.radius
//   })
//   dataM.companyList = res.data
// }
//
// const handleClickRadius = (value: any, index: any) => {
//   console.log("value", value)
//   dataM.currentIndex = index
//   if (dataM.radiusEntity && !value.isCustom) {
//     dataM.radiusEntity.ellipse.semiMajorAxis = value.value
//     dataM.radiusEntity.ellipse.semiMinorAxis = value.value
//     dataM.radius = value.value
//     handleGetPoi({ lat: dataM.ipInfo.lat, lon: dataM.ipInfo.lon })
//   } else if (dataM.radiusEntity && value.isCustom) {
//     if (dataM.radiusCustom && dataM.radiusCustom !== "") {
//       dataM.radiusEntity.ellipse.semiMajorAxis = dataM.radiusCustom
//       dataM.radiusEntity.ellipse.semiMinorAxis = dataM.radiusCustom
//       dataM.radius = dataM.radiusCustom
//       handleGetPoi({ lat: dataM.ipInfo.lat, lon: dataM.ipInfo.lon })
//     }
//   }
// }
//
// const handleCustomRadius = (data: any) => {
//   console.log("data", data, dataM.radiusCustom)
//   if (dataM.radiusEntity && data.isCustom && dataM.currentIndex === 2) {
//     dataM.radiusEntity.ellipse.semiMajorAxis = dataM.radiusCustom
//     dataM.radiusEntity.ellipse.semiMinorAxis = dataM.radiusCustom
//     dataM.radius = dataM.radiusCustom
//     handleGetPoi({ lat: dataM.ipInfo.lat, lon: dataM.ipInfo.lon })
//   }
// }
// function addCircle(longitude: any, latitude: any, radius: any, color: any, viewerMap = null, name = "Circle") {
//   let viewer = null
//   viewerMap ? (viewer = viewerMap) : (viewer = window.viewer)
//   const entity = viewer.entities.add({
//     position: Cesium.Cartesian3.fromDegrees(longitude, latitude, 1000),
//     ellipse: {
//       height: 0,
//       // perPositionHeight: true,
//       // extrudedHeight: 10, // 挤出高度
//       semiMinorAxis: radius,
//       semiMajorAxis: radius,
//       zIndex: 1,
//       // extrudedHeight: 5,
//       heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
//       // verticalOrigin: Cesium.verticalOrigin.BOTTOM,
//       material: new Cesium.ColorMaterialProperty(Cesium.Color.fromCssColorString(color))
//     }
//   })
//   return entity
// }
//
// onMounted(() => {
//   bus.on("select_ip_item", async (data: any) => {
//     if (dataM.radiusEntity) {
//       window.viewer.entities.remove(dataM.radiusEntity)
//       dataM.radiusEntity = null
//     }
//     const res: any = await getIpInfoByName({ ip_name: data.ip_name })
//     dataM.ipInfo = res.data
//     const lonLat: any = wgs84ToGcj02(parseFloat(dataM.ipInfo.lon), parseFloat(dataM.ipInfo.lat))
//     dataM.ipInfo.lon = lonLat[0]
//     dataM.ipInfo.lat = lonLat[1]
//     if (data && dataM.radiusEntity === null) {
//       dataM.isShowRight = true
//       try {
//         dataM.radiusEntity = addCircle(data.lon, data.lat, dataM.radius, "rgba(77, 225, 247,0.3)", window.viewer)
//       } catch (e) {
//         console.log("dataM.radiusEntity", dataM.radiusEntity)
//       }
//
//       console.log("dataM.radiusEntity", dataM.radiusEntity, window.viewer)
//       handleGetPoi(data)
//     }
//   })
//   bus.on("clear_ip_item", () => {
//     dataM.radiusEntity = null
//     dataM.isShowRight = false
//   })
// })
</script>

<template>
  <div v-if="dataM.isShowRight" class="ip-right-view">
    <div class="ip-info">
      <div class="header">
        <div class="title">
          <img :src="titleImg" />
          <div class="name">IP信息</div>
        </div>
        <img class="ip-info-title-img" :src="title1Img" />
      </div>
      <!--      <div class="ip">{{ dataM.ipInfo.ip_name }}</div>-->
      <div class="info">
        <div class="ip-name">{{ dataM.ipInfo.ip_name }}</div>
        <div class="fist-info">
          <div>洲：{{ dataM.ipInfo.state }}</div>
          <div>国家：{{ dataM.ipInfo.country_name }}</div>
        </div>
        <div>地址：{{ dataM.ipInfo.address }}</div>
        <div>邮编：{{ dataM.ipInfo.zip_code }}</div>
        <div>应用场景：{{ dataM.ipInfo.app_scenarios }}</div>
        <div>所属机构：{{ dataM.ipInfo.organization }}</div>
        <div>运营商：{{ dataM.ipInfo.operator }}</div>
        <div>定位方式：{{ dataM.ipInfo.locate_mode }}</div>
        <div>使用者类型：{{ dataM.ipInfo.user_type }}</div>
        <div>使用者：{{ dataM.ipInfo.user }}</div>
      </div>
    </div>
    <div class="address-info">
      <div class="header">
        <div class="title">
          <img :src="titleImg" />
          <div class="name">位置推荐</div>
        </div>
        <div class="radius">
          <div
            v-for="(item, index) in dataM.radiusData"
            @click="handleClickRadius(item, index)"
            :key="index"
            class="radius-item"
          >
            <div :class="{ active: dataM.currentIndex === index }" class="select">
              <div v-if="dataM.currentIndex === index" class="activeStyle"></div>
            </div>
            <el-input
              @keydown.enter="handleCustomRadius(item)"
              v-if="item.isCustom"
              v-model="dataM.radiusCustom"
              style="width: 63px"
            />
            <div class="num">{{ item.label }}</div>
          </div>
        </div>
      </div>
      <div class="address-list">
        <div class="address-item" v-for="(item, index) in dataM.companyList">
          <div class="serial-number">
            {{ index < 9 ? `0${index + 1}` : index + 1 }}
          </div>
          <div class="company-name">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ip-right-view {
  color: #ffffff;
  margin-top: 81px;
  margin-right: 29px;
  .ip-info {
    margin-bottom: 21px;
    color: #ffffff;
    width: 490px;
    height: 494px;
    background-image: url("@/assets/image/dialog1.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-left: 41px;
    padding-top: 32px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        display: flex;
        gap: 12px;
        .name {
          font-size: 18px;
        }
        img {
          width: 4px;
          height: 17px;
        }
      }
      .ip-info-title-img {
        width: 236px;
        height: 7px;
        margin-right: 60px;
      }
    }
    .ip {
      background: linear-gradient(90deg, rgba(22, 105, 183, 0.5) 0%, rgba(0, 78, 121, 0.5) 100%);
      width: 375px;
      height: 46px;
      display: flex;
      align-items: center;
      //justify-content: center;
      margin-top: 24px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-size: 18px;
      color: #80ccf7;
      padding-left: 24px;
    }
    .info {
      padding-left: 21px;
      margin-top: 17px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-size: 17px;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .ip-name {
        font-size: 20px;
        font-weight: bold;
      }
      .fist-info {
        display: flex;
        gap: 116px;
        //justify-content: space-between;
      }
    }
  }
  .address-info {
    width: 488px;
    height: 337px;

    background-image: url("@/assets/image/dialog2.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 27px 30px 27px 45px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        display: flex;
        gap: 12px;
        .name {
          font-size: 18px;
        }
        img {
          width: 4px;
          height: 17px;
        }
      }
      .radius {
        display: flex;
        align-items: center;
        gap: 12px;
        .radius-item {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          .select {
            width: 10px;
            height: 10px;
            border: 1px solid #35a0de;
            display: flex;
            align-items: center;
            justify-content: center;
            .activeStyle {
              width: 4px;
              height: 4px;
              background: #35a0de;
            }
          }
          .num {
          }
        }
      }
    }
    .address-list {
      //margin-top: 10px;
      height: 228px;
      overflow-y: auto;
      //padding: 23px 0;
      margin-top: 23px;
      //gap: 17px;
      //display: flex;
      //flex-direction: column;
      .address-item:last-child {
        margin-bottom: 0px !important;
      }
      .address-item {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        display: flex;
        align-items: center;
        margin-bottom: 17px;
        width: 363px;
        height: 32px;
        background: linear-gradient(90deg, rgba(22, 105, 183, 0.5) 0%, rgba(0, 78, 121, 0.5) 100%);
        border-radius: 6px;
        .serial-number {
          color: rgba(0, 228, 255, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 31px;
          min-height: 31px;
          //background: rgba(0, 186, 255, 1);
          background: radial-gradient(circle, rgba(0, 186, 255, 0), rgba(0, 186, 255, 1));
          border-radius: 50%;
          font-weight: normal;
          font-size: 14px;
          font-family: Alibaba PuHuiTi 3;
        }
        .company-name {
          margin-left: 18px;
        }
      }
    }
  }
}
</style>
