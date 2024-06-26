import { App, ComponentInternalInstance } from 'vue';
import { ToastPropsType } from './props';

export type * from './props';
type ToastType = {
    $el?: HTMLElement;
    $instance?: App<Element>;
    $vm?: ComponentInternalInstance;
    initParams: (options: string | ToastPropsType) => ToastPropsType;
    install: (app: App) => void;
    showToast: (options: string | ToastPropsType) => Promise<void>;
    hideToast: () => void;
};
declare const Toast: ToastType;
export { Toast, Toast as default };
