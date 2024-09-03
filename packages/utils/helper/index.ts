/*
 * @Author: Kang
 * @Date: 2022-08-30 17:49:32
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-30 17:50:33
 */
export const importHack = (module: any, moduleName: any) => {
  if (typeof module === "function") {
    return module;
  }

  if (module.default) {
    return module.default;
  }

  const wModule = window[moduleName];
  if (wModule) {
    return wModule.default ? wModule.default : wModule;
  }

  if (module) {
    return module;
  }

  throw new Error(`无法处理模块 : ${moduleName}`);
};
