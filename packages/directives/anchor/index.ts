import Dap from 'dap-util'
import { App } from 'vue'
import Anchor from './anchor'

Anchor.install = (app: App) => {
	//锚点定位指令
	app.directive('anchor', {
		mounted(el, binding) {
			let options: any = {}
			if (Dap.common.isObject(binding.value)) {
				Object.assign(options, binding.value)
			}
			let anchor = new Anchor(el, options)
			anchor.init()
		}
	})
}
export { Anchor, Anchor as default }
