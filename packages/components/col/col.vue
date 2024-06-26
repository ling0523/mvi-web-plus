<template>
	<Col :class="colClass">
		<slot></slot>
	</Col>
</template>
<script setup lang="ts">
import Dap from 'dap-util'
import { ComponentInternalInstance, computed, defineComponent, h, inject, ref, useSlots } from 'vue'
import { parentIsMatch } from '@/utils'
import { ColProps, ColResponsiveType } from './props'

defineOptions({
	name: 'm-col'
})

const row = inject<ComponentInternalInstance | null>('row', null)

parentIsMatch(ref([]), row, 'm-row', ['Row', 'Col'])

const props = defineProps(ColProps)

const colClass = computed<string[]>(() => {
	let cls = []
	if (props.span) {
		cls.push('mvi-col-' + props.span)
	}
	if (props.offset) {
		cls.push('mvi-col-offset-' + props.offset)
	}

	if (Dap.common.isObject(props.xs)) {
		if (Dap.number.isNumber((<ColResponsiveType>props.xs).span)) {
			cls.push('mvi-col-xs-' + (<ColResponsiveType>props.xs).span)
		}
		if (Dap.number.isNumber((<ColResponsiveType>props.xs).offset)) {
			cls.push('mvi-col-offset-xs-' + (<ColResponsiveType>props.xs).offset)
		}
	} else if (Dap.number.isNumber(props.xs)) {
		cls.push('mvi-col-xs-' + props.xs)
	}

	if (Dap.common.isObject(props.sm)) {
		if (Dap.number.isNumber((<ColResponsiveType>props.sm).span)) {
			cls.push('mvi-col-sm-' + (<ColResponsiveType>props.sm).span)
		}
		if (Dap.number.isNumber((<ColResponsiveType>props.sm).offset)) {
			cls.push('mvi-col-offset-sm-' + (<ColResponsiveType>props.sm).offset)
		}
	} else if (Dap.number.isNumber(props.sm)) {
		cls.push('mvi-col-sm-' + props.sm)
	}

	if (Dap.common.isObject(props.md)) {
		if (Dap.number.isNumber((<ColResponsiveType>props.md).span)) {
			cls.push('mvi-col-md-' + (<ColResponsiveType>props.md).span)
		}
		if (Dap.number.isNumber((<ColResponsiveType>props.md).offset)) {
			cls.push('mvi-col-offset-md-' + (<ColResponsiveType>props.md).offset)
		}
	} else if (Dap.number.isNumber(props.md)) {
		cls.push('mvi-col-md-' + props.md)
	}

	if (Dap.common.isObject(props.lg)) {
		if (Dap.number.isNumber((<ColResponsiveType>props.lg).span)) {
			cls.push('mvi-col-lg-' + (<ColResponsiveType>props.lg).span)
		}
		if (Dap.number.isNumber((<ColResponsiveType>props.lg).offset)) {
			cls.push('mvi-col-offset-lg-' + (<ColResponsiveType>props.lg).offset)
		}
	} else if (Dap.number.isNumber(props.lg)) {
		cls.push('mvi-col-lg-' + props.lg)
	}

	if (Dap.common.isObject(props.xl)) {
		if (Dap.number.isNumber((<ColResponsiveType>props.xl).span)) {
			cls.push('mvi-col-xl-' + (<ColResponsiveType>props.xl).span)
		}
		if (Dap.number.isNumber((<ColResponsiveType>props.xl).offset)) {
			cls.push('mvi-col-offset-xl-' + (<ColResponsiveType>props.xl).offset)
		}
	} else if (Dap.number.isNumber(props.xl)) {
		cls.push('mvi-col-xl-' + props.xl)
	}

	return cls
})

const Col = defineComponent(() => {
	return () => {
		return h(
			props.tag,
			{},
			{
				default: useSlots().default
			}
		)
	}
})
</script>
<style scoped src="./col.less"></style>
