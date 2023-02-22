<script lang="ts" setup>
import { computed, onMounted, ref, watch, type CSSProperties } from 'vue'
import { useTemplateRefsList, watchArray, watchOnce } from '@vueuse/core'
import { useDependency } from 'vdi'
import { LayoutService } from './layout.service'
import { useRoute, useRouter } from 'vue-router'

type TabItem = {
    path: string
    label: string
}

const refs = useTemplateRefsList<HTMLDivElement>()

const layoutService = useDependency(LayoutService)

const router = useRouter()

const route = useRoute()

const activeTab = ref({
    translateX: 5,
    width: 100
})

const activeTabOffsetStyle = computed<CSSProperties>(() => ({
    transform: `translateX(${activeTab.value.translateX}px)`,
    width: activeTab.value.width + 'px'
}))

function getActiveTab(index: number) {
    activeTab.value.translateX = refs.value[index].offsetLeft
    activeTab.value.width = refs.value[index].clientWidth
}

function onChangTab(tab: TabItem, index: number) {
    getActiveTab(index)
    router.push(tab.path)
}

watch(
    () => route.path,
    () => {
        const index = layoutService.tabItem.value.findIndex(
            (item) => item.path === route.path
        )
        if (index !== -1) {
            getActiveTab(index)
        }
    }
)
watchArray(refs.value, () => {
    if (refs.value.length === 1) {
        getActiveTab(0)
    }
})
</script>
<template>
    <div
        class="inline-flex relative items-center justify-center rounded-md bg-slate-100 p-5px dark:bg-slate-800"
        role="tablist"
    >
        <div
            :ref="refs.set"
            v-for="(item, index) in layoutService.tabItem.value"
            :key="item.path"
            @click="onChangTab(item, index)"
            class="inline-flex cursor-pointer min-w-[100px] z-10 items-center justify-center rounded-[0.185rem] px-15px py-5px text-sm font-medium text-slate-700 transition-all disabled:pointer-events-none disabled:opacity-50 dark:text-slate-200"
        >
            {{ item.label }}
        </div>

        <div
            class="absolute transition-transform bg-white rounded-[0.185rem] text-slate-900 left-0 h-28px shadow-sm dark:bg-slate-900 dark:text-slate-100"
            :style="activeTabOffsetStyle"
        />
    </div>
</template>
