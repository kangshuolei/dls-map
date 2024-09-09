<!--
 * @Author: Kang
 * @Date: 2024-08-09 09:45:00
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-09 15:00:45
-->
<template>
  <button @click="handleButtonClick" class="k-button" :class="styleClass">
    <slot />
  </button>
</template>

<script lang="ts">
import './style/index.less';
import { defineComponent, computed } from 'vue';
import { buttonProps, buttonEmits } from './types';
export default defineComponent({
  name: 'dls-button',
  props: buttonProps,
  emits: buttonEmits,
  setup(props, ctx) {
    const { emit } = ctx;

    const handleButtonClick = (evt: MouseEvent) => {
      emit('click', evt);
    };
    const styleClass = computed(() => {
      return {
        [`k-button--${props.type}`]: props.type,
        'is-plain': props.plain,
        'is-round': props.round,
        'is-disabled': props.disabled,
        [`k-button--${props.size}`]: props.size,
      };
    });
    return {
      styleClass,
      handleButtonClick,
    };
  },
});
</script>
