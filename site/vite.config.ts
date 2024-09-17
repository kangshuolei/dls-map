/*
 * @Author: Kang
 * @Date: 2024-09-06 12:43:09
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-17 10:05:22
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import UnoCSS from 'unocss/vite';
// import { MarkdownTransform } from './plugins/markdown-transform';

export default defineConfig({
  // plugins: [vue(),css()],
  resolve: {
    alias: {
      'dls-map': '/node_modules/dls-map/es', // 强制使用 `es` 文件夹
    },
  },
});
