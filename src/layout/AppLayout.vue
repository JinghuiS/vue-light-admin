<script lang="ts" setup>
import { onProvider, useDependency } from 'vdi'
import { onMounted } from 'vue'
import { LayoutService } from './layout.service'

onProvider([[LayoutService]])

const layoutService = useDependency(LayoutService, { self: true })

onMounted(() => {
    layoutService.applyScale()
})
</script>

<template>
    <div class="layout-wrapper">
        <div class="layout-main-container">
            <div class="layout-main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
