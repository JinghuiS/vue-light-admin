<script lang="ts" setup>
import { onProvider } from 'vdi'
import { SidebarService, type SidebarMenuItemType } from './sidebar.service'
import SideBarSubMenu from './SidebarSubMenu.vue'

onProvider([[SidebarService]])

const items: SidebarMenuItemType[] = [
    {
        path: 'abc',
        label: '2121',
        groupLabel: '测试',
        children: [
            {
                path: '121',
                label: 'test-2',
                children: [
                    {
                        path: '1212121',
                        label: 'test-2-1'
                    }
                ]
            }
        ]
    },
    {
        path: '1212222',
        label: 'test-3',
        children: [
            {
                path: '121212112121',
                label: 'test-3-1'
            }
        ]
    },
    {
        path: 'abc222',
        label: '12121',
        groupLabel: '测试22'
    }
]
</script>
<template>
    <aside class="w-265px">
        <SideBarSubMenu
            class="px-6 py-2"
            v-for="menuItem in items"
            v-bind="menuItem"
            :key="menuItem.path"
            :level="1"
        ></SideBarSubMenu>
    </aside>
</template>
