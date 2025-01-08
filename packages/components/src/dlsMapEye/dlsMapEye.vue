<!--
 * @Author: Kang
 * @Date: 2024-09-30 14:39:00
 * @Last Modified by: Kang
 * @LastEditTime: 2025-01-07 16:06:47
-->
<template>
  <div class="eyeMain">
    <div id="eyeId"></div>
    <div id="credit"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, watch } from 'vue';
import './style/index.less';
import { mapEyeProps } from './types';
import { hexToCesiumColor } from '@dls-map/utils';

defineOptions({ name: 'dls-map-eye' });

type dataTypes = {
  viewer: any;
};

const data = reactive<dataTypes>({
  viewer: null,
});

const props = defineProps(mapEyeProps);

const { marstViewer, rangeStyle, positionStyle, baseMap } = props;

const computedValue = computed(() => props.marstViewer);

watch(computedValue, (newValue) => {
  if (newValue && !data.viewer) {
    loadMapEye();
  }
});

onMounted(() => {});

const loadMapEye = () => {
  if (data.viewer) {
    return false;
  }
  //鹰眼
  //小的地球隐藏所有的控件
  data.viewer = new Cesium.Viewer('eyeId', {
    // 不显示基础图层选择器
    baseLayerPicker: false,
    // 不显示地址搜索栏
    geocoder: false,
    // 不显示动画控件（如播放、暂停按钮）
    animation: false,
    // 启用或禁用场景动画
    shouldAnimate: true,
    // 不显示返回主页按钮
    homeButton: false,
    // 不显示时间轴
    timeline: false,
    // 不显示全屏按钮
    fullscreenButton: false,
    // 允许切换2D/3D模式
    scene3DOnly: false,
    // 不显示2D/3D视图模式切换按钮
    sceneModePicker: false,
    // 不显示导航帮助信息
    navigationInstructionsInitiallyVisible: false,
    // 不显示导航帮助按钮
    navigationHelpButton: false,
    // 不显示选择指示器
    selectionIndicator: false,
    // 不显示信息窗口
    infoBox: false,
    // 场景模式设置为2D或3D，根据 `mapConfig.sceneMode` 来决定
    sceneMode: 2,
  });

  data.viewer.imageryLayers.addImageryProvider(
    new Cesium.UrlTemplateImageryProvider(
      baseMap.imageryProvider
        ? baseMap.imageryProvider
        : ({
            url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
            layer: 'tdtVecBasicLayer',
            style: 'default',
            format: 'image/png',
            tileMatrixSetID: 'GoogleMapsCompatible',
          } as any)
    )
  );

  // 获取 canvas 元素
  var canvas = data.viewer.scene.canvas;

  // 调整 canvas 的大小
  canvas.style.width = baseMap.width;
  canvas.style.height = baseMap.height;

  //设置鹰眼图中球属性,禁止拖动旋转等操作
  let control = data.viewer.scene.screenSpaceCameraController;
  control.enableRotate = false;
  control.enableTranslate = false;
  control.enableZoom = false;
  control.enableTilt = false;
  control.enableLook = false;
  //根据高度转换zoom级别
  function heightToZoom(height: any) {
    let A = 40487.57;
    let B = 0.00007096758;
    let C = 91610.74;
    let D = -40467.74;
    return Math.round(D + (A - D) / (1 + Math.pow(height / C, B)));
  }
  // 获取当前相机高度
  var cameraHeight = props.marstViewer.scene.camera.positionCartographic.height;
  //获取当前界别
  let currentZoom = heightToZoom(Math.ceil(cameraHeight));
  const rect = getViewRange();
  //创建范围实例
  const createRectangleEntity = () => {
    rectangleEntity = data.viewer.entities.add({
      rectangle: {
        coordinates: rect,
        material: hexToCesiumColor(rangeStyle.color).withAlpha(
          rangeStyle.opacity
        ),
        // outlineWidth: rangeStyle.outline > 0 ? rangeStyle.outline : 1,
        // outline: true,
        // outlineColor: Cesium.Color.fromCssColorString(rangeStyle.outlineColor),
      },
    });
  };
  var rectangleEntity: Cesium.Entity = null;
  if (currentZoom > 5) {
    //创建视角范围矩形面
    createRectangleEntity();
  }

  const hander = new Cesium.ScreenSpaceEventHandler(
    props.marstViewer.scene.canvas
  );
  let zoom = 6;
  hander.setInputAction(function (wheelment: any) {
    zoom = heightToZoom(
      Math.ceil(props.marstViewer.camera.positionCartographic.height)
    );
    if (!rectangleEntity && zoom > 5) {
      createRectangleEntity();
    }
  }, Cesium.ScreenSpaceEventType.WHEEL);

  const billboard = data.viewer.entities.add({
    position: new Cesium.CallbackProperty(() => {
      // 获取当前视图中心的地理坐标
      const centerCartesian = data.viewer.camera.pickEllipsoid(
        new Cesium.Cartesian2(
          data.viewer.canvas.clientWidth / 2,
          data.viewer.canvas.clientHeight / 2
        ),
        data.viewer.scene.globe.ellipsoid
      );
      return centerCartesian; // 返回中心坐标
    }, false) as any, // 该参数为 false，表示不缓存结果
    billboard: {
      image: positionStyle.image, // 图像路径
      scale: positionStyle.scale,
      horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
      verticalOrigin: Cesium.VerticalOrigin.CENTER,
      rotation: new Cesium.CallbackProperty(() => {
        // 获取相机的朝向（heading）
        return props.marstViewer.camera.heading; // 返回相机的航向
      }, false),
    },
  });

  //设置同步的相关方法
  let syncViewer = function () {
    //获取主地球的视角
    const rect = getViewRange();
    //根据主地球的视角设置鹰眼的视角范围
    const zrect: Cesium.Rectangle = getZoomOutRange(rect);
    if (rectangleEntity) {
      if (zoom > 5) {
        let previousZrect: any = null; // 缓存上一个 rect
        rectangleEntity.rectangle.coordinates = new Cesium.CallbackProperty(
          () => {
            if (rect !== previousZrect) {
              previousZrect = rect; // 只有在 rect 变化时更新
              return rect;
            }
            return previousZrect; // 返回缓存的值
          },
          false
        );
        billboard.show = true;
        rectangleEntity.show = true;
      } else {
        rectangleEntity.show = false;
        billboard.show = false;
      }
    }
    data.viewer.camera.flyTo({
      destination: zrect,
      orientation: {
        heading: props.marstViewer.camera.heading,
        pitch: props.marstViewer.camera.pitch,
        roll: props.marstViewer.camera.roll,
      },
      duration: 0.0,
    });
  };
  //小的地球同步到啊的地球角度位置等
  props.marstViewer.scene.preRender.addEventListener(syncViewer); //效果和第三种方式一样，成功
};

