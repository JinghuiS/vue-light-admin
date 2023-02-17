<script lang="ts" setup>
import SidebarGroup from '@/shared/components/sidebar/SidebarGroup.vue'
import { PermissionService } from '@/core/services/permission/permission.service'
import { useDependency } from 'vdi'

const permissionService = useDependency(PermissionService)
</script>
<template>
    <SidebarGroup
        :router-module="true"
        :items="permissionService.permissionMenuList.value"
    />
</template>
