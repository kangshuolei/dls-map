/*
 * @Author: kkk
 * @Date: 2021-04-13 22:43:29
 * @LastEditTime: 2024-11-19 16:30:46
 * @LastEditors: Please set LastEditors
 * @Description:
 * @FilePath: \vue-cesium@next\typings\vue-shim.d.ts
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string; // 这里定义你的环境变量，例如 VITE_API_URL
  readonly VITE_APP_MODE: string; // 你项目中可能需要的其他变量
  // 添加其他自定义环境变量
  readonly MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
