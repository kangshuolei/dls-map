import * as components from "./index";
declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        KlButton: typeof components.Button;
    }
}
export {};

