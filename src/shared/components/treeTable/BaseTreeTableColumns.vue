<script setup lang="ts">
import type { LightTreeColumnsType } from './columns/columns-type'

defineOptions({
    name: 'LightTreeTableColumns'
})

defineProps<{
    columns: LightTreeColumnsType[]
}>()
</script>

<template>
    <div></div>
</template>
