declare const _default: import("vue").DefineComponent<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor)[];
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    value: {
        type: (StringConstructor | NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    placement: {
        type: StringConstructor;
        default: string;
        validator(value: any): boolean;
    };
    size: {
        type: StringConstructor;
        default: null;
    };
    color: {
        type: StringConstructor;
        default: null;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    change: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor)[];
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    value: {
        type: (StringConstructor | NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    placement: {
        type: StringConstructor;
        default: string;
        validator(value: any): boolean;
    };
    size: {
        type: StringConstructor;
        default: null;
    };
    color: {
        type: StringConstructor;
        default: null;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    modelValue: string | number | boolean | Record<string, any>;
    label: string;
    disabled: boolean;
    name: string;
    size: string;
    placement: string;
    round: boolean;
    value: string | number | Record<string, any>;
}, {}>;
export default _default;
