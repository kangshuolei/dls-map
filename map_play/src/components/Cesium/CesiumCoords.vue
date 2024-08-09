<script setup lang="ts">
import { onMounted, reactive, watch } from "vue"

const dataM = reactive({
  coords: {}
})

onMounted(() => {
  const distanceLegend: any = document.getElementsByClassName("distance-legend")[0] as HTMLElement
  distanceLegend.style.right = "280px"
  distanceLegend.style.bottom = "12px"
  distanceLegend.style.zIndex = 99
  const viewer = window.viewer
  const dlsMapRef = window.dlsMapRef
  dlsMapRef.listenToMouseMovement(viewer)
  watch(
    dlsMapRef.coords,
    (newValue) => {
      if (newValue) {
        dataM.coords = newValue
      }
    },
    { deep: true }
  )
})
</script>

<template>
  <div class="cesium-coords-main">
    <div class="DistanceLegend"></div>
    <div class="lonLat">经度：{{ dataM.coords.longitude }}，纬度：{{ dataM.coords.latitude }}</div>
  </div>
</template>

<style scoped lang="scss">
.cesium-coords-main {
  color: rgba(255, 255, 255, 1);
  font-size: 16.67px;
  width: 488px;
  height: 43px;
  //background: rgba(15, 85, 129, 0.8);
  display: flex;
  justify-content: space-between;
  .DistanceLegend {
    width: 136px;
    height: 100%;
    //background: rgba(15, 85, 129, 0.8);
  }
  .lonLat {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 336px;
    height: 100%;
    background: rgba(45, 84, 128, 0.8);
  }
}
</style>
