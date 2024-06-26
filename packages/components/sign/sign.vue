<template>
	<canvas class="mvi-sign" ref="canvasRef" @mousedown="canvasMouseDown" @touchstart="canvasTouchStart" @touchmove="canvasTouchMove" @touchend="canvasTouchEnd" @mouseleave="canvasMouseLeave" @mouseenter="canvasMouseEnter" />
</template>
<script setup lang="ts">
import Dap from 'dap-util'
import { getCurrentInstance, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { SignProps } from './props'
import { Observe } from '@/directives/observe'
import { isDark } from '@/utils'

defineOptions({
	name: 'm-sign'
})

//获取实例
const instance = getCurrentInstance()!

//属性
const props = defineProps(SignProps)

//是否正在签名
const drawing = ref<boolean>(false)
//鼠标是否在canvas中
const inCanvas = ref<boolean>(false)
//canvas元素
const canvasRef = ref<HTMLCanvasElement | null>(null)
//observe对象
const observe = ref<Observe | null>(null)
//颜色
const innerColor = ref<string>('')
//背景色
const innerBackground = ref<string>('')

//鼠标按下
const canvasMouseDown = (e: MouseEvent) => {
	drawing.value = true
	inCanvas.value = true
	const ctx = canvasRef.value!.getContext('2d')!
	const rect = Dap.element.getElementBounding(canvasRef.value!)
	ctx.beginPath()
	ctx.moveTo(e.pageX - rect.left, e.pageY - rect.top)
}
//鼠标移动
const canvasMouseMove = (e: Event) => {
	if (drawing.value && inCanvas.value) {
		const ctx = canvasRef.value!.getContext('2d')!
		const rect = Dap.element.getElementBounding(canvasRef.value!)
		ctx.lineTo((<MouseEvent>e).pageX - rect.left, (<MouseEvent>e).pageY - rect.top)
		ctx.strokeStyle = innerColor.value
		ctx.lineWidth = Dap.element.rem2px(props.width)
		ctx.stroke()
	}
}
//鼠标松开
const canvasMouseUp = () => {
	drawing.value = false
	const ctx = canvasRef.value!.getContext('2d')!
	ctx.closePath()
}
//鼠标进入canvas区域
const canvasMouseEnter = (e: MouseEvent) => {
	if (drawing.value) {
		inCanvas.value = true
		const ctx = canvasRef.value!.getContext('2d')!
		const rect = Dap.element.getElementBounding(canvasRef.value!)
		ctx.beginPath()
		ctx.moveTo(e.pageX - rect.left, e.pageY - rect.top)
	}
}
//鼠标离开canvas区域
const canvasMouseLeave = () => {
	if (drawing.value) {
		const ctx = canvasRef.value!.getContext('2d')!
		ctx.closePath()
		inCanvas.value = false
	}
}
//触摸按下
const canvasTouchStart = (e: TouchEvent) => {
	const ctx = canvasRef.value!.getContext('2d')!
	const rect = Dap.element.getElementBounding(canvasRef.value!)
	ctx.beginPath()
	ctx.moveTo(e.targetTouches[0].pageX - rect.left, e.targetTouches[0].pageY - rect.top)
}
//触摸移动
const canvasTouchMove = (e: TouchEvent) => {
	if (e.cancelable) {
		e.preventDefault()
	}
	const ctx = canvasRef.value!.getContext('2d')!
	const rect = Dap.element.getElementBounding(canvasRef.value!)
	ctx.lineTo(e.targetTouches[0].pageX - rect.left, e.targetTouches[0].pageY - rect.top)
	ctx.strokeStyle = innerColor.value
	ctx.lineWidth = Dap.element.rem2px(props.width)
	ctx.stroke()
}
//触摸结束
const canvasTouchEnd = () => {
	const ctx = canvasRef.value!.getContext('2d')!
	ctx.closePath()
}
//api：清除画布
const clear = () => {
	const ctx = canvasRef.value!.getContext('2d')!
	ctx.beginPath()
	ctx.clearRect(0, 0, canvasRef.value!.width, canvasRef.value!.height)
	ctx.rect(0, 0, canvasRef.value!.width, canvasRef.value!.height)
	ctx.fillStyle = innerBackground.value
	ctx.fill()
	ctx.closePath()
}
//api：获取图片文件
const getImage = () => {
	return canvasRef.value!.toDataURL('image/png')
}
//初始化
const init = () => {
	canvasRef.value!.setAttribute('width', Dap.element.getCssStyle(canvasRef.value!, 'width'))
	canvasRef.value!.setAttribute('height', Dap.element.getCssStyle(canvasRef.value!, 'height'))
	clear()
	//添加鼠标移动事件
	Dap.event.on(document.documentElement, `mousemove.sign_${instance.uid}`, canvasMouseMove)
	//添加鼠标松开事件
	Dap.event.on(document.documentElement, `mouseup.sign_${instance.uid}`, canvasMouseUp)
}

watch(
	() => props.color,
	newVal => {
		innerColor.value = newVal || (isDark() ? '#fff' : '#505050')
	},
	{
		immediate: true
	}
)

watch(
	() => props.background,
	newVal => {
		innerBackground.value = newVal || (isDark() ? '#1a1a1a' : '#fff')
	},
	{
		immediate: true
	}
)

watch(
	() => innerBackground.value,
	() => {
		//背景色改变，则清除一次画布
		clear()
	}
)

onMounted(() => {
	//深色模式监听
	observe.value = new Observe(document.documentElement, {
		attributes: true,
		childList: false,
		subtree: false,
		attributeNames: ['data-mvi-dark'],
		attributesChange: () => {
			innerColor.value = props.color || (isDark() ? '#fff' : '#505050')
			innerBackground.value = props.background || (isDark() ? '#1a1a1a' : '#fff')
		}
	})
	observe.value.init()
	//初始化
	init()
})

onBeforeUnmount(() => {
	//移除添加在documentElement上的鼠标事件
	Dap.event.off(document.documentElement, `mousemove.sign_${instance.uid} mouseup.sign_${instance.uid}`)
	//移除深色模式监听
	observe.value?.destroy()
})

defineExpose({
	getImage,
	clear
})
</script>

<style scoped src="./sign.less"></style>
