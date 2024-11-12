<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-12 17:40:49
-->
<template>
  <div class="appMain">
    <dls-map
      :mapConfig="{
        id: 'dls-map-plot',
        imageryProvider: dataM.imageryProvider,
        sceneModeNum: 3,
      }"
      :viewer-width="'100%'"
      :viewer-height="'500px'"
      ref="dlsMapRef"
      @ready="onCesiumReady"
    />
    <!-- 标绘列表 -->
    <div class="plot_list">
      <div>
        <div
          draggable
          @dragstart="dragStart($event, item)"
          @dragend="dragEnd($event, item)"
          class="dataBox"
          :key="index"
          v-for="(item, index) in dataM.iconData"
        >
          <img :src="item.icon" />
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
    <!-- 操作列表 -->
    <div class="operation">
      <el-button @click="handleCloseEdit" type="primary">关闭编辑</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DlsMap } from '@dls-map/components';
import {
  useCesiumEntities,
  CesiumEditEntity,
  useCesiumFlyTo,
} from '@dls-map/composables';
import CoorTransform from '@dls-map/utils/cesiumUtil/CoordTransform';
import { onMounted, ref, reactive } from 'vue';
import MarkBlue from '../../assets/images/mark-blue.png';
import HuaXiangJi from '../../assets/images/huaxiangji.png';

const { addPointEntity } = useCesiumEntities();
const dlsMapRef = ref(null);
const dataM = reactive<any>({
  imageryProvider: {
    url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    layer: 'tdtVecBasicLayer',
    style: 'default',
    format: 'image/png',
    tileMatrixSetID: 'GoogleMapsCompatible',
  },
  coords: {},
  currentIndex: null,
  viewer: null,
  iconData: [
    { title: '图标平移1', type: 'billboard', url: MarkBlue, icon: MarkBlue },
    { title: '图标平移2', type: 'billboard', url: MarkBlue, icon: MarkBlue },
    {
      title: '模型旋转',
      type: 'model',
      url: '../../assets/model/huaxiangji.glb',
      icon: HuaXiangJi,
    },
  ],
  editB3dm: null,
});

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

//关闭编辑
const handleCloseEdit = () => {
  dataM.editB3dm && dataM.editB3dm.destroy();
};

//在拖拽开始时，通过dragStart函数将当前拖拽的元素保存到dragItem变量中，
// 并将拖拽的数据以字符串形式存储在数据传输对象中。
function dragStart(event: any, data: any) {
  // alert('1');
  console.log('拖拽开始', event, data);
}

//在拖拽结束时，通过dragEnd函数将dragItem变量重置为null。
function dragEnd(event: any, data: any) {
  const latLon = CoorTransform.getLatLonFromScreenPosition(
    dataM.viewer,
    event.layerX,
    event.layerY
  );
  let dataArrow = {
    alt: 10,
    lat: latLon.latitude,
    lng: latLon.longitude,
  };
  dataM.editB3dm && dataM.editB3dm.destroy();
  if (data.type === 'billboard') {
    const arrowEntity = addPointEntity(
      dataArrow.lng,
      dataArrow.lat,
      dataM.viewer,
      {
        type: 'billboard',
        imgUrl: data.url,
      }
    );
    dataM.editB3dm = new CesiumEditEntity(dataM.viewer, arrowEntity, {
      radiusNum: 100,
      arrowLength: 120,
      dStep: 1,
      rStep: 1,
    });
    dataM.editB3dm.editTranslation();
  } else if (data.type === 'model') {
    const arrowEntity = addPointEntity(
      dataArrow.lng,
      dataArrow.lat,
      dataM.viewer,
      {
        type: 'model',
        modelUrl: data.url,
        modelScale: 20,
      }
    );
    dataM.editB3dm = new CesiumEditEntity(dataM.viewer, arrowEntity, {
      radiusNum: 100,
      arrowLength: 120,
      dStep: 1,
      rStep: 1,
    });
    dataM.editB3dm.editRotation();
  }
}

//cesium初始化完成之后
const onCesiumReady = (e: any) => {
  dataM.viewer = e.viewer;
  useCesiumFlyTo(dataM.viewer, [116.4134, 39.911, 1000]);
};
</script>

<style lang="less" scoped>
.appMain {
  width: 100%;
  height: 100%;
  .operation {
    position: absolute;
    z-index: 1;
    color: #ffffff;
    top: 0;
    right: 0;
    width: auto;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .plot_list {
    cursor: pointer;
    position: absolute;
    z-index: 1;
    color: #ffffff;
    top: 0.5rem;
    left: 0.5rem;
    width: auto;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    // height: 5rem;
    .dataBox {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      img {
        width: 24px;
        height: 32px;
      }
    }
  }
}
</style>
