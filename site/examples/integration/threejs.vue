/** * @name: index * @author: kangshuolei * @date: 2024/2/6 18:44 *
@description: index */
<template>
  <div class="appMain" id="container">
    <!--	cesium 容器	-->
    <dls-map
      :mapConfig="{
        id: 'dls-map-layer-terrain',
        imageryProvider: dataM.imageryProvider,
        sceneModeNum: 3,
      }"
      ref="dlsMapRef"
      :viewer-width="'100%'"
      :viewer-height="'500px'"
      @ready="onCesiumReady"
    />
    <!--	three 容器	-->
    <div id="threeContainer"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { DlsMap } from '@dls-map/components';
import * as THREE from 'three';
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry.js';
//一些常量的设置
const teapotSize = 100;
const teapotPosition = [116.4134, 39.911];
const earthRadius = 6378137;
const dataM = reactive<any>({
  imageryProvider: {
    url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    layer: 'tdtVecBasicLayer',
    style: 'default',
    format: 'image/png',
    tileMatrixSetID: 'GoogleMapsCompatible',
  },
  viewer: null,
  divWidth: 0,
  divHeight: 0,
});
let camera: any,
  scene: any,
  renderer: any,
  threeSphere: any,
  axesHelper: any,
  gridHelper: any;
