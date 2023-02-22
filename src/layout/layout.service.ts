import { onUnmounted, ref } from 'vue'

type TabItem = {
    path: string
    label: string
}

export class LayoutService {
    config = ref({
        scale: 14,
        showHeader: true
    })
    tabItem = ref<TabItem[]>([])

    setTabItem = (item: TabItem) => {
        if (
            this.tabItem.value.findIndex((tab) => tab.path === item.path) === -1
        ) {
            this.tabItem.value.push(item)
        }
    }

    hideHeader() {
        this.config.value.showHeader = false
        onUnmounted(() => {
            this.config.value.showHeader = true
        })
    }
    applyScale = () => {
        document.documentElement.style.fontSize = this.config.value.scale + 'px'
    }
}
