<script setup lang="ts">
defineProps<{ index: number }>()
</script>
<template>
    <div>{{ index + 1 }}</div>
</template>
