/*
 * @Author: Kang
 * @Date: 2024-08-09 09:45:00
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-30 14:49:15
 */
import * as components from './index';
declare module '@vue/runtime-core' {
  //注册全局类型
  export interface GlobalComponents {
    DlsButton: typeof components.DlsButton;
    DlsMap: typeof components.DlsMap;
    DlsMapEye: typeof components.DlsMapEye;
  }
}
export {};
