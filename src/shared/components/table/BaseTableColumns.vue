<script setup lang="ts">
import type { LightColumnsType } from './columns/columns-type'

defineOptions({
    name: 'LightTableColumns'
})

defineProps<{
    columns: LightColumnsType[]
}>()
</script>

<template>
    <div></div>
</template>
