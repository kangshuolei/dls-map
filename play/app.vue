<template>
  <div class="appMain">
    <DlsMap
      :mapConfig="{
        id: 'dls-map-id',
        imageryProvider: dataM.imageryProvider,
        sceneMode: 3,
      }"
      ref="dlsMapRef"
      @cesium-ready="onCesiumReady"
    />
    <div class="coords">
      经度：{{ dataM.coords.longitude }}， 纬度：{{ dataM.coords.latitude }}，
      海拔：{{ dataM.coords.altitude }}m， 高度：{{ dataM.coords.height }}m，
      方向：{{ dataM.coords.cameraHeading }}°， 俯仰角：{{
        dataM.coords.pitchDegrees
      }}°， 层级：{{ dataM.coords.zoomLevel }}
    </div>
    <div class="plot" @click="handleCesiumPlot">标绘</div>
    <div class="drawLine" @click="handleDrawLine">绘制线段</div>
    <div class="backCenter" @click="handleBackCenter">回到中心点</div>
    <div class="setPitchDegrees" @click="handleSetPitchDegrees">仰角设置</div>
  </div>
</template>

<script lang="ts" setup>
import { Button, DlsMap } from '@dls-map/components';
import wallLine from '/static/images/wall_line.png';
import ArrowImg from '/static/images/arrowImg.png';
import {
  useSwitchMap,
  useCesiumCoord,
  useCesiumFlyTo,
  DlsDivLabel,
  CesiumPlot,
  addSnowScene,
  addRainScene,
  addLine,
  addWall,
  CesiumUseEcharts,
  CesiumHeatMap,
  CesiumBufferAnalyze,
  CesiumTrack,
} from '@dls-map/composables';
import { onMounted, ref, reactive, watch } from 'vue';

const { listenToMouseMovement, coords } = useCesiumCoord();
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
  viewer: null,
  dlsDivLabel: null,
});

watch(coords, (newValue) => {
  dataM.coords = newValue;
});

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
  // console.log(dataM.imageryProvider);
});
const handleDrawLine = () => {
  // dlsMapContainer.value.DrawSoildLine(dataM.viewer,'lines', [255, 10, 255], 5)
};

const handleCesiumPlot = () => {
  const geometry = new CesiumPlot.Point(Cesium, dataM.viewer, {
    pixelSize: 10,
  });
  console.log('geometry', geometry);
};

const handleBackCenter = () => {
  useCesiumFlyTo(dataM.viewer, [116.4134, 39.911, 11000000]);
};

