// useThree.js
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue';
import * as THREE from 'three';
import _3DObject from './3DObject';

type Location = {
  lat: number;
  lon: number;
};

let _3Dobjects: any = [];

const three = {
  renderer: null as any,
  camera: null as any,
  scene: null as any,
};

let modelGroup: any = null;

export default function useThree() {
  const cesiumViewerIns = ref(null);

  const dataM = reactive<any>({
    divWidth: 0,
    divHeight: 0,
  });

  const initThreejs = (cesiumViewer: Cesium.Viewer) => {
    cesiumViewerIns.value = cesiumViewer;
    const canvas = document.querySelector('#threeContainerId');
    let _renderer = null;

    _renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      logarithmicDepthBuffer: true,
      antialias: true,
    });
    _renderer.setSize(dataM.divWidth, dataM.divHeight);

    const fov = 45;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const aspect = width / height;
    const near = 1;
    const far = 10 * 1000 * 1000;
    const _camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    const _scene = new THREE.Scene();

    three.renderer = _renderer;
    three.camera = _camera;
    three.scene = _scene;
    startRenderLoop();

    //当窗口大小改变时会触发 onWindowResize 函数。这样可以确保渲染器的大小始终与窗口大小保持一致，从而避免渲染出现拉伸或压缩等问题。
    window.addEventListener('resize', onWindowResize, false);
    return three;
  };

  function onWindowResize() {
    //更新了相机的宽高比（aspect ratio），将其设置为窗口的宽度除以高度。
    // 这样可以确保相机的视图比例与窗口的比例保持一致。
    three.camera.aspect = dataM.divWidth / dataM.divHeight;
    //更新了相机的投影矩阵，以确保投影矩阵与新的宽高比保持一致。
    three.camera.updateProjectionMatrix();
    //更新了渲染器的大小，使其与窗口的大小保持一致。这样可以确保渲染器填充整个窗口，
    // 从而保证渲染效果的正确显示。
    three.renderer.setSize(dataM.divWidth, dataM.divHeight);

    // 更新渲染器和相机的宽高比
    if (three.renderer) {
      three.renderer.setSize(dataM.divWidth, dataM.divHeight);
    }
    if (three.camera) {
      three.camera.aspect = dataM.divWidth / dataM.divHeight;
      three.camera.updateProjectionMatrix();
    }
  }

  const loadThreejsModel = (
    location: Location,
    modelInstance: THREE.Object3D
  ) => {
    // 将加载的 FBX 模型存储到 _3Dobjects
    const _3DOB: any = new _3DObject();
    const fbxGroup = new THREE.Group();
    fbxGroup.add(modelInstance);
    three.scene.add(fbxGroup);
    _3DOB.threeMesh = fbxGroup;
    _3DOB.minWGS84 = [location.lon, location.lat];
    _3DOB.maxWGS84 = [location.lon, location.lat];
    _3Dobjects.push(_3DOB);

    update3DObjectPositions();

    return _3Dobjects;
  };

  const update3DObjectPositions = () => {
    // 更新所有 3D 对象的位置和方向
    for (const id in _3Dobjects) {
      const minWGS84 = _3Dobjects[id].minWGS84;
      const maxWGS84 = _3Dobjects[id].maxWGS84;

      // 计算地理中心点
      const center = Cesium.Cartesian3.fromDegrees(
        (minWGS84[0] + maxWGS84[0]) / 2,
        (minWGS84[1] + maxWGS84[1]) / 2
      );

      // 计算地球表面上的参考点以确定方向
      const centerHigh = Cesium.Cartesian3.fromDegrees(
        (minWGS84[0] + maxWGS84[0]) / 2,
        (minWGS84[1] + maxWGS84[1]) / 2,
        1
      );

      // 设置对象位置
      _3Dobjects[id].threeMesh.position.copy(center);

      //设置对象朝向;
      _3Dobjects[id].threeMesh.lookAt(centerHigh.x, centerHigh.y, centerHigh.z);
    }
  };

  const threeRender = () => {
    // Clone Cesium Camera projection position so the
    // Three.js Object will appear to be at the same place as above the Cesium Globe
    three.camera.matrixAutoUpdate = false;
    const cvm = cesiumViewerIns.value.camera.viewMatrix;
    const civm = cesiumViewerIns.value.camera.inverseViewMatrix;

    three.camera.lookAt(0, 0, 0);
    three.camera.matrixWorld.set(
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
    three.camera.matrixWorldInverse.set(
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
    const canvas = three.renderer.domElement;
    three.renderer.setPixelRatio(window.devicePixelRatio);
    const width = dataM.divWidth;
    const height = dataM.divHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      three.renderer.setSize(width, height, false);
    }
    three.camera.aspect = width / height;
    three.camera.fov = Cesium.Math.toDegrees(
      cesiumViewerIns.value.camera.frustum.fovy
    );
    three.camera.updateProjectionMatrix();
    three.renderer.render(three.scene, three.camera);
  };

  const handleSetDomWH = () => {
    // 获取指定 div 元素
    const divElement = document.getElementById('threeContainerId'); // 替换为你的 div 的 ID

    // 获取 div 的宽度和高度
    dataM.divWidth = divElement.clientWidth;
    dataM.divHeight = divElement.clientHeight;
  };

  const startRenderLoop = () => {
    threeRender();
    requestAnimationFrame(startRenderLoop);
  };

  onMounted(() => {
    handleSetDomWH();
  });

  onBeforeUnmount(() => {
    if (three.renderer) {
      three.renderer.dispose();
    }
    _3Dobjects = [];
    modelGroup = [];
  });

  return {
    loadThreejsModel,
    initThreejs,
  };
}
