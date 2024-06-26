import { IconPropsType } from '../icon';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    type: {
        type: import('vue').PropType<"default" | "info" | "success" | "warn" | "error" | "primary">;
        default: string;
        validator(value: any): boolean;
    };
    size: {
        type: import('vue').PropType<"small" | "medium" | "large" | "mini">;
        default: string;
        validator(value: any): boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    nativeType: {
        type: import('vue').PropType<"button" | "submit" | "reset">;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadText: {
        type: StringConstructor;
        default: string;
    };
    loadIcon: {
        type: import('vue').PropType<string | IconPropsType>;
        default: () => {
            type: string;
            spin: boolean;
        };
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: import('vue').PropType<"default" | "info" | "success" | "warn" | "error" | "primary">;
        default: string;
        validator(value: any): boolean;
    };
    size: {
        type: import('vue').PropType<"small" | "medium" | "large" | "mini">;
        default: string;
        validator(value: any): boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    nativeType: {
        type: import('vue').PropType<"button" | "submit" | "reset">;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadText: {
        type: StringConstructor;
        default: string;
    };
    loadIcon: {
        type: import('vue').PropType<string | IconPropsType>;
        default: () => {
            type: string;
            spin: boolean;
        };
    };
}>>, {
    size: "small" | "medium" | "large" | "mini";
    type: "default" | "info" | "success" | "warn" | "error" | "primary";
    disabled: boolean;
    round: boolean;
    loading: boolean;
    active: boolean;
    square: boolean;
    block: boolean;
    nativeType: "button" | "submit" | "reset";
    tag: string;
    plain: boolean;
    loadText: string;
    loadIcon: string | IconPropsType;
}, {}>, {
    loading?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
