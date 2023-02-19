import { onUnmounted, ref } from 'vue'

export class LayoutService {
    config = ref({
        scale: 14,
        showHeader: true
    })

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
