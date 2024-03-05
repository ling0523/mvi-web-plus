declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    interval: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator(value: any): boolean;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: StringConstructor;
        default: string;
        validator(value: any): boolean;
    };
    clickStop: {
        type: BooleanConstructor;
        default: boolean;
    };
    hoverStop: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    pause: () => void;
    stop: () => void;
    play: () => void;
    isStopped: import("vue").ComputedRef<boolean>;
    isPaused: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    stop: (...args: any[]) => void;
    pause: (...args: any[]) => void;
    play: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    interval: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator(value: any): boolean;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: StringConstructor;
        default: string;
        validator(value: any): boolean;
    };
    clickStop: {
        type: BooleanConstructor;
        default: boolean;
    };
    hoverStop: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onPause?: ((...args: any[]) => any) | undefined;
    onPlay?: ((...args: any[]) => any) | undefined;
    onStop?: ((...args: any[]) => any) | undefined;
}, {
    animation: string;
    center: boolean;
    interval: number;
    direction: string;
    autoplay: boolean;
    loop: boolean;
    clickStop: boolean;
    hoverStop: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};