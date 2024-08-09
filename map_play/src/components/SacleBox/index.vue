<template>
  <div class="ScaleBox" ref="ScaleBox">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue"

const dataM = reactive({
  scale: 0,
  width: 1920,
  height: 1080,
  ww: 0,
  wh: 0
})

const ScaleBox = ref(null)

function getScale() {
  // 固定好16：9的宽高比，计算出最合适的缩放比
  const { width, height } = dataM
  const wh = window.innerHeight / height
  const ww = window.innerWidth / width
  dataM.ww = ww
  dataM.wh = wh
  return ww < wh ? ww : wh
}
function setScale() {
  // 获取到缩放比例，设置它
  dataM.scale = getScale()
  // this.$store.commit("SET_SCALE",this.scale)
  // console.log('scale',this.scale)
  const mapContent = document.getElementById("dlsMapContainer")
  if (mapContent) {
    mapContent.style.transform = `scale(${1 / dataM.scale}) translate(-50%, -50%)`
    mapContent.style.width = `${1920 * dataM.scale}px`
    mapContent.style.height = `${1080 * dataM.scale}px`
    mapContent.style.top = `50%`
    mapContent.style.left = `50%`
    mapContent.style.transformOrigin = "0 0"
  }
  if (ScaleBox.value) {
    window.boxScale = dataM.scale
    document.body.style.setProperty("--scale", dataM.scale)
    document.body.style.setProperty("width", "1920px")
    document.body.style.setProperty("height", "1080px")
    document.body.style.transform = `scale(${dataM.scale}) translate(-50%, -50%)`
    document.body.style.setProperty("position", "relative")
    document.body.style.setProperty("transform-origin", "0 0")
    document.body.style.setProperty("left", "50%")
    document.body.style.setProperty("top", "50%")
    document.body.style.setProperty("transition", "0.3s")
    document.body.style.setProperty("overflow", "hidden")
  }
}
function debounce(fn: any, delay: any) {
  const delays = delay || 500
  let timer: any
  return function (...args: any) {
    // const th = this
    // const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      timer = null
      fn(...args)
    }, delays)
  }
}

onMounted(() => {
  setScale()
  window.addEventListener("resize", debounce(setScale, 500))
})
</script>

<style lang="scss" scoped>
#ScaleBox {
  --scale: 1;
}
.ScaleBox {
  //position: relative;
  //transform: scale(var(--scale)) translate(-50%, -50%);
  //display: flex;
  width: 100%;
  height: 100%;
  //flex-direction: column;
  transform-origin: 0 0;
  //left: 50%;
  //top: 50%;
  transition: 0.3s;
  z-index: 0;
  background: rgba(255, 0, 0, 0.3);
}
</style>
<script setup lang="ts"></script>
