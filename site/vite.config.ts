/*
 * @Author: Kang
 * @Date: 2024-09-06 12:43:09
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-15 18:01:28
 */
import { defineConfig } from 'vite';
import path, { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
// import UnoCSS from 'unocss/vite';
// import { MarkdownTransform } from './plugins/markdown-transform';

export default defineConfig({
  // plugins: [vue(),css()],
  assetsInclude: ['**/*.glb'],
  resolve: {
    alias: {
      'dls-map': '/node_modules/dls-map/es', // 强制使用 `es` 文件夹
      '@': resolve(__dirname, './'),
    },
  },
  server: {
    proxy: {
      '/map': {
        target: 'http://127.0.0.1',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/map/, ''),
      },
    },
  },
});
