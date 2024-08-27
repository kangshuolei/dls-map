import * as components from './index';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Button: typeof components.Button;
    DlsMap: typeof components.DlsMap;
  }
}
export {};
