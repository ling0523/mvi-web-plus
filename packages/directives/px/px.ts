import Dap from 'dap-util'
/**
 * 1px适配实现
 */

export type PxOptionsType = {
	attr?: string
	after?: boolean
	before?: boolean
}

class Px {
	//指定的元素
	private $el: HTMLElement
	//适配的样式名称
	private attr?: string
	//是否after伪类
	private isAfter?: boolean
	//是否before伪类
	private isBefore?: boolean
	//是否已经初始化了
	private hasInit: boolean = false

	constructor(element: HTMLElement, options: PxOptionsType) {
		options = Dap.common.isObject(options) ? options : {}
		this.$el = element
		this.attr = options.attr
		this.isAfter = options.after
		this.isBefore = options.before
	}

	//执行适配
	private handle() {
		//获取设备dpr
		let dpr = Math.round(window.devicePixelRatio || 1)
		//1px值
		let value = Number((1 / dpr).toFixed(2))
		//针对伪类
		if (this.isBefore || this.isAfter) {
			let guid = this.createGuid()
			//生成class名称
			let className = `mvi-directives-px_${guid}`
			//添加该class到元素上
			Dap.element.addClass(this.$el, className)
			//生成style标签
			let style = document.createElement('style')
			if (this.isBefore) {
				style.innerHTML += ` .${className}::before {${this.attr}:${value}px !important;}`
			}
			if (this.isAfter) {
				style.innerHTML += ` .${className}::after {${this.attr}:${value}px !important;}`
			}
			document.querySelector('head')!.appendChild(style)
		} else {
			this.$el.style.setProperty(this.attr!, value + 'px', 'important')
		}
	}

	//生成唯一值
	private createGuid() {
		//获取当前guid，不存在则从0开始
		let guid = Dap.data.get(document.body, 'mvi-directives-px-guid') || 0
		guid++
		Dap.data.set(document.body, 'mvi-directives-px-guid', guid)
		return guid
	}

	//api：初始化方法
	init() {
		if (this.hasInit) {
			return
		}
		this.hasInit = true

		if (!Dap.element.isElement(this.$el)) {
			throw new TypeError('The bound element is not a node element')
		}

		if (typeof this.attr != 'string' || !this.attr) {
			throw new Error('The attribute name is not set')
		}

		if (typeof this.isAfter != 'boolean') {
			this.isAfter = false
		}

		if (typeof this.isBefore != 'boolean') {
			this.isBefore = false
		}

		this.handle()
	}
}

export default Px
