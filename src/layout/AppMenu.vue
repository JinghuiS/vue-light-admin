<script lang="ts" setup>
import SidebarGroup from '@/shared/components/sidebar/SidebarGroup.vue'
import { PermissionService } from '@/core/services/permission/permission.service'
import { useDependency } from 'vdi'

const permissionService = useDependency(PermissionService)
</script>
<template>
    <div class="h-screen overflow-y-scroll">
        <div class="px-8 py-6">
            <p class="flex items-center text-2xl font-semibold tracking-tight">
                Vue Light Admin
            </p>
        </div>
        <SidebarGroup
            :router-module="true"
            :items="permissionService.permissionMenuList.value"
        />
    </div>
</template>
