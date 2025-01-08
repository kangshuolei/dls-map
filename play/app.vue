<template>
  <div class="appMain">
    <dls-map
      :mapConfig="{
        id: 'dls-map-id',
        imageryProvider: dataM.imageryProvider,
        sceneModeNum: 3,
      }"
      :isThreeJSActive="true"
      ref="dlsMapRef"
      @cesium-ready="onCesiumReady"
      @ready="onReady"
    />
    <div class="coords">
      经度：{{ dataM.coords.longitude }}， 纬度：{{ dataM.coords.latitude }}，
      海拔：{{ dataM.coords.altitude }}m， 高度：{{ dataM.coords.height }}m，
      方向：{{ dataM.coords.cameraHeading }}°， 俯仰角：{{
        dataM.coords.pitchDegrees
      }}°， 层级：{{ dataM.coords.zoomLevel }}
    </div>
    <div class="plot" @click="handleCesiumPlot">
      <dls-button @click="handleClick" size="midium" type="primary"
        >标绘</dls-button
      >
    </div>
    <div class="addEntity">
      <dls-button
        size="midium"
        type="primary"
        class="point"
        @click="handleisShowEye"
        >显示/隐藏鹰眼</dls-button
      >
      <dls-button
        size="midium"
        type="primary"
        class="point"
        @click="handleis23D"
        >切换2D和3D</dls-button
      >
      <dls-button
        size="midium"
        type="primary"
        class="point"
        @click="handleMeasureDistance"
        >面积测量</dls-button
      >
    </div>
    <!-- <div class="drawLine" @click="handleDrawLine">绘制线段</div>  -->
    <div class="backCenter" @click="handleBackCenter">回到中心点</div>
    <div class="setPitchDegrees" @click="handleSetPitchDegrees">仰角设置</div>
    <div class="tuozhuai">
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
    <div class="eye">
      <DlsMapEye
        ref="dlsMapEyeRef"
        v-if="dataM.isShowEye"
        :marst-viewer="dataM.viewer"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DlsButton, DlsMap, DlsMapEye } from '@dls-map/components';
import { VueDraggable, DraggableEvent } from 'vue-draggable-plus';
import wallLine from '/static/images/wall_line.png';
import ArrowImg from '/static/images/arrowImg.png';
import MarkBlue from '/static/images/mark-blue.png';
import LightSpot from '/static/images/lightSpot.png';
import windyData from '/static/json/windy/2017121300.json';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import modelUrl from '/static/model/huaxiangji.obj';
import {
  useSwitchMap,
  useCesiumCoord,
  useCesiumFlyTo,
  DlsDivLabel,
  CesiumPlot,
  // addLine,
  // addWall,
  CesiumUseEcharts,
  CesiumHeatMap,
  CesiumBufferAnalyze,
  CesiumTrack,
  useDlsMap,
  useCesiumEntities,
  CesiumEditEntity,
  Windy,
  useKeyboardRoam,
  useThree,
  useSwitchViewPoint,
  MeasureArea,
  useMeasureDistance,
} from '@dls-map/composables';
import { onMounted, ref, reactive, watch, nextTick } from 'vue';
import axios from 'axios';
const { listenToMouseMovement, coords } = useCesiumCoord();
const { initThreejs, loadThreejsModel } = useThree();
const { DrawSoildLine, removeDrawLine } = useMeasureDistance();
const { keyboardMapRoamingInit, keyboardMapRoamingRemove } = useKeyboardRoam();
const {
  addPointEntity,
  addLine,
  addCircle,
  addWall,
  removeSpecifyEntity,
  removeSpecifyPrimitive,
} = useCesiumEntities();
const dlsMapRef = ref(null);
const dlsMapEyeRef = ref(null);
const dataM = reactive<any>({
  imageryProvider: {
    url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    tileWidth: 256,
    tileHeight: 256,
    maximumLevel: 20, // 瓦片的最大层级
  },
  isShowEye: false,
  coords: {},
  viewer: {},
  dlsDivLabel: null,
  pointEntity: null,
  wallEntity: null,
  iconData: [
    { title: '图标平移1', type: 'billboard', url: MarkBlue, icon: MarkBlue },
    { title: '图标平移2', type: 'billboard', url: MarkBlue, icon: MarkBlue },
    {
      title: '模型旋转',
      type: 'model',
      url: '/static/model/huaxiangji.glb',
      icon: MarkBlue,
    },
  ],
  _rStep: 1,
  _dStep: 1,
  params: {
    tx: 0, //模型中心X轴坐标（经度，单位：十进制度）
    ty: 0, //模型中心Y轴坐标（纬度，单位：十进制度）
    tz: 0, //模型中心Z轴坐标（高程，单位：米）
    rx: 0, //X轴（经度）方向旋转角度（单位：度）
    ry: 0, //Y轴（纬度）方向旋转角度（单位：度）
    rz: 0, //Z轴（高程）方向旋转角度（单位：度）
  },
  _defaultWidth: 15,
  _coordArrows: {},
  _coordCircle: [],
  windy: null,
});

