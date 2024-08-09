<script lang="ts" setup>
import { storeToRefs } from "pinia"
// import CesiumMap from "@/components/Cesium/CesiumMap.vue"
import SacleBox from "@/components/SacleBox/index.vue"
// import CesiumTools from "@/components/Cesium/CesiumTools.vue"
// import CesiumCoords from "@/components/Cesium/CesiumCoords.vue"
import { onMounted, ref, onUnmounted, computed } from "vue"
import { useSettingsStore } from "@/store/modules/settings"
import { useRouter } from "vue-router"
import type { TabsPaneContext } from "element-plus"
import { useTagsViewStore } from "@/store/modules/tags-view"
const activeName = ref("model1")
const router = useRouter()

const settingsStore = useSettingsStore()
const tagsViewStore = useTagsViewStore()
const currentDateTime = ref(new Date())
const currentTime = ref("")
const { showTagsView, showLogo } = storeToRefs(settingsStore)

onMounted(() => {
  updateTime()
  const timer = setInterval(updateTime, 1000)
  onUnmounted(() => {
    clearInterval(timer)
  })
})
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log("activeName", tab.props.name, event)
  router.push(tab.props.name)
}
const updateTime = () => {
  currentDateTime.value = new Date()
  currentTime.value = formattedDateTime()
}
const formattedDateTime = () => {
  const year = currentDateTime.value.getFullYear()
  const month = (currentDateTime.value.getMonth() + 1).toString().padStart(2, "0")
  const day = currentDateTime.value.getDate().toString().padStart(2, "0")
  const hours = currentDateTime.value.getHours().toString().padStart(2, "0")
  const minutes = currentDateTime.value.getMinutes().toString().padStart(2, "0")
  const seconds = currentDateTime.value.getSeconds().toString().padStart(2, "0")
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
</script>

<template>
  <div class="app-wrapper">
    <!-- 头部导航栏和标签栏 -->
    <div class="fixed-header layout-header">
      <div class="currentTime">{{ currentTime }}</div>
    </div>
    <!--  地图  -->
    <div class="cesium-map">
<!--      <CesiumMap />-->
    </div>
    <!--  左侧栏  -->
    <div class="app-left">
      <router-view name="LeftSidebar" />
    </div>
    <!--  右侧栏  -->
    <div class="app-right">
      <router-view name="rightSidebar" />
    </div>
    <!--  右侧工具栏  -->
    <div class="cesium-tools">
<!--      <CesiumTools />-->
    </div>
    <!--  底部信息展示栏  -->
    <div class="cesium-coords">
<!--      <CesiumCoords />-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
$transition-time: 0.35s;

.cesium-map {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
}
.cesium-tools {
  position: absolute;
  z-index: 6;
  right: 28px;
  top: calc(var(--v3-header-height) + 20px);
}
.cesium-coords {
  position: absolute;
  z-index: 6;
  right: 28px;
  bottom: 18px;
}

.app-wrapper {
  @extend %clearfix;
  width: 100%;
  height: 100%;
  position: relative;
}

.tab-header {
  z-index: 1002;
  width: 100%;
}

.fixed-header {
  //position: fixed;
  top: 0;
  z-index: 1002;
  width: 100%;
  .logo {
    width: var(--v3-sidebar-width);
  }
  .content {
    display: flex;
    .navigation-bar {
      flex: 1;
      background: transparent;
    }
  }
}
.app-left {
  position: absolute;
  height: auto;
  //width: 442px;
  //background: red;
  top: var(--v3-header-height);
  //bottom: 0;
  z-index: 6;
}
.app-right {
  right: 0;
  position: absolute;
  top: var(--v3-header-height);
  //height: calc(100% - var(--v3-header-height));
  height: auto;
  //bottom: 0;
  //width: 442px;
  //background: red;
  z-index: 6;
}

.layout-header {
  position: absolute;
  height: var(--v3-header-height);
  //background-color: var(--v3-header-bg-color);
  //background-color: green;
  background-image: url("@/assets/image/header.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  //box-shadow: var(--el-box-shadow-lighter);
  .currentTime {
    position: absolute;
    right: 30px;
    top: 3px;
    color: rgba(135, 195, 237, 1);
  }
}

.main-container {
  height: auto;
  position: relative;
  z-index: 6;
  width: auto;
}

.app-main {
  transition: padding-left $transition-time;
  padding-top: var(--v3-navigationbar-height);
  height: 100vh;
  overflow: auto;
}

.hasTagsView {
  .app-main {
    //padding-top: var(--v3-header-height);
  }
}
</style>
