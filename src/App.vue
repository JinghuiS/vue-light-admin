<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ModalProvider } from 'vue-modal-provider'
</script>

<template>
    <ModalProvider>
        <RouterView />
    </ModalProvider>
</template>
