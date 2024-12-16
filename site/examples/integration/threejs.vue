<!--
 * @Author: Kang
 * @Date: 2024-12-12 20:58:52
 * @Last Modified by: Kang
 * @LastEditTime: 2024-12-16 17:56:34
-->
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
      :isThreeJSActive="true"
      :threejs-width="'100%'"
      :threejs-height="'500px'"
      ref="dlsMapRef"
      :viewer-width="'100%'"
      :viewer-height="'500px'"
      @ready="onCesiumReady"
    />
    <div class="operation">
      <el-button @click="handleLoadThreejs()" type="primary"
        >初始化threejs场景</el-button
      >
      <el-button @click="handleLoadModel()" type="primary"
        >加载threejs模型</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { DlsMap } from '@dls-map/components';
import { useThree, useCesiumFlyTo } from '@dls-map/composables';
import * as THREE from 'three';
import { ElMessage } from 'element-plus';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
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
const { initThreejs, loadThreejsModel } = useThree();
onMounted(() => {});

//cesium初始化完成之后
const onCesiumReady = (e: any) => {
  dataM.viewer = e.viewer;
};

//加载threejs场景
const handleLoadThreejs = () => {
  let three = initThreejs(dataM.viewer);
  if (three) {
    ElMessage({
      message: 'threejs场景初始化成功',
      type: 'success',
    });
  }
};

//加载模型
const handleLoadModel = () => {
  //添加灯光
  let three = initThreejs(dataM.viewer);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(50, 50, 50);
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // 环境光强度为 0.5
  three.scene.add(ambientLight);
  three.scene.add(directionalLight);
  // 加载 GLB 模型
  let url =
    import.meta.env.MODE === 'development' ? '/ao.glb' : '/dls-map-doc/ao.glb';
  const loader = new GLTFLoader();
  loader.load(
    url, // 模型路径
    (gltf) => {
      // 缩放模型到地球尺度
      gltf.scene.scale.set(5, 5, 5);

      // 将模型沿 Z 轴平移，并绕 X 轴旋转 90 度
      gltf.scene.position.z += 10; // 向 Z 轴平移
      gltf.scene.rotation.x = Math.PI / 2; // 旋转 90 度以适配 Cesium 的 Y-up 坐标系
      let _3Dobjects = loadThreejsModel(
        { lon: 116.4134, lat: 39.911 },
        gltf.scene
      );
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
    },
    (xhr) => {
      // 加载进度回调
      useCesiumFlyTo(dataM.viewer, [116.4134, 39.911, 1000]);
    },
    (error) => {
      // 错误回调
      console.error('An error happened:', error);
    }
  );
  //添加点击事件
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  window.addEventListener('click', (event) => {
    // 计算鼠标位置（归一化设备坐标 -1 到 1）
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // 更新射线投射器
    raycaster.setFromCamera(mouse, three.camera);

    // 检测射线与模型的交互
    const intersects = raycaster.intersectObjects(three.scene.children);

    // 如果有交互，执行操作
    if (intersects.length > 0) {
      console.log('intersects[0].object', intersects[0].object);
      ElMessage({
        message: `点击了模型， 名称：${intersects[0].object.name}`,
        type: 'success',
      });
      //@ts-ignore
      // intersects[0].object.material.color.set(0xff0000); // 点击后变红
      intersects[0].object.material = new THREE.MeshStandardMaterial({
        color: 0xff0000, // 设置为红色
        roughness: 0.5,
        metalness: 0.5,
      });
    }
  });
};
</script>
<style lang="less" scoped>
.appMain {
  width: 100%;
  height: 100%;
  position: relative;
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