watch(coords, (newValue) => {
  dataM.coords = newValue;
});

const handleCloseKeyboarRoaming = () => {
  keyboardMapRoamingRemove();
};

const handleOpenKeyboarRoaming = () => {
  keyboardMapRoamingInit(dataM.viewer);
};
const handleis23D = () => {
  useSwitchViewPoint('3d', dataM.viewer);
};

const handleMeasureDistance = () => {
  const measureDistance = new MeasureArea(dataM.viewer);
  // 激活测量工具
  measureDistance.activate((res: any) => {
    console.log('res', res);
  });
  // DrawSoildLine(dataM.viewer, 'lines', [255, 10, 255], 5, {
  //   positionLabelStyle: { fillColor: Cesium.Color.BLUE },
  //   polylineStyle: { clampToGround: true },
  // });
  // setTimeout(() => {
  //   removeDrawLine(dataM.viewer);
  // }, 5000);
};

const handleisShowEye = () => {
  dataM.isShowEye = true;
  nextTick(() => {
    console.log('dlsMapEyeRef.value', dlsMapEyeRef.value);
    dlsMapEyeRef.value.loadMapEye();
  });
  // dlsMapEyeRef.value.loadMapEye();
};

function createModel(url: string, height: number) {
  dataM.viewer.entities.removeAll();

  const position = Cesium.Cartesian3.fromDegrees(116.4134, 39.911, height);
  const heading = Cesium.Math.toRadians(135);
  const pitch = 0;
  const roll = 0;
  const hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
  const orientation = Cesium.Transforms.headingPitchRollQuaternion(
    position,
    hpr
  );

  const entity = dataM.viewer.entities.add({
    name: url,
    position: position,
    orientation: orientation,
    model: {
      uri: url,
      minimumPixelSize: 128,
      maximumScale: 20000,
    },
  });
  dataM.viewer.trackedEntity = entity;
}

//加载threejs场景
const handleLoadThree = () => {
  let three = initThreejs(dataM.viewer);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(50, 50, 50);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // 环境光强度为 0.5
  three.scene.add(ambientLight);
  three.scene.add(directionalLight);
  // 创建 FBXLoader 实例
  const loader = new GLTFLoader();
  loader.load(
    'ao.glb',
    (gltf) => {
      // 缩放模型到地球尺度
      gltf.scene.scale.set(1000, 1000, 1000);

      // 将模型沿 Z 轴平移，并绕 X 轴旋转 90 度
      gltf.scene.position.z += 1000; // 向 Z 轴平移
      gltf.scene.rotation.x = Math.PI / 2; // 旋转 90 度以适配 Cesium 的 Y-up 坐标系
      // 如果模型包含动画
      if (gltf.animations && gltf.animations.length) {
        // 创建动画混合器
        let mixer = new THREE.AnimationMixer(gltf.scene);

        // 为每个动画创建动画动作并播放
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });

        function animate() {
          requestAnimationFrame(animate);

          if (mixer) {
            mixer.update(0.01); // 更新动画，传入每帧的时间差
          }

          // renderer.render(scene, camera);
        }

        animate();
      }
      let _3Dobjects = loadThreejsModel(
        { lon: 114.8267, lat: 16.16286 },
        gltf.scene
      );
    },
    (xhr) => {
      console.log(
        `Loading FBX model: ${(xhr.loaded / xhr.total) * 100}% loaded`
      );
      if ((xhr.loaded / xhr.total) * 100 === 100) {
        useCesiumFlyTo(dataM.viewer, [114.8267, 16.16286, 200000]);
      }
    },
    (error) => {
      console.error('Failed to load FBX model:', error);
    }
  );
  // useCesiumFlyTo(dataM.viewer, [114.7267, 16.16286, 100000]);
};