onMounted(() => {
  //初始化 Cesium 场景。
  // initCesium();
});
const handleSetDomWH = () => {
  // 获取指定 div 元素
  const divElement = document.getElementById('container'); // 替换为你的 div 的 ID

  // 获取 div 的宽度和高度
  dataM.divWidth = divElement.clientWidth;
  dataM.divHeight = divElement.clientHeight;
};
//cesium初始化完成之后
const onCesiumReady = (e: any) => {
  handleSetDomWH();
  initCesium(e);
};
const initCesium = (e: any) => {
  dataM.viewer = e.viewer;
  //创建一个cesium的地球
  const viewer = e.viewer;
  //开启地形深度测试
  viewer.scene.globe.depthTestAgainstTerrain = false;

  //轴线的长度为地球半径的两倍
  const axisLength = earthRadius * 2;

  //沿着X轴正方向移动 axisLength 的距离,用于末端坐标的定位
  const xAxisEnd = new Cesium.Cartesian3(axisLength, 0, 0);
  //沿着Y轴正方向移动 axisLength 的距离,用于末端坐标的定位
  const yAxisEnd = new Cesium.Cartesian3(0, axisLength, 0);
  //沿着Z轴正方向移动 axisLength 的距离,用于末端坐标的定位
  const zAxisEnd = new Cesium.Cartesian3(0, 0, axisLength);

  //画一个 X 轴的延伸线
  viewer.entities.add({
    polyline: {
      positions: [new Cesium.Cartesian3(1, 0, 0), xAxisEnd],
      width: 10,
      arcType: Cesium.ArcType.NONE,
      material: new Cesium.PolylineArrowMaterialProperty(Cesium.Color.RED),
    },
  });

  //画一个 Y 轴的延伸线
  viewer.entities.add({
    polyline: {
      positions: [new Cesium.Cartesian3(1, 0, 0), yAxisEnd],
      width: 10,
      arcType: Cesium.ArcType.NONE,
      material: new Cesium.PolylineArrowMaterialProperty(Cesium.Color.YELLOW),
    },
  });

  //画一个 Z 轴的延伸线
  viewer.entities.add({
    polyline: {
      positions: [new Cesium.Cartesian3(1, 0, 0), zAxisEnd],
      width: 10,
      arcType: Cesium.ArcType.NONE,
      material: new Cesium.PolylineArrowMaterialProperty(Cesium.Color.BLUE),
    },
  });

  //初始化 Three.js 场景，并将 Cesium 的场景对象 cesiumViewer 传递给它。
  initThree(viewer);
  //启动动画循环，以不断更新场景的渲染。
  animate();
};
const initThree = (viewer: any) => {
  //获取 three的容器元素
  let container: any = document.getElementById('threeContainer');
  //新建一个场景
  scene = new THREE.Scene();
  //新建一个相机
  /**
   * 1. Cesium.Math.toDegrees(viewer.camera.frustum.fovy):
   * 这里使用了Cesium库中的 Cesium.Math.toDegrees() 方法将Cesium相机的视场角（fovy）从弧度转换为角度。
   * 视场角是指相机可视范围的角度大小。
   * 2. window.innerWidth / window.innerHeight: 这是相机的宽高比，通常设置为当前窗口的宽度除以高度。
   * 这确保了相机视图的纵横比与窗口视图相匹配。
   * 3. viewer.camera.frustum.near 和 viewer.camera.frustum.far: 这表示相机的近剪裁面和远剪裁面的距离。
   * 这些值用于确定相机能够看到的场景范围。
   * tips: 机被正确配置为具有与Cesium相机相似的视场角、宽高比以及近远剪裁面距离，这样就可以在Three.js中正确地呈现Cesium场景。
   * @type {PerspectiveCamera}
   */
  camera = new THREE.PerspectiveCamera(
    Cesium.Math.toDegrees(viewer.camera.frustum.fovy),
    dataM.divWidth / dataM.divHeight,
    viewer.camera.frustum.near,
    viewer.camera.frustum.far
  );

  // 创建three 的WEBGL的渲染器
  //启用抗锯齿和透明度
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  //设置了渲染器的像素比率，以匹配设备的像素密度。这有助于确保渲染的图像在不同设备上看起来一致
  renderer.setPixelRatio(window.devicePixelRatio);
  //设置了渲染器的大小，使其与窗口的大小相匹配。这样可以确保渲染器填充整个窗口。
  renderer.setSize(dataM.divWidth, dataM.divHeight);

  //将渲染器的DOM元素添加到指定的容器中
  container.appendChild(renderer.domElement);
  //当窗口大小改变时会触发 onWindowResize 函数。这样可以确保渲染器的大小始终与窗口大小保持一致，从而避免渲染出现拉伸或压缩等问题。
  window.addEventListener('resize', onWindowResize, false);

  //创建了一个坐标轴辅助器对象（AxesHelper），并设置其大小为地球半径的2.5倍。
  // 这将在Three.js场景中添加一个表示X、Y、Z轴的可视化辅助。
  axesHelper = new THREE.AxesHelper(earthRadius * 2.5);

  //将坐标轴辅助器设置为不可见
  axesHelper.visible = false;
  //将坐标轴辅助器添加到场景中，以便在渲染时呈现出来。
  scene.add(axesHelper);

  //定义了网格的大小，这里设置为地球半径的3倍。
  const size = earthRadius * 3;
  //定义了网格的分割数，这里设置为10，表示网格被分成10份。
  const divisions = 10;

  //创建了一个网格辅助器对象（GridHelper），并设置了其大小和分割数。
  gridHelper = new THREE.GridHelper(size, divisions);

  //将网格辅助器设置为不可见
  gridHelper.visible = false;
  //将网格辅助器添加到场景中，以便在渲染时呈现出来。
  scene.add(gridHelper);

  // 创建了一个球体几何体对象（SphereGeometry），该球体的半径为 earthRadius，
  // 经度和纬度分别被分成了 32 份来构建球体的表面。这样可以确保球体的表面较为光滑。
  const geometry = new THREE.SphereGeometry(earthRadius, 32, 32);
  //创建了一个基础网格材质对象（MeshBasicMaterial），指定了球体的颜色为白色（color: 0xffffff），
  // 并设置了网格线框模式为 true（wireframe: true）。这样将会以白色网格线框的形式呈现球体。
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });
  //通过几何体对象和材质对象创建了一个网格对象（Mesh），即将材质应用到几何体上，形成了一个可视化的球体对象。
  threeSphere = new THREE.Mesh(geometry, material);

  //将球体对象的可见性设置为 false，即初始状态下不可见。
  threeSphere.visible = false;
  //将球体对象添加到 Three.js 场景中，以便在渲染时呈现出来。
  scene.add(threeSphere);

  //创建一个茶壶模型，并将其添加到 Three.js 场景中
  // 指定茶壶模型的细分程度
  const tess = 15;

  //创建了一个茶壶几何体对象（TeapotBufferGeometry）。其中，teapotSize 是茶壶的大小，tess 是指定的细分程度，
  // 后面的参数用于指定一些茶壶的细节设置。
  const teapotGeometry = new TeapotGeometry(
    teapotSize,
    tess,
    true,
    true,
    true,
    false,
    false
  );

  //创建了一个绕X轴旋转 90 度的旋转矩阵。
  const rot90X = new THREE.Matrix4().makeRotationX(Cesium.Math.toRadians(90));

  //将旋转矩阵应用到茶壶几何体上，使得茶壶沿着X轴旋转了90度。
  teapotGeometry.applyMatrix4(rot90X);

  //根据给定的经纬度坐标 teapotPosition，创建了一个 Cesium 中的笛卡尔坐标系。
  const wgs84Position = Cesium.Cartesian3.fromDegrees(
    teapotPosition[0],
    teapotPosition[1],
    0
  );

  //使用 Cesium 中的 Transforms.headingPitchRollToFixedFrame 方法，根据给定的位置和方向创建了一个变换矩阵。
  const matrix = Cesium.Transforms.headingPitchRollToFixedFrame(
    wgs84Position,
    new Cesium.HeadingPitchRoll(0, 0, 0)
  );

  //创建了一个 Three.js 的矩阵对象。
  const localToWgs84Mat = new THREE.Matrix4();
  //将 Cesium 的变换矩阵中的元素值赋给了 Three.js 的矩阵对象。
  localToWgs84Mat.set(
    matrix[0],
    matrix[4],
    matrix[8],
    matrix[12],
    matrix[1],
    matrix[5],
    matrix[9],
    matrix[13],
    matrix[2],
    matrix[6],
    matrix[10],
    matrix[14],
    matrix[3],
    matrix[7],
    matrix[11],
    matrix[15]
  );

  //将变换矩阵应用到茶壶几何体上，实现了将茶壶从 Cesium 地球坐标系转换到 Three.js 场景坐标系中。
  teapotGeometry.applyMatrix4(localToWgs84Mat);

  //创建了一个 Mesh 对象，使用茶壶几何体和一个 Phong 材质来构建茶壶。
  const teapot = new THREE.Mesh(
    teapotGeometry,
    new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
  );

  //将茶壶添加到 Three.js 场景中。
  scene.add(teapot);

  //创建了一个方向光源。
  const light = new THREE.DirectionalLight(0xffffff, 1.0);

  //将方向光源添加到 Three.js 场景中。
  scene.add(light);

  // 创建RGBE加载器
  //let loader = new RGBELoader()
  // 加载HDR图像
  // loader.load(
  //     '/src/assets/hdr/tief_etz_4k.hdr',
  //     function (texture: any) {
  //       // 将HDR纹理应用到场景中
  //       scene.background = texture;
  //       // 创建环境光
  //       const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x404040);
  //       scene.add(hemisphereLight);
  //     },
  //     undefined,
  //     function (error: any) {
  //       console.error('Failed to load HDR image', error);
  //     }
  // );
};
const animate = () => {
  //请求浏览器在下一帧执行 animate 函数，以形成动画循环。
  requestAnimationFrame(animate);
  //来同步 Three.js 相机与 Cesium 相机。
  syncThreeCameraWithCesium(camera, dataM.viewer);

  //来执行场景的渲染。
  render();
};
//用于渲染场景。
function render() {
  //来渲染 Cesium 场景。
  // dataM.viewer && dataM.viewer.render();

  // 来渲染 Three.js 场景。
  renderer.render(scene, camera);
}
//用于同步 Three.js 的相机位置和投影矩阵与 Cesium 的相机位置和视图矩阵
function syncThreeCameraWithCesium(camera: any, viewer: any) {
  //禁用 Three.js 相机的自动更新。
  camera.matrixAutoUpdate = false;

  //获取 Cesium 视图矩阵（viewer.camera.viewMatrix）
  let cvm = viewer.camera.viewMatrix;

  //获取 Cesium 逆视图矩阵（viewer.camera.inverseViewMatrix）。
  let civm = viewer.camera.inverseViewMatrix;

  //将 Cesium 的视图矩阵应用到 Three.js 相机的世界矩阵中。
  camera.matrixWorld.set(
    civm[0],
    civm[4],
    civm[8],
    civm[12],
    civm[1],
    civm[5],
    civm[9],
    civm[13],
    civm[2],
    civm[6],
    civm[10],
    civm[14],
    civm[3],
    civm[7],
    civm[11],
    civm[15]
  );

  //将 Cesium 的逆视图矩阵应用到 Three.js 相机的逆世界矩阵中。
  camera.matrixWorldInverse.set(
    cvm[0],
    cvm[4],
    cvm[8],
    cvm[12],
    cvm[1],
    cvm[5],
    cvm[9],
    cvm[13],
    cvm[2],
    cvm[6],
    cvm[10],
    cvm[14],
    cvm[3],
    cvm[7],
    cvm[11],
    cvm[15]
  );

  //更新 Three.js 相机的投影矩阵。
  camera.updateProjectionMatrix();
}
function onWindowResize() {
  //更新了相机的宽高比（aspect ratio），将其设置为窗口的宽度除以高度。
  // 这样可以确保相机的视图比例与窗口的比例保持一致。
  camera.aspect = dataM.divWidth / dataM.divHeight;
  //更新了相机的投影矩阵，以确保投影矩阵与新的宽高比保持一致。
  camera.updateProjectionMatrix();
  //更新了渲染器的大小，使其与窗口的大小保持一致。这样可以确保渲染器填充整个窗口，
  // 从而保证渲染效果的正确显示。
  renderer.setSize(dataM.divWidth, dataM.divHeight);
}
</script>
<style lang="less" scoped>
#threeContainer {
  width: 100%;
  height: 500px;
  position: absolute;
  pointer-events: none; /* this element will not catch any events */
}
.appMain {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
