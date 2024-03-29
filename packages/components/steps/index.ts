import { App } from 'vue'
import Steps from './steps.vue'

Steps.install = (app: App) => {
	app.component(Steps.name!, Steps)
}

export { Steps, Steps as default }
