<template>
    121212
    <Button @click="showLoading">showLoading</Button>
</template>
<script lang="ts" setup>
import { usePrimeModalRef } from '@/shared/components/modal/useModel'

const { showLoading } = usePrimeModalRef()

await new Promise((rs) => {
    setTimeout(() => {
        rs(true)
    }, 5000)
})
</script>