//加载骨骼动画
const handleLoadModel = async () => {
  let animations;
  const position = Cesium.Cartesian3.fromDegrees(116.4134, 39.911, 0);
  const headingPositionRoll = new Cesium.HeadingPitchRoll();
  const fixedFrameTransform = Cesium.Transforms.localFrameToFixedFrameGenerator(
    'north',
    'west'
  );
  let model = await Cesium.Model.fromGltfAsync({
    url: 'ux3d_industrial_robot/scene.gltf',
    scale: 1,
    modelMatrix: Cesium.Transforms.headingPitchRollToFixedFrame(
      position,
      headingPositionRoll,
      Cesium.Ellipsoid.WGS84,
      fixedFrameTransform
    ),
    minimumPixelSize: 128,
    gltfCallback: (gltf) => {
      animations = gltf.animations;
    },
  });
  dataM.viewer.scene.primitives.add(model); // 添加到 Cesium 场景
  model.readyEvent.addEventListener(() => {
    model.activeAnimations.add({
      index: animations.length - 1,
      loop: Cesium.ModelAnimationLoop.REPEAT,
      multiplier: 0.5,
    });
  });

  // createModel('ux3d_industrial_robot/scene.gltf', 0);
  useCesiumFlyTo(dataM.viewer, [116.4134, 39.911, 1000]);
};

// const currentData = useDlsMap('dls-map-id');
// console.log('currentData', currentData);
// 获取屏幕坐标上的经纬度
function getLatLonFromScreenPosition(screenX: number, screenY: number) {
  const scene = dataM.viewer.scene;
  const cartesian = scene.pickPosition(new Cesium.Cartesian2(screenX, screenY));

  if (cartesian) {
    const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
    const latitude = Cesium.Math.toDegrees(cartographic.latitude);
    const longitude = Cesium.Math.toDegrees(cartographic.longitude);
    const height = cartographic.height;

    const x = cartesian.x;
    const y = cartesian.y;
    const z = cartesian.z;
    return { latitude, longitude, height, x, y, z };
  }
  return null; // 如果未能获取有效位置
}

//在拖拽开始时，通过dragStart函数将当前拖拽的元素保存到dragItem变量中，
// 并将拖拽的数据以字符串形式存储在数据传输对象中。
function dragStart(event: any, data: any) {
  // alert('1');
  console.log('拖拽开始', event, data);
}

