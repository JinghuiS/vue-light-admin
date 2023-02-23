<script setup lang="ts">
import { elementRef } from '@/shared/utils/elementRef'
import type Menu from 'primevue/menu'
import type { MenuItem } from 'primevue/menuitem'

const menuRef = elementRef<typeof Menu>()

const menuList: MenuItem[] = [
    {
        label: '退出登录',
        icon: 'i-tabler-anchor'
    }
]

function toggle(event: Event) {
    menuRef.value?.toggle(event)
}
</script>
<template>
    <div class="flex justify-center items-center">
        <h3 class="text-sm font-semibold">欢迎回来</h3>
        <Avatar
            aria-haspopup="true"
            aria-controls="overlay_menu"
            class="cursor-pointer ml-4"
            image="https://avatars.githubusercontent.com/u/37319625?v=4"
            @click="toggle"
        />
        <Menu :model="menuList" ref="menuRef" popup />
    </div>
</template>
