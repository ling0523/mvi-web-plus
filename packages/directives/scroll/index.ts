import Dap from 'dap-util'
import { App } from 'vue'
import Scroll from './scroll'

Scroll.install = (app: App) => {
	//监听元素滚动条到达顶部或者底部
	app.directive('scroll', {
		mounted(el, binding) {
			let options = {}
			if (Dap.common.isObject(binding.value)) {
				Object.assign(options, binding.value)
			}
			let scroll = new Scroll(el, options)
			scroll.init()
		}
	})
}

export { Scroll, Scroll as default }