//在拖拽结束时，通过dragEnd函数将dragItem变量重置为null。
function dragEnd(event: any, data: any) {
  console.log('拖拽结束', event, data);
  const latLon = getLatLonFromScreenPosition(event.x, event.y);
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

const handleClick = () => {
  console.log('点击了。。。');
};

onMounted(() => {
  //获取viewer
  console.log('dlsMapRef', dlsMapRef.value);
  // console.log(dataM.imageryProvider);
});

const handleLoadWindy = (type: string) => {
  if (type === 'load') {
    axios
      .get('/static/json/windy/2017121300.json')
      .then((response: any) => {
        // this.userData = response.data;
        // var header = response[0].header;
        console.log('response', response);
        dataM.windy = new Windy({
          json: response.data,
          cesiumViewer: dataM.viewer,
          speed: 100,
        });
        // redraw();
        dataM.windy.loadWindy();
        // setTimeout(() => {
        //   dataM.windy.hideLines();
        // }, 3000);
        // setTimeout(() => {
        //   dataM.windy.showLines();
        // }, 6000);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  } else if (type === 'hidden') {
    dataM.windy.hideWindy();
  } else if (type === 'show') {
    dataM.windy.showWindy();
  } else if (type === 'pause') {
    dataM.windy.pauseWindy();
  } else if (type === 'resume') {
    dataM.windy.resumeWindy();
  } else if (type === 'destroy') {
    dataM.windy.destroyWindy();
  }
};

function redraw() {
  // var timer = null;
  // timer = setInterval(function () {
  //   dataM.windy.animate();
  // }, 300);
}

//添加echarts
const handleAddEcharts = () => {
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
  const series: any = [];
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
  CesiumUseEcharts(Cesium, dataM.viewer, option);
};

//添加点
const handleAddPoint = () => {
  //添加的图片类型
  dataM.pointEntity = addPointEntity(116.4134, 39.911, dataM.viewer, {
    type: 'billboard',
    imgUrl: LightSpot,
  });
  // const pointEntity = addPointEntity(116.4134, 39.911, dataM.viewer, {
  //   type: 'point',
  // });
  dataM.viewer.flyTo(dataM.pointEntity, {
    duration: 2, // 相机飞行的时间（以秒为单位）
    offset: new Cesium.HeadingPitchRange(0, -0.5, 500), // 设置偏移角度和距离（可选）
  });
};

//添加线
const handleAddLine = () => {
  const lineEntity = addLine(
    [-115.0, 37.0, -115.0, 32.0],
    new Cesium.PolylineDashMaterialProperty({
      color: Cesium.Color.BLUE, // 虚线的颜色
      dashLength: 16, // 虚线的每个段的长度
    }),
    dataM.viewer,
    {}
  );
  dataM.viewer.flyTo(lineEntity, {
    duration: 2, // 相机飞行的时间（以秒为单位）
    // offset: new Cesium.HeadingPitchRange(0, -0.5, 500), // 设置偏移角度和距离（可选）
  });
};

//添加墙
const handleAddWall = () => {
  dataM.wallEntity = addWall(
    dataM.viewer,
    [
      -115.0, 37.0, 100000, -115.0, 32.0, 100000, -107.0, 33.0, 100000, -115.0,
      37.0, 100000,
    ],
    '#00FFFF',
    { MaterialIndex: 4 }
  );
  dataM.viewer.flyTo(dataM.wallEntity, {
    duration: 2, // 相机飞行的时间（以秒为单位）
    // offset: new Cesium.HeadingPitchRange(0, -0.5, 500), // 设置偏移角度和距离（可选）
  });
};

const handleRemoveEntity = () => {
  removeSpecifyEntity([dataM.pointEntity], dataM.viewer);
  removeSpecifyPrimitive([dataM.wallEntity], dataM.viewer);
};

//添加圆
const handleAddCircle = () => {
  const circleEntity = addCircle(
    116.4134,
    39.911,
    10000,
    'rgba(77, 225, 247,0.3)',
    dataM.viewer
  );
  dataM.viewer.flyTo(circleEntity, {
    duration: 2, // 相机飞行的时间（以秒为单位）
    // offset: new Cesium.HeadingPitchRange(0, -0.5, 500), // 设置偏移角度和距离（可选）
  });
};

const handleDrawLine = () => {
  // dlsMapContainer.value.DrawSoildLine(dataM.viewer,'lines', [255, 10, 255], 5)
};

const handleCesiumPlot = () => {
  const geometry = new CesiumPlot.Label(Cesium, dataM.viewer, {
    fillColor: Cesium.Color.RED,
    text: '我是文字',
    isEdit: false,
    font: '26px sans-serif',
  });
  console.log('geometry', geometry);
};

const handleBackCenter = () => {
  useCesiumFlyTo(dataM.viewer, [116.4134, 39.911, 1000]);
};

const handleSetPitchDegrees = () => {
  // dlsMapContainer.value.handlePitchDegrees(dataM.viewer,-11)
};
const onCesiumReady = (e: any) => {
  console.log('Cesium加载完毕', e);
};

//cesium初始化完成之后
const onReady = async (e: any) => {
  dataM.viewer = e.viewer;
  console.log('e', e);
  // useSwitchMap({},e)
  listenToMouseMovement(dataM.viewer);
  //加载地形
  dataM.viewer.terrainProvider = await Cesium.CesiumTerrainProvider.fromUrl(
    '/map/newDixing',
    // 'https://data.mars3d.cn/terrain',
    {
      requestVertexNormals: false,
    }
  );
  // dataM.viewer.scene.globe.terrainExaggeration = 10;
  // dataM.viewer.scene.globe.terrainExaggerationRelativeHeight = 2400.0;
  // useCesiumFlyTo(dataM.viewer, [114.62, 15.02, 2800]);
  useCesiumFlyTo(dataM.viewer, [107.5999, 33.9887, 2800]);

  if (dataM.dlsDivLabel) {
    dataM.dlsDivLabel.removeCountryAllDiv('.LayerTitle');
  }
  const jsxContent = `
          <div class="ip-model-style">
            123
          </div>
        `;
  let className = 'LayerTitle';
  let val: any = {
    viewer: dataM.viewer,
    position: [116.4134, 39.911],
    height: 0,
    offset: [0, -90],
    dom: jsxContent,
    className,
  };
  // dataM.dlsDivLabel = new DlsDivLabel(val);
  // addRainScene(dataM.viewer);
  //生成一个线段
  // addLine([-115.0, 37.0, -115.0, 32.0], Cesium.Color.RED, dataM.viewer, {});
  //生成一个墙
  // addWall(
  //   dataM.viewer,
  //   [
  //     -115.0, 37.0, 100000, -115.0, 32.0, 100000, -107.0, 33.0, 100000, -115.0,
  //     37.0, 100000,
  //   ],
  //   '#00FFFF',
  //   0.7,
  //   1
  // );
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

<style lang="less" scoped>
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

  .eye {
    width: 200px;
    height: 150px;
    position: absolute;
    z-index: 9999;
    color: #ffffff;
    bottom: 5rem;
    right: 0;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .addEntity {
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    color: #ffffff;
    top: 0;
    right: 30rem;
    width: auto;
    padding: 0.5rem;
    gap: 1rem;
    display: flex;
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
  .tuozhuai {
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    color: #ffffff;
    top: 0;
    left: 3rem;
    width: auto;
    padding: 0.5rem;
    background-color: rgba(255, 255, 255, 0.5);
    // display: flex;
    .dataBox {
      display: flex;
      align-items: center;
    }
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
