import DefaultTheme from 'vitepress/theme';
import { globals } from '../../vitepress';
import 'uno.css';
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册 Markdown 文件为 Vue 组件
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  },
};
