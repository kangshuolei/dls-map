/*
 * @Author: Kang
 * @Date: 2022-08-28 22:05:02
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-09 13:08:53
 */
import type { App, AppContext, Plugin } from 'vue';
type SFCWithInstall<T> = T & Plugin;
type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null;
};

export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    //注册组件
    app.component((comp as any).name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};

export const withInstallFunction = <T>(fn: T, name: string) => {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    (fn as SFCInstallWithContext<T>)._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn as SFCInstallWithContext<T>;
};
