<template>
	<div class="mvi-p-2">
		<m-select class="mvi-mb-4" clearable v-model="val" size="small" placeholder="请选择" :options="options"></m-select>
		<m-select class="mvi-mb-4" clearable v-model="val" size="medium" placeholder="请选择" :options="options"></m-select>
		<m-select class="mvi-mb-4" clearable v-model="val" size="large" placeholder="请选择" :options="options"></m-select>
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
document.body.style.backgroundColor = '#1a1a1a'
const val = ref('')
const options = ref([
	{
		label: 'ElementPlus',
		value: 0
	},
	{
		label: 'Antd UI',
		value: 1
	}
])
</script>
<style lang="less"></style>
