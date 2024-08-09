<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
// import { ElNotification } from "element-plus"
// 将 Element Plus 的语言设置为中文
import zhCn from "element-plus/es/locale/lang/zh-cn"
import autofit from "autofit.js"
import { elRectification } from "autofit.js"
import SacleBox from "vue3-scale-box"
import { autoFit, autoScale } from "@astii/autofit"

const { initTheme } = useTheme()

/** 初始化主题 */
initTheme()
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>
<stylec>

</stylec>
