<template>
  <button class="kl-button" :class="buttonStyle"><slot /></button>
</template>
<script lang="ts" setup>
import './style/index.less';
import { computed, onMounted } from 'vue';
defineOptions({ name: 'kl-button' });
type ButtonProps = {
  type?: string;
};
onMounted(() => {
  console.log('执行了。。。', Cesium);
});
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`kl-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
