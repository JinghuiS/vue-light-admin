<script lang="ts" setup>
import type { DataTableProps } from 'primevue/datatable'

defineOptions({
    name: 'LightTable'
})

interface Props extends DataTableProps {}

const props = defineProps<Props>()
</script>

<template>
    <DataTable v-bind="props">
        <template #empty> 暂无数据 </template>
        <slot></slot>
    </DataTable>
</template>
