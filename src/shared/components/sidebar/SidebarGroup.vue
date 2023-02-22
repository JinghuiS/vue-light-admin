<script lang="ts" setup>
import { onProvider, useDependency } from 'vdi'
import { SidebarService, type SidebarMenuItemType } from './sidebar.service'
import SideBarSubMenu from './SidebarSubMenu.vue'

defineProps<{
    items: SidebarMenuItemType[]
    routerModule?: boolean
}>()

const emit = defineEmits<{
    (event: 'active-menu', item: { label: string; path: string }): void
}>()

onProvider([[SidebarService]])

const sidebarService = useDependency(SidebarService, { self: true })

sidebarService.activeMenuItem.on((v) => {
    emit('active-menu', v)
})
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
