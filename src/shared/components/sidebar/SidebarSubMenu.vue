<script lang="ts" setup>
import { useDependency } from 'vdi'
import { computed, ref } from 'vue'
import { SidebarService, type SidebarMenuItemType } from './sidebar.service'
import SidebarGroupLabel from './SidebarGroupLabel.vue'
import SidebarMenuItem from './SidebarMenuItem.vue'

const props = defineProps<{
    path: string
    level: number
    label: string
    groupLabel?: string
    children?: SidebarMenuItemType[]
    subKey?: string
}>()

const sidebarService = useDependency(SidebarService)

const show = ref(false)

function subClick() {
    show.value = !show.value
}

const isActive = computed(() => {
    const activeIndex = sidebarService.activeSubItem.value.findIndex(
        (key) => key === props.path
    )

    if (activeIndex !== -1) {
        props.subKey &&
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            sidebarService.activeSubItem.value.push(props.subKey)
        return true
    }

    return false
})
</script>

<template>
    <div>
        <SidebarGroupLabel v-if="groupLabel" :label="groupLabel" />
        <template v-if="children">
            <button
                @click="subClick"
                :style="{
                    paddingLeft: level * 20 + 'px'
                }"
                :class="{
                    'menu-sub-active': isActive
                }"
                class="inline-flex items-center text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent h-9 px-2 rounded-md w-full justify-start mb-2"
            >
                {{ label }}
            </button>
            <Transition name="layout-submenu">
                <div v-show="show">
                    <SidebarSubMenu
                        v-for="chi in children"
                        :path="chi.path"
                        :label="chi.label"
                        :level="level + 1"
                        :children="chi.children"
                        :key="chi.path"
                        :sub-key="path"
                    />
                </div>
            </Transition>
        </template>
        <SidebarMenuItem
            :style="{
                paddingLeft: level * 20 + 'px'
            }"
            v-else
            :label="label"
            :path="path"
            :sub-key="subKey || '/'"
        >
            {{ label }}
        </SidebarMenuItem>
    </div>
</template>
