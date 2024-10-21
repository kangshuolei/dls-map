<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-21 18:08:10
-->
<template>
  <div class="appMain">
    <dls-map
      :mapConfig="{
        id: 'dls-map-bufferAarea',
        imageryProvider: dataM.imageryProvider,
        sceneModeNum: 3,
      }"
      ref="dlsMapRef"
      :viewer-width="'100%'"
      :viewer-height="'500px'"
      @ready="onCesiumReady"
    />
    <div class="operation">
      <div class="bufferRadius">
        <div class="title">缓冲半径：</div>
        <el-input @change="handleChangeRadius" v-model="dataM.radiusNum">
          <template #append>公里</template>
        </el-input>
      </div>
      <div>
        <el-button @click="handleBufferPoint" type="primary">点</el-button>
        <el-button @click="handleBufferLine" type="primary">线</el-button>
        <el-button @click="handleBufferPolygon" type="primary">面</el-button>
        <el-button @click="handleBufferRemove" type="primary">清除</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DlsMap } from '@dls-map/components';
import {
  CesiumBufferAnalyze,
  useCesiumEntities,
  useCesiumFlyTo,
  CesiumPlot,
  CesiumScpacePoint,
} from '@dls-map/composables';
import { onMounted, ref, reactive } from 'vue';
import markBlueImg from '../../assets/images/mark-blue.png';
import markRedImg from '../../assets/images/mark-red.png';

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
  coordinates: [
    [39.9042, 116.4074], // 北京市中心
    [39.9176, 116.3973], // 天安门广场
    [39.9087, 116.3843], // 王府井
    [39.9081, 116.3893], // 东单
    [39.9104, 116.4065], // 北京南站
    [39.9138, 116.3825], // 北京站
    [39.9135, 116.353], // 北京大学
    [39.9368, 116.311], // 颐和园
    [39.9097, 116.3724], // 中南海
    [39.9353, 116.3385], // 圆明园
    [39.9075, 116.3972], // 北海公园
    [39.9571, 116.3574], // 北京奥林匹克公园
    [39.9086, 116.4079], // 北京金融街
    [39.8922, 116.318], // 北京动物园
    [39.8756, 116.4194], // 北京西站
    [39.895, 116.4312], // 北京国际机场
    [39.9525, 116.3883], // 北京朝阳
    [39.9416, 116.347], // 北京北站
    [39.8841, 116.412], // 北京昌平
    [39.9043, 116.4749], // 北京大望路
    [39.8482, 116.4284], // 北京西二旗
    [39.9658, 116.3961], // 北京CBD
    [39.9168, 116.4442], // 北京海淀
    [39.919, 116.486], // 北京丰台
    [39.9524, 116.3535], // 北京大兴
    [39.8789, 116.2996], // 北京石景山
    [39.9355, 116.3959], // 北京东城区
    [39.9156, 116.4012], // 北京西城区
  ],
  pointEntityArr: [],
  radiusNum: 1,
  geometry: null,
  drawType: '',
  buffer: null,
});

const { addPointEntity } = useCesiumEntities();

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

//修改 radius
const handleChangeRadius = (value: number) => {
  if (dataM.buffer) {
    dataM.buffer.clear();
    dataM.buffer = null;
  }
  removeSelect();
  drawEndHandler();
};

//标绘结束事件
const drawEndHandler = () => {
  removeSelect();
  let buffer = new CesiumBufferAnalyze(dataM.viewer, dataM.radiusNum * 1000);
  buffer
    .createBuffer(dataM.geometry.geometryPoints, dataM.drawType)
    .then((geometryPoints: any) => {
      const data = CesiumScpacePoint(geometryPoints, dataM.pointEntityArr);
      if (data && data.length) {
        data.forEach((item: any) => {
          item.billboard.image = markRedImg;
        });
      }
    });
  dataM.buffer = buffer;
};

//绘制并生成点的缓冲区
const handleBufferPoint = () => {
  handleBufferRemove();
  //绘制点
  const geometry = new CesiumPlot['Point'](Cesium, dataM.viewer, {
    material: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 0.5)'),
    outlineMaterial: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 1)'),
    outlineWidth: 3,
    isEdit: false,
  });
  //标绘结束事件
  geometry.on('drawEnd', drawEndHandler);
  dataM.drawType = 'Point';
  dataM.geometry = geometry;
};

//绘制并生成线的缓冲区
const handleBufferLine = () => {
  handleBufferRemove();
  //绘制点
  const geometry = new CesiumPlot['Polyline'](Cesium, dataM.viewer, {
    material: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 0.5)'),
    outlineMaterial: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 1)'),
    outlineWidth: 3,
    isEdit: false,
  });
  //标绘结束事件
  geometry.on('drawEnd', drawEndHandler);
  dataM.drawType = 'Polyline';
  dataM.geometry = geometry;
};

//绘制并生成面的缓冲区
const handleBufferPolygon = () => {
  handleBufferRemove();
  //绘制点
  const geometry = new CesiumPlot['Polygon'](Cesium, dataM.viewer, {
    material: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 0.5)'),
    outlineMaterial: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 1)'),
    outlineWidth: 3,
    isEdit: false,
  });
  //标绘结束事件
  geometry.on('drawEnd', drawEndHandler);
  dataM.drawType = 'Polygon';
  dataM.geometry = geometry;
};

//清空缓冲区和其他实例
const handleBufferRemove = () => {
  //清空面
  if (dataM.geometry) {
    dataM.geometry.remove();
    dataM.geometry = null;
  }
  //清空缓冲区
  if (dataM.buffer) {
    dataM.buffer.clear();
    dataM.buffer = null;
  }
  //恢复点
  removeSelect();
};

const removeSelect = () => {
  //恢复点
  if (dataM.pointEntityArr && dataM.pointEntityArr.length) {
    dataM.pointEntityArr.forEach((item: any) => {
      item.billboard.image = markBlueImg;
    });
  }
};

//cesium初始化完成之后
const onCesiumReady = (e: any) => {
  //加载地形
  dataM.viewer = e.viewer;
  dataM.coordinates.forEach((item: any) => {
    const pointEntity = addPointEntity(item[1], item[0], dataM.viewer, {
      type: 'billboard',
      imgUrl: markBlueImg,
    });
    dataM.pointEntityArr.push(pointEntity);
  });
  useCesiumFlyTo(dataM.viewer, [116.4074, 39.9042, 20000]);
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
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .bufferRadius {
      display: flex;
      align-items: center;
      .title {
        min-width: 5rem;
      }
    }
  }
}
</style>
