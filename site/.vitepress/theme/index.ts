import DefaultTheme from 'vitepress/theme';
import { globals } from '../../vitepress';
import { useDark } from '@vueuse/core';
import { watchEffect } from 'vue';
import 'element-plus/theme-chalk/dark/css-vars.css';
// import 'uno.css';
import './custom.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import '../../vitepress/styles/app.scss';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus);
    // 注册 Markdown 文件为 Vue 组件
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  },
};
