<script setup lang="ts">
import type { Component } from 'vue'
import type { ColumnDataType } from './columns-type'
import ColumnSerial from './ColumnSerial.vue'

defineProps<{
    type: ColumnDataType
    data: any
}>()

const columnTypeList: Record<ColumnDataType, Component> = {
    serial: ColumnSerial
}
</script>
<template>
    <component :is="columnTypeList[type]" v-bind="data" />
</template>
