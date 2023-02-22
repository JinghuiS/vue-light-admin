<script lang="ts" setup>
import SidebarGroup from '@/shared/components/sidebar/SidebarGroup.vue'
import { PermissionService } from '@/core/services/permission/permission.service'
import { useDependency } from 'vdi'
import { LayoutService } from './layout.service'

const permissionService = useDependency(PermissionService)

const layoutService = useDependency(LayoutService)
</script>
<template>
    <div class="h-screen overflow-y-scroll">
        <div class="px-8 py-6">
            <p class="flex items-center text-2xl font-semibold tracking-tight">
                Vue Light Admin
            </p>
        </div>
        <SidebarGroup
            @active-menu="layoutService.setTabItem"
            :router-module="true"
            :items="permissionService.permissionMenuList.value"
        />
    </div>
</template>
