<script lang="ts" setup>
import { onProvider } from 'vdi'
import { useRoute } from 'vue-router'

const { meta } = useRoute()
if (meta.provider) {
    onProvider(meta.provider)
}
</script>

<template>
    <RouterView></RouterView>
</template>
