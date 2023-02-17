<script lang="ts" setup>
import { onProvider } from 'vdi'
import { SidebarService, type SidebarMenuItemType } from './sidebar.service'
import SideBarSubMenu from './SidebarSubMenu.vue'

defineProps<{
    items: SidebarMenuItemType[]
    routerModule?: boolean
}>()

onProvider([[SidebarService]])
</script>
<template>
    <aside class="w-265px">
        <SideBarSubMenu
            :routerModule="routerModule"
            class="px-6 py-2"
            v-for="menuItem in items"
            v-bind="menuItem"
            :key="menuItem.path"
            :level="1"
        ></SideBarSubMenu>
    </aside>
</template>
