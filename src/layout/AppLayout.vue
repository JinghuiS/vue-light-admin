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
            class="layout-main-container flex flex-1 h-screen border-solid border-l border-l-slate-200"
        >
            <AppHeader
                class="px-8 py-6"
                v-if="layoutService.config.value.showHeader"
            />
            <div class="layout-main flex-1 overflow-y-scroll px-8 py-6">
                <router-view class="mt-2"></router-view>
            </div>
        </div>
    </div>
</template>
