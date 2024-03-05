import { App, createApp } from 'vue'
import Dap from 'dap-util'
import MsgboxComponent from './msgbox.vue'

interface MsgboxType {
	initParams: (options: any) => any
	msgbox: (options: any) => void
	install: (app: App) => void
}

const Msgbox: MsgboxType = {
	//初始化参数
	initParams: (options: any) => {
		let opts: any = {}
		if (Dap.common.isObject(options)) {
			opts.message = options.message
			opts.timeout = options.timeout
			opts.animation = options.animation
			opts.zIndex = options.zIndex
			opts.color = options.color
			opts.background = options.background
		} else {
			opts.message = options
		}
		return opts
	},

	//弹窗调用
	msgbox: (options: any) => {
		return new Promise<void>(resolve => {
			let opts = Msgbox.initParams(options)
			let mountNode = Dap.element.string2dom('<div></div>')
			document.body.appendChild(mountNode)
			const instance = createApp(MsgboxComponent, {
				...opts,
				__remove: () => {
					instance.unmount()
					mountNode.remove()
					resolve()
				}
			})
			instance.mount(mountNode)
		})
	},

	//注册函数
	install: (app: App) => {
		app.config.globalProperties.$msgbox = Msgbox.msgbox
		app.provide('$msgbox', Msgbox.msgbox)
	}
}

export { Msgbox, Msgbox as default }