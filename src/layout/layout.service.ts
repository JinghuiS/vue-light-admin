import { ref } from 'vue'

export class LayoutService {
    config = ref({
        scale: 14
    })

    applyScale = () => {
        document.documentElement.style.fontSize = this.config.value.scale + 'px'
    }
}