const handleSetPitchDegrees = () => {
  // dlsMapContainer.value.handlePitchDegrees(dataM.viewer,-11)
};
//cesium初始化完成之后
const onCesiumReady = (e: any) => {
  dataM.viewer = e;
  // useSwitchMap({},e)
  listenToMouseMovement(e);
  if (dataM.dlsDivLabel) {
    dataM.dlsDivLabel.removeCountryAllDiv('.LayerTitle');
  }
  const jsxContent = `
          <div class="ip-model-style">
            123
          </div>
        `;
  let className = 'LayerTitle';
  let val = {
    viewer: dataM.viewer,
    position: [116.4134, 39.911],
    height: 0,
    offset: [0, -90],
    dom: jsxContent,
    className,
  };
  dataM.dlsDivLabel = new DlsDivLabel(val);
  // addRainScene(dataM.viewer);
  //生成一个线段
  addLine([-115.0, 37.0, -115.0, 32.0], Cesium.Color.RED, dataM.viewer, {});
  //生成一个墙
  addWall(
    dataM.viewer,
    [
      -115.0, 37.0, 100000, -115.0, 32.0, 100000, -107.0, 33.0, 100000, -115.0,
      37.0, 100000,
    ],
    '#00FFFF',
    0.7,
    1
  );
  //生成一个echarts
  const chinaGeoCoordMap = {
    黑龙江: [127.9688, 45.368],
    内蒙古: [110.3467, 41.4899],
    吉林: [125.8154, 44.2584],
    北京市: [116.4551, 40.2539],
    辽宁: [123.1238, 42.1216],
    河北: [114.4995, 38.1006],
    天津: [117.4219, 39.4189],
    山西: [112.3352, 37.9413],
    陕西: [109.1162, 34.2004],
    甘肃: [103.5901, 36.3043],
    宁夏: [106.3586, 38.1775],
    青海: [101.4038, 36.8207],
    新疆: [87.9236, 43.5883],
    西藏: [91.11, 29.97],
    四川: [103.9526, 30.7617],
    重庆: [108.384366, 30.439702],
    山东: [117.1582, 36.8701],
    河南: [113.4668, 34.6234],
    江苏: [118.8062, 31.9208],
    安徽: [117.29, 32.0581],
    湖北: [114.3896, 30.6628],
    浙江: [119.5313, 29.8773],
    福建: [119.4543, 25.9222],
    江西: [116.0046, 28.6633],
    湖南: [113.0823, 28.2568],
    贵州: [106.6992, 26.7682],
    云南: [102.9199, 25.4663],
    广东: [113.12244, 23.009505],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    上海: [121.4648, 31.2891],
  };
  const chinaDatas = [
    [
      {
        name: '黑龙江',
        value: 0,
      },
    ],
    [
      {
        name: '内蒙古',
        value: 0,
      },
    ],
    [
      {
        name: '吉林',
        value: 0,
      },
    ],
    [
      {
        name: '辽宁',
        value: 0,
      },
    ],
    [
      {
        name: '河北',
        value: 0,
      },
    ],
    [
      {
        name: '天津',
        value: 0,
      },
    ],
    [
      {
        name: '山西',
        value: 0,
      },
    ],
    [
      {
        name: '陕西',
        value: 0,
      },
    ],
    [
      {
        name: '甘肃',
        value: 0,
      },
    ],
    [
      {
        name: '宁夏',
        value: 0,
      },
    ],
    [
      {
        name: '青海',
        value: 0,
      },
    ],
    [
      {
        name: '新疆',
        value: 0,
      },
    ],
    [
      {
        name: '西藏',
        value: 0,
      },
    ],
    [
      {
        name: '四川',
        value: 0,
      },
    ],
    [
      {
        name: '重庆',
        value: 0,
      },
    ],
    [
      {
        name: '山东',
        value: 0,
      },
    ],
    [
      {
        name: '河南',
        value: 0,
      },
    ],
    [
      {
        name: '江苏',
        value: 0,
      },
    ],
    [
      {
        name: '安徽',
        value: 0,
      },
    ],
    [
      {
        name: '湖北',
        value: 0,
      },
    ],
    [
      {
        name: '浙江',
        value: 0,
      },
    ],
    [
      {
        name: '福建',
        value: 0,
      },
    ],
    [
      {
        name: '江西',
        value: 0,
      },
    ],
    [
      {
        name: '湖南',
        value: 0,
      },
    ],
    [
      {
        name: '贵州',
        value: 0,
      },
    ],
    [
      {
        name: '广西',
        value: 0,
      },
    ],
    [
      {
        name: '海南',
        value: 0,
      },
    ],
    [
      {
        name: '上海',
        value: 1,
      },
    ],
  ];

  const convertData = function (data) {
    const res = [];
    for (let i = 0; i < data.length; i++) {
      const dataItem = data[i];
      const fromCoord = chinaGeoCoordMap[dataItem[0].name];
      const toCoord = [116.4551, 40.2539];
      if (fromCoord && toCoord) {
        res.push([
          {
            coord: fromCoord,
            value: dataItem[0].value,
          },
          {
            coord: toCoord,
          },
        ]);
      }
    }
    return res;
  };
  const series = [];
  [['北京市', chinaDatas]].forEach(function (item, i) {
    series.push(
      {
        type: 'lines',
        coordinateSystem: 'GLMap',
        zlevel: 2,
        effect: {
          show: true,
          period: 4, //箭头指向速度，值越小速度越快
          trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: 'arrow', //箭头图标
          symbolSize: 5, //图标大小
        },
        lineStyle: {
          normal: {
            width: 1, //尾迹线条宽度
            opacity: 1, //尾迹线条透明度
            color: '#00EAFF', //线的颜色
            curveness: 0.3, //尾迹线条曲直度
          },
        },
        data: convertData(item[1]),
      },
      {
        type: 'effectScatter',
        coordinateSystem: 'GLMap',
        zlevel: 2,
        rippleEffect: {
          //涟漪特效
          period: 4, //动画时间，值越小速度越快
          brushType: 'stroke', //波纹绘制方式 stroke, fill
          scale: 4, //波纹圆环最大限制，值越大波纹越大
        },
        label: {
          normal: {
            show: true,
            position: 'right', //显示位置
            offset: [5, 0], //偏移设置
            formatter: function (params) {
              //圆环显示文字
              return params.data.name;
            },
            fontSize: 13,
          },
          emphasis: {
            show: true,
          },
        },
        symbol: 'circle',
        symbolSize: function (val) {
          return 5 + val[2] * 5; //圆环大小
        },
        itemStyle: {
          normal: {
            show: false,
            color: '#32ff9d', //颜色
          },
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[0].name,
            value: chinaGeoCoordMap[dataItem[0].name].concat([
              dataItem[0].value,
            ]),
          };
        }),
      },
      //被攻击点
      {
        type: 'scatter',
        coordinateSystem: 'GLMap',
        zlevel: 2,
        rippleEffect: {
          period: 4,
          brushType: 'stroke',
          scale: 4,
        },
        itemStyle: {
          normal: {
            color: '#ff0617', //颜色
          },
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            //offset:[5, 0],
            color: '#0f0',
            formatter: '{b}',
            textStyle: {
              color: '#0f0',
            },
          },
          emphasis: {
            show: true,
            color: '#f60',
          },
        },
        symbol: 'pin',
        symbolSize: 50,
        data: [
          {
            name: item[0],
            value: chinaGeoCoordMap[item[0]].concat([10]),
          },
        ],
      }
    );
  });
  let option = {
    animation: !1,
    GLMap: {},
    // viewer:viewer,
    series: series,
  };
  console.log('Cesium, dataM.viewer, option', Cesium, dataM.viewer, option);
  // CesiumUseEcharts(Cesium, dataM.viewer, option);
  // 加载热力图
  let heatData = [
    { lat: 39.258476, lng: 110.219918, value: 42 },
    { lat: 39.277398, lng: 110.239745, value: 46 },
    { lat: 39.319952, lng: 110.092288, value: 39 },
    { lat: 39.474548, lng: 110.068417, value: 36 },
    { lat: 39.437506, lng: 110.056819, value: 38 },
    { lat: 38.971221, lng: 110.592357, value: 40 },
    { lat: 38.95199, lng: 111.097213, value: 41 },
    { lat: 38.846696, lng: 110.17917, value: 42 },
    { lat: 39.352112, lng: 110.189824, value: 33 },
    { lat: 39.431853, lng: 110.077273, value: 30 },
    { lat: 39.351684, lng: 110.161226, value: 43 },
    { lat: 38.994047, lng: 110.271835, value: 44 },
    { lat: 38.733172, lng: 110.170308, value: 45 },
    { lat: 39.042436, lng: 110.430257, value: 46 },
  ];
  // let heatmap = new CesiumHeatMap(Cesium, dataM.viewer, heatData, {
  //   radius: 30,
  //   maxOpacity: 0.9,
  //   minOpacity: 0.2,
  //   blur: 0.75,
  //   // gradient: {
  //   //     '.5': 'blue',
  //   //     '.8': 'red',
  //   //     '.95': ''
  //   // }
  // });
  // dataM.viewer.flyTo(heatmap.entity);
  // 加载缓冲区
  // let buffer = new CesiumBufferAnalyze(dataM.viewer, 10000);
  // buffer.polyBuffer();
  //加载轨迹线
  let data = [
    {
      positions: [
        [-75.1, 39.57],
        [-80.12, 25.46],
        [-85.12, 30.46],
        [-90.12, 35.46],
        [-95.12, 40.46],
      ],
      color: '#FF0000',
    },
    {
      positions: [
        [-70.1, 40.57],
        [-75.12, 35.46],
        [-80.12, 30.46],
        [-85.12, 25.46],
        [-90.12, 20.46],
      ],
      color: '#FF0000',
    },
  ];
  CesiumTrack(data, dataM.viewer, ArrowImg).then(() => {});
};
</script>

<style>
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
    padding: 0.5rem;
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
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .backCenter {
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    color: #ffffff;
    top: 0;
    right: 5rem;
    width: auto;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .setPitchDegrees {
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    color: #ffffff;
    top: 0;
    right: 12rem;
    width: auto;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .plot {
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    color: #ffffff;
    top: 0;
    right: 20rem;
    width: auto;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
