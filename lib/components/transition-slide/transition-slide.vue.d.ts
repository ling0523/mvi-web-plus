declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    expand: {
        type: BooleanConstructor;
        default: boolean;
    };
    timeout: {
        type: NumberConstructor;
        default: number;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "before-slide-down": (...args: any[]) => void;
    "slide-down": (...args: any[]) => void;
    "before-slide-up": (...args: any[]) => void;
    "slide-up": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    expand: {
        type: BooleanConstructor;
        default: boolean;
    };
    timeout: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onBefore-slide-down"?: ((...args: any[]) => any) | undefined;
    "onSlide-down"?: ((...args: any[]) => any) | undefined;
    "onBefore-slide-up"?: ((...args: any[]) => any) | undefined;
    "onSlide-up"?: ((...args: any[]) => any) | undefined;
}, {
    timeout: number;
    expand: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
