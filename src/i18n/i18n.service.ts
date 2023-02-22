import { useLocalStorage } from '@vueuse/core'
import { useDependency } from 'vdi'
import { ref } from 'vue'

export class langService {
    private i18nLang = useLocalStorage<string>('light-i18n', '')
    lang = ref(this.i18nLang.value)

    setLang(lang: string) {
        this.i18nLang.value = lang
        this.lang.value = lang
    }
}

export function useI18nService() {
    const service = useDependency(langService)
    return {
        lang: service.lang,
        setLang: service.setLang.bind(service)
    }
}
