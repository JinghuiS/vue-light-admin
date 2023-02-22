<script lang="ts" setup>
import { onProvider, useDependency } from 'vdi'
import { onMounted } from 'vue'
import AppHeader from './AppHeader.vue'
import AppMenu from './AppMenu.vue'
import { LayoutService } from './layout.service'

onProvider([[LayoutService]])

const layoutService = useDependency(LayoutService, { self: true })
</script>

<template>
    <div class="layout-wrapper">
        <AppMenu />
        <div
            class="layout-main-container border-solid border-l border-l-slate-200"
        >
            <div class="layout-main h-full px-8 py-6">
                <AppHeader v-if="layoutService.config.value.showHeader" />
                <router-view class="mt-2"></router-view>
            </div>
        </div>
    </div>
</template>