const getViewRange = () => {
  var viewer = props.marstViewer;
  var camera = viewer.scene.camera;
  var range = null;
  if (viewer.scene.mode === Cesium.SceneMode.SCENE2D) {
    // 获取画布的宽高
    const canvas = viewer.scene.canvas;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // 计算屏幕左下角和右上角的笛卡尔坐标
    const bottomLeft = camera.pickEllipsoid(
      new Cesium.Cartesian2(0, height),
      viewer.scene.globe.ellipsoid
    );
    const topRight = camera.pickEllipsoid(
      new Cesium.Cartesian2(width, 0),
      viewer.scene.globe.ellipsoid
    );

    if (bottomLeft && topRight) {
      // 转换为地理坐标
      const bottomLeftCartographic =
        Cesium.Cartographic.fromCartesian(bottomLeft);
      const topRightCartographic = Cesium.Cartographic.fromCartesian(topRight);

      range = Cesium.Rectangle.fromCartographicArray([
        bottomLeftCartographic,
        topRightCartographic,
      ]);
    } else {
      range = Cesium.Rectangle.fromDegrees(-180, -90, 180, 90);
    }
  } else {
    range = camera.computeViewRectangle();
  }

  // 将弧度转换为经纬度
  var west = Cesium.Math.toDegrees(range.west);
  var east = Cesium.Math.toDegrees(range.east);
  var north = Cesium.Math.toDegrees(range.north);
  var south = Cesium.Math.toDegrees(range.south);

  // 使用 Cesium 的 Rectangle.fromDegrees 创建矩形
  var bounds = Cesium.Rectangle.fromDegrees(west, south, east, north);
  // 将弧度转换为经纬度
  var west = Cesium.Math.toDegrees(range.west);
  var east = Cesium.Math.toDegrees(range.east);
  var north = Cesium.Math.toDegrees(range.north);
  var south = Cesium.Math.toDegrees(range.south);

  // 使用 Cesium 的 Rectangle.fromDegrees 创建矩形
  var bounds = Cesium.Rectangle.fromDegrees(west, south, east, north);

  return bounds;
};

const getZoomOutRange = (rectangle: Cesium.Rectangle) => {
  var west = Cesium.Math.toDegrees(rectangle.west);
  var east = Cesium.Math.toDegrees(rectangle.east);
  var north = Cesium.Math.toDegrees(rectangle.north);
  var south = Cesium.Math.toDegrees(rectangle.south);

  var factor = 1.8;
  var xdis = Math.abs(east - west);
  var ydis = Math.abs(north - south);
  var xoff = (xdis * (factor - 1)) / 2.0;
  var yoff = (ydis * (factor - 1)) / 2.0;

  // 更新范围
  west -= xoff;
  east += xoff;
  north += yoff;
  south -= yoff;

  // 限制经纬度范围
  west = Math.max(west, -180);
  east = Math.min(east, 180);
  north = Math.min(north, 90);
  south = Math.max(south, -90);

  // 创建新的矩形对象
  return Cesium.Rectangle.fromDegrees(west, south, east, north);
};

defineExpose({
  viewer: data.viewer,
  loadMapEye,
});
</script>
