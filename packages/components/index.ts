import * as components from "./src/index";
export * from "./src/index";
import { App } from "vue";

// 定义 components 的类型
type Components = Record<string, any>;

export default {
  install: (app: App) => {
    // 通过类型断言告诉 TypeScript c omponents 的类型
    const comp = components as Components;
    for (let c in comp) {
      app.use(comp[c]);
    }
  },
};
