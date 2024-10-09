/*
 * @Author: Kang
 * @Date: 2024-10-08 09:29:21
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-08 09:31:55
 */
import { onBeforeUnmount } from 'vue';

export default function () {
  let timer: number;

  onBeforeUnmount(() => {
    clearTimeout(timer);
  });

  return {
    registerTimeout(fn: Function, delay: number) {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    },

    removeTimeout() {
      clearTimeout(timer);
    },
  };
}
