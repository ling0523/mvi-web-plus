import { ExtractPublicPropTypes, PropType } from 'vue';
import { IconPropsType } from '../icon/props';
export declare const SearchProps: {
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    type: {
        type: PropType<"number" | "textarea" | "text" | "tel" | "password">;
        default: string;
        validator(value: any): boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxlength: {
        type: NumberConstructor;
        default: number;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCancel: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    align: {
        type: PropType<"left" | "right" | "center">;
        default: string;
        validator(value: any): boolean;
    };
    leftIcon: {
        type: PropType<string | IconPropsType>;
        default: null;
    };
    rightIcon: {
        type: PropType<string | IconPropsType>;
        default: null;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputMode: {
        type: PropType<"text" | "url" | "none" | "search" | "email" | "tel" | "decimal" | "numeric">;
        default: string;
        validator(value: any): boolean;
    };
};
export type SearchPropsType = ExtractPublicPropTypes<typeof SearchProps>;
