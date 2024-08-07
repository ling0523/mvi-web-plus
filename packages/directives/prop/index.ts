import { withInstallDirective } from '@/utils'
import Dap from 'dap-util'
import Prop from './prop'
export type * from './prop'

const vProp = withInstallDirective('prop', {
	mounted(el, binding) {
		const prop = new Prop(el, binding.value)
		prop.init()
		//将对象记录在元素里
		Dap.data.set(el, 'directive:prop', prop)
	},
	updated(el, binding) {
		const prop = Dap.data.get(el, 'directive:prop')
		if (prop) {
			prop.set(binding.value)
		}
	},
	beforeUnmount(el) {
		//获取对象
		const prop: Prop = Dap.data.get(el, 'directive:prop')
		if (prop) {
			//移除绑定在window上的事件
			prop.destroy()
		}
	}
})

export { Prop, vProp, vProp as default }
