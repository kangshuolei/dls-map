<!--
 * @Author: Kang
 * @Date: 2024-09-06 09:02:45
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-18 16:28:11
-->
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
});

const decoded = computed(() => {
  return decodeURIComponent(props.source);
});
</script>

<template>
  <div v-show="visible" class="example-source-wrapper">
    <div class="example-source" v-html="decoded" />
  </div>
</template>

<style scoped lang="less">
:deep(.language-vue) {
  margin: 0 !important;
  border-radius: 0 !important;
}
</style>
