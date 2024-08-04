<template>
  <button class="kl-button" :class="buttonStyle"><slot /></button>
</template>
<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
defineOptions({ name: "kl-button" });
type ButtonProps = {
  type?: string
}
const buttonProps = defineProps<ButtonProps>()

const buttonStyle = computed(() => {
  return { [`kl-button--${buttonProps.type}`]: buttonProps.type }
})
</script>
