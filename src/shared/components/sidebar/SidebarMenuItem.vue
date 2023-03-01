<script lang="ts" setup>
import { useDependency } from 'vdi'
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { SidebarService } from './sidebar.service'

const props = defineProps<{
    subKey: string
    label: string
    path: string
    routerModule?: boolean
}>()

const router = useRouter()
const route = useRoute()
const sidebarService = useDependency(SidebarService)

function menuItemClick() {
    if (sidebarService.activeItem.value === props.path) {
        return
    }
    sidebarService.activeSubItem.value = []
    sidebarService.activeItem.value = props.path
    sidebarService.activeSubItem.value.push(props.subKey)

    if (props.routerModule && props.path) {
        sidebarService.activeMenuItem.trigger(props)

        router.push(props.path)
    }
}

const isActive = computed(() => sidebarService.activeItem.value === props.path)

watch(
    () => route.path,
    () => {
        if (route.path === props.path) {
            sidebarService.activeSubItem.value = []
            sidebarService.activeItem.value = props.path
            sidebarService.activeSubItem.value.push(props.subKey)
        }
    }
)

onMounted(() => {
    if (route.path === props.path) {
        sidebarService.activeSubItem.value = []
        sidebarService.activeItem.value = props.path
        sidebarService.activeSubItem.value.push(props.subKey)
        sidebarService.activeMenuItem.trigger(props)
    }
})
</script>

<template>
    <div
        @click="menuItemClick"
        :class="{
            'menu-item-active': isActive
        }"
        class="cursor-pointer inline-flex items-center text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent h-9 px-2 rounded-md w-full justify-start"
    >
        {{ label }}
    </div>
</template>
