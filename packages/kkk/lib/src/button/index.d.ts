import type { Plugin } from "vue";
declare type SFCWithInstall<T> = T & Plugin;
export declare const Button: SFCWithInstall<import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: false;
    };
}, {
    buttonProps: any;
    buttonStyle: import("vue").ComputedRef<{
        [x: string]: any;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: false;
    };
}>>, {}, {}>>;
export default Button;
