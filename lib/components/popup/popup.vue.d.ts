import { DefineComponent } from 'vue';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayColor: {
        type: StringConstructor;
        default: null;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    timeout: {
        type: NumberConstructor;
        default: number;
    };
    placement: {
        type: StringConstructor;
        default: string;
        validator(value: any): boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        default: null;
    };
    showTimes: {
        type: BooleanConstructor;
        default: boolean;
    };
    timesPlacement: {
        type: StringConstructor;
        default: string;
        validator(value: any): boolean;
    };
    mountEl: {
        type: StringConstructor;
        default: null;
    };
    usePadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    __contentPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    $$el: import("vue").ComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    show: (...args: any[]) => void;
    showing: (...args: any[]) => void;
    shown: (...args: any[]) => void;
    hide: (...args: any[]) => void;
    hidding: (...args: any[]) => void;
    hidden: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayColor: {
        type: StringConstructor;
        default: null;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    timeout: {
        type: NumberConstructor;
        default: number;
    };
    placement: {
        type: StringConstructor;
        default: string;
        validator(value: any): boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        default: null;
    };
    showTimes: {
        type: BooleanConstructor;
        default: boolean;
    };
    timesPlacement: {
        type: StringConstructor;
        default: string;
        validator(value: any): boolean;
    };
    mountEl: {
        type: StringConstructor;
        default: null;
    };
    usePadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    __contentPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onShowing?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onHidding?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
}, {
    placement: string;
    modelValue: boolean;
    zIndex: number;
    width: string;
    timeout: number;
    closable: boolean;
    round: boolean;
    mountEl: string;
    usePadding: boolean;
    overlayColor: string;
    showTimes: boolean;
    timesPlacement: string;
    __contentPadding: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
