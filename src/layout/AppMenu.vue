<script lang="ts" setup>
import type { SidebarMenuItemType } from '@/shared/components/sidebar/sidebar.service'
import SidebarGroup from '@/shared/components/sidebar/SidebarGroup.vue'

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
    <SidebarGroup :items="items" />
</template>
