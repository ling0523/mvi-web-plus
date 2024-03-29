import { App } from 'vue'
import Dap from 'dap-util'
//解决ios系统下css伪类无效的问题
Dap.event.on(window, 'touchstart.ios', () => {})

/***** 全局默认样式 *****/
import './css/mvi-default.less'
/***** 辅助样式 *****/
import './css/mvi-support.less'
/***** 指令 *****/
import { Anchor } from './directives/anchor'
import { Drag } from './directives/drag'
import { Observe } from './directives/observe'
import { Prop } from './directives/prop'
import { Px } from './directives/px'
import { Resize } from './directives/resize'
import { Ripple } from './directives/ripple'
import { Scroll } from './directives/scroll'
import { Spy } from './directives/spy'
import { Upload } from './directives/upload'
/***** 组件 *****/
import { Icon } from './components/icon'
import { Badge } from './components/badge'
import { Button } from './components/button'
import { Triangle } from './components/triangle'
import { Layer } from './components/layer'
import { Label } from './components/label'
import { Input } from './components/input'
import { Loading } from './components/loading'
import { LoadingBar } from './components/loading-bar'
import { Msgbox } from './components/msgbox'
import { Divider } from './components/divider'
import { Cell } from './components/cell'
import { CellGroup } from './components/cell-group'
import { Checkbox } from './components/checkbox'
import { Radio } from './components/radio'
import { Sign } from './components/sign'
import { Roll } from './components/roll'
import { Row } from './components/row'
import { Col } from './components/col'
import { Autocomplete } from './components/autocomplete'
import { Overlay } from './components/overlay'
import { Popup } from './components/popup'
import { Dropdown } from './components/dropdown'
import { Tooltip } from './components/tooltip'
import { TransitionSlide } from './components/transition-slide'
import { Switch } from './components/switch'
import { Navbar } from './components/navbar'
import { Notify } from './components/notify'
import { Actionsheet } from './components/actionsheet'
import { Calendar } from './components/calendar'
import { CircleProgress } from './components/circle-progress'
import { Collapse } from './components/collapse'
import { CollapseItem } from './components/collapse-item'
import { DateChooser } from './components/date-chooser'
import { DateNativePicker } from './components/date-native-picker'
import { Picker } from './components/picker'
import { Progress } from './components/progress'
import { Slider } from './components/slider'
import { DatePicker } from './components/date-picker'
import { Field } from './components/field'
import { Form } from './components/form'
import { FormEl } from './components/form-el'
import { Image } from './components/image'
import { ColorPicker } from './components/color-picker'
import { List } from './components/list'
import { Modal } from './components/modal'
import { Page } from './components/page'
import { Search } from './components/search'
import { Select } from './components/select'
import { Skeleton } from './components/skeleton'
import { Steps } from './components/steps'
import { Step } from './components/step'
import { Stepper } from './components/stepper'
import { NumberKeyboard } from './components/number-keyboard'
import { Toast } from './components/toast'
import { PullRefresh } from './components/pull-refresh'
import { Dialog } from './components/dialog'
import { SwipeCell } from './components/swipe-cell'
import { Tabbar } from './components/tabbar'
import { Table } from './components/table'
import { Tabs } from './components/tabs'
import { Tab } from './components/tab'
import { Carousel } from './components/carousel'
import { CarouselItem } from './components/carousel-item'
import { RichImage } from './components/rich-image'
import { ImagePreview } from './components/image-preview'

/***** 按需导出 *****/
export * from './directives/anchor'
export * from './directives/drag'
export * from './directives/observe'
export * from './directives/prop'
export * from './directives/px'
export * from './directives/resize'
export * from './directives/ripple'
export * from './directives/scroll'
export * from './directives/spy'
export * from './directives/upload'
export * from './components/icon'
export * from './components/badge'
export * from './components/button'
export * from './components/triangle'
export * from './components/layer'
export * from './components/label'
export * from './components/input'
export * from './components/loading'
export * from './components/loading-bar'
export * from './components/msgbox'
export * from './components/divider'
export * from './components/cell'
export * from './components/cell-group'
export * from './components/checkbox'
export * from './components/radio'
export * from './components/sign'
export * from './components/roll'
export * from './components/row'
export * from './components/col'
export * from './components/autocomplete'
export * from './components/overlay'
export * from './components/popup'
export * from './components/dropdown'
export * from './components/tooltip'
export * from './components/transition-slide'
export * from './components/switch'
export * from './components/navbar'
export * from './components/notify'
export * from './components/actionsheet'
export * from './components/calendar'
export * from './components/circle-progress'
export * from './components/collapse'
export * from './components/collapse-item'
export * from './components/date-chooser'
export * from './components/date-native-picker'
export * from './components/picker'
export * from './components/progress'
export * from './components/slider'
export * from './components/date-picker'
export * from './components/field'
export * from './components/form'
export * from './components/form-el'
export * from './components/image'
export * from './components/color-picker'
export * from './components/list'
export * from './components/modal'
export * from './components/page'
export * from './components/search'
export * from './components/select'
export * from './components/skeleton'
export * from './components/steps'
export * from './components/step'
export * from './components/stepper'
export * from './components/number-keyboard'
export * from './components/toast'
export * from './components/pull-refresh'
export * from './components/dialog'
export * from './components/swipe-cell'
export * from './components/tabbar'
export * from './components/table'
export * from './components/tabs'
export * from './components/tab'
export * from './components/carousel'
export * from './components/carousel-item'
export * from './components/rich-image'
export * from './components/image-preview'

export const components = {
	Anchor,
	Drag,
	Observe,
	Prop,
	Px,
	Resize,
	Ripple,
	Scroll,
	Spy,
	Upload,
	Icon,
	Badge,
	Button,
	Triangle,
	Layer,
	Label,
	Input,
	Loading,
	LoadingBar,
	Msgbox,
	Divider,
	Cell,
	CellGroup,
	Checkbox,
	Radio,
	Sign,
	Roll,
	Row,
	Col,
	Autocomplete,
	Overlay,
	Popup,
	Dropdown,
	Tooltip,
	TransitionSlide,
	Switch,
	Navbar,
	Notify,
	Actionsheet,
	Calendar,
	CircleProgress,
	Collapse,
	CollapseItem,
	DateChooser,
	DateNativePicker,
	Picker,
	Progress,
	Slider,
	DatePicker,
	Field,
	Form,
	FormEl,
	Image,
	ColorPicker,
	List,
	Modal,
	Page,
	Search,
	Select,
	Skeleton,
	Steps,
	Step,
	Stepper,
	NumberKeyboard,
	Toast,
	PullRefresh,
	Dialog,
	SwipeCell,
	Tabbar,
	Table,
	Tabs,
	Tab,
	Carousel,
	CarouselItem,
	RichImage,
	ImagePreview
}

/***** 全局导出 *****/
const install = (app: App) => {
	//注册组件和指令
	Object.values(components).map(component => {
		component.install(app)
	})
}

/***** 版本号 *****/
const version = '1.9.9'

const stdin_default = {
	install,
	version
}

export { stdin_default as default, install, version }
