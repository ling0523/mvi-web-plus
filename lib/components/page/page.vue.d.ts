import { IconPropsType } from '../icon';

declare const _default: import('vue').DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    total: {
        type: NumberConstructor;
        default: number;
    };
    overNumber: {
        type: NumberConstructor;
        default: number;
        validator(value: any): boolean;
    };
    prevText: {
        type: StringConstructor;
        default: null;
    };
    nextText: {
        type: StringConstructor;
        default: null;
    };
    prevIcon: {
        type: import('vue').PropType<string | IconPropsType>;
        default: string;
    };
    nextIcon: {
        type: import('vue').PropType<string | IconPropsType>;
        default: string;
    };
    simple: {
        type: BooleanConstructor;
        default: boolean;
    };
    firstText: {
        type: StringConstructor;
        default: null;
    };
    lastText: {
        type: StringConstructor;
        default: null;
    };
    firstIcon: {
        type: import('vue').PropType<string | IconPropsType>;
        default: string;
    };
    lastIcon: {
        type: import('vue').PropType<string | IconPropsType>;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: null;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    change: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    total: {
        type: NumberConstructor;
        default: number;
    };
    overNumber: {
        type: NumberConstructor;
        default: number;
        validator(value: any): boolean;
    };
    prevText: {
        type: StringConstructor;
        default: null;
    };
    nextText: {
        type: StringConstructor;
        default: null;
    };
    prevIcon: {
        type: import('vue').PropType<string | IconPropsType>;
        default: string;
    };
    nextIcon: {
        type: import('vue').PropType<string | IconPropsType>;
        default: string;
    };
    simple: {
        type: BooleanConstructor;
        default: boolean;
    };
    firstText: {
        type: StringConstructor;
        default: null;
    };
    lastText: {
        type: StringConstructor;
        default: null;
    };
    firstIcon: {
        type: import('vue').PropType<string | IconPropsType>;
        default: string;
    };
    lastIcon: {
        type: import('vue').PropType<string | IconPropsType>;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: null;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    modelValue: number;
    active: boolean;
    total: number;
    overNumber: number;
    prevText: string;
    nextText: string;
    prevIcon: string | IconPropsType;
    nextIcon: string | IconPropsType;
    simple: boolean;
    firstText: string;
    lastText: string;
    firstIcon: string | IconPropsType;
    lastIcon: string | IconPropsType;
}, {}>;
export default _default;
