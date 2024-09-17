<!--
 * @Author: Kang
 * @Date: 2024-09-17 10:37:38
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-17 10:37:48
-->
<!-- LoadingSpinner.vue -->
<template>
  <div class="loading-spinner">Loading...</div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
};
</script>

<style scoped>
.loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5em;
  color: #000;
}
</style>
