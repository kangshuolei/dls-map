<!--
 * @Author: Kang
 * @Date: 2024-09-04 09:25:58
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-21 16:31:07
-->
<template>
  <div class="appMain">
    <dls-map
      :mapConfig="{
        id: 'dls-map-space',
        imageryProvider: dataM.imageryProvider,
        sceneModeNum: 3,
      }"
      ref="dlsMapRef"
      :viewer-width="'100%'"
      :viewer-height="'500px'"
      @ready="onCesiumReady"
    />
    <div class="operation">
      <el-button @click="handleSpaceRectangle" type="primary">矩形</el-button>
      <el-button @click="handleSpaceCircle" type="primary">圆</el-button>
      <el-button @click="handleSpacePolygon" type="primary">面</el-button>
      <el-button @click="handleSpaceRemove" type="primary">清除</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DlsMap } from '@dls-map/components';
import {
  CesiumPlot,
  useCesiumEntities,
  useCesiumFlyTo,
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
  geometry: null,
  geometryRectangle: null,
  geometryCircle: null,
  geometryPolygon: null,
});

const { addPointEntity } = useCesiumEntities();

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
});

const drawEndHandler = () => {
  const data = CesiumScpacePoint(
    dataM.geometry.geometryPoints,
    dataM.pointEntityArr
  );
  if (data && data.length) {
    data.forEach((item: any) => {
      item.billboard.image = markRedImg;
    });
  }
};

const editEndHandler = (geometryPoints: any) => {
  const data = CesiumScpacePoint(geometryPoints, dataM.pointEntityArr);
  if (data && data.length) {
    data.forEach((item: any) => {
      item.billboard.image = markRedImg;
    });
  }
};

//绘制矩形查询点
const handleSpaceRectangle = () => {
  //初始话场景
  handleSpaceRemove();
  //绘制矩形
  const geometry = new CesiumPlot['Reactangle'](Cesium, dataM.viewer, {
    material: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 0.5)'),
    outlineMaterial: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 1)'),
    outlineWidth: 3,
    isEdit: false,
  });
  //标绘结束事件
  geometry.on('drawEnd', drawEndHandler);
  // geometry.on('editEnd', editEndHandler);
  dataM.geometry = geometry;
  dataM.geometryRectangle = geometry;
};
//绘制圆的查询点
const handleSpaceCircle = () => {
  //初始话场景
  handleSpaceRemove();
  //绘制点
  const geometry = new CesiumPlot['Circle'](Cesium, dataM.viewer, {
    material: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 0.5)'),
    outlineMaterial: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 1)'),
    outlineWidth: 3,
    isEdit: false,
  });
  //标绘结束事件
  geometry.on('drawEnd', drawEndHandler);
  // geometry.on('editEnd', editEndHandler);
  dataM.geometry = geometry;
  dataM.geometryCircle = geometry;
};
//绘制面的查询点
const handleSpacePolygon = () => {
  //初始话场景
  handleSpaceRemove();
  //绘制面
  const geometry = new CesiumPlot['Polygon'](Cesium, dataM.viewer, {
    material: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 0.5)'),
    outlineMaterial: Cesium.Color.fromCssColorString('rgba(59, 178, 208, 1)'),
    outlineWidth: 3,
    isEdit: false,
  });
  //标绘结束事件
  geometry.on('drawEnd', drawEndHandler);
  // geometry.on('editEnd', editEndHandler);
  dataM.geometry = geometry;
  dataM.geometryPolygon = geometry;
};
//删除绘制的空间点查询
const handleSpaceRemove = () => {
  //清空面
  if (dataM.geometryRectangle) {
    dataM.geometryRectangle.remove();
    dataM.geometryRectangle = null;
  }
  if (dataM.geometryCircle) {
    dataM.geometryCircle.remove();
    dataM.geometryCircle = null;
  }
  if (dataM.geometryPolygon) {
    dataM.geometryPolygon.remove();
    dataM.geometryPolygon = null;
  }
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
  //添加点
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
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
