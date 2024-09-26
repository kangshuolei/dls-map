/*
 * @Author: Kang
 * @Date: 2024-08-09 09:45:00
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-22 17:21:00
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { server } from 'typescript';

export default defineConfig({
  // @ts-ignore
  plugins: [vue()],
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
