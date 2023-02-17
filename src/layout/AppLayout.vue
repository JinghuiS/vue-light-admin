<script lang="ts" setup>
import { onProvider, useDependency } from 'vdi'
import { onMounted } from 'vue'
import AppMenu from './AppMenu.vue'
import { LayoutService } from './layout.service'

onProvider([[LayoutService]])

const layoutService = useDependency(LayoutService, { self: true })

onMounted(() => {
    layoutService.applyScale()
})
</script>

<template>
    <div class="layout-wrapper">
        <AppMenu />
        <div
            class="layout-main-container border-solid border-l border-l-slate-200"
        >
            <div class="layout-main h-full px-8 py-6">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
