// \src\i18n\index.ts
import { createI18n } from 'vue-i18n'
// 语言包
import zh from './lang/zh-cn'
import en from './lang/en'
import { langService } from './i18n.service'
import { VUE_APP } from 'vdi'
import { Inject } from '@wendellhu/redi'
import type { App } from 'vue'

export class setupI18nService {
    constructor(
        @Inject(VUE_APP) public app: App,
        @Inject(langService) public lang: langService
    ) {
        const i18n = createI18n({
            legacy: false,
            locale: this.lang.lang.value || 'zh-CN',
            messages: {
                'zh-CN': zh,
                'en-US': en
            }
        })
        app.use(i18n)
    }
}
