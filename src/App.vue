<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ModalProvider } from 'vue-modal-provider'
</script>

<template>
    <!-- 
        定义vue-modal-provider，来使用useModel
     -->
    <ModalProvider>
        <RouterView />
    </ModalProvider>
</template>
