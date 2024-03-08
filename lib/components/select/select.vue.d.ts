import { DefineComponent } from 'vue';
import { IconPropsType } from '../icon/props';
import { LayerPropsType } from '../layer/props';
declare const _default: DefineComponent<{
    modelValue: {
        type: import("vue").PropType<any>;
        default: null;
    };
    options: {
        type: import("vue").PropType<any[]>;
        default: never[];
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
        validator(value: any): boolean;
    };
    layerProps: {
        type: import("vue").PropType<LayerPropsType>;
        default: () => {};
    };
    height: {
        type: StringConstructor;
        default: null;
    };
    activeType: {
        type: import("vue").PropType<"info" | "success" | "warn" | "error" | "primary">;
        default: string;
        validator(value: any): boolean;
    };
    activeColor: {
        type: StringConstructor;
        default: null;
        validator(value: any): any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterMethod: {
        type: import("vue").PropType<(label: string | string[]) => string>;
        default: null;
    };
    showSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectedIcon: {
        type: import("vue").PropType<string | IconPropsType>;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        type: import("vue").PropType<import("./props").SelectOptionsItemPropsType>;
        default: () => {
            label: string;
            value: string;
        };
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    clear: (...args: any[]) => void;
    change: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<any>;
        default: null;
    };
    options: {
        type: import("vue").PropType<any[]>;
        default: never[];
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
        validator(value: any): boolean;
    };
    layerProps: {
        type: import("vue").PropType<LayerPropsType>;
        default: () => {};
    };
    height: {
        type: StringConstructor;
        default: null;
    };
    activeType: {
        type: import("vue").PropType<"info" | "success" | "warn" | "error" | "primary">;
        default: string;
        validator(value: any): boolean;
    };
    activeColor: {
        type: StringConstructor;
        default: null;
        validator(value: any): any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterMethod: {
        type: import("vue").PropType<(label: string | string[]) => string>;
        default: null;
    };
    showSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectedIcon: {
        type: import("vue").PropType<string | IconPropsType>;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        type: import("vue").PropType<import("./props").SelectOptionsItemPropsType>;
        default: () => {
            label: string;
            value: string;
        };
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: any;
    props: import("./props").SelectOptionsItemPropsType;
    disabled: boolean;
    name: string;
    size: "small" | "medium" | "large";
    icon: string;
    round: boolean;
    height: string;
    options: any[];
    multiple: boolean;
    placeholder: string;
    activeType: "info" | "success" | "warn" | "error" | "primary";
    activeColor: string;
    filterMethod: (label: string | string[]) => string;
    clearable: boolean;
    layerProps: {
        zIndex?: number | undefined;
        modelValue?: boolean | undefined;
        timeout?: number | undefined;
        closable?: boolean | undefined;
        placement?: "left" | "top" | "bottom" | "right" | "top-start" | "top-end" | "left-start" | "left-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | undefined;
        width?: string | undefined;
        offset?: string | undefined;
        background?: string | undefined;
        borderColor?: string | undefined;
        relate?: string | undefined;
        showTriangle?: boolean | undefined;
        animation?: string | undefined;
        shadow?: boolean | undefined;
        border?: boolean | undefined;
    };
    square: boolean;
    selectedIcon: string | IconPropsType;
    showSelected: boolean;
    emptyText: string;
}, {}>;
export default _default;