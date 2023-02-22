import { vdi, CreateDirective, CREATED_VUE_APP_EXECUTION } from 'vdi'
import type { App } from 'vue'

import { AxiosHttpClient } from '@/shared/utils/http/axios'
import { HttpModule } from '@/shared/utils/http/http.module'
import { HTTP_CLIENT } from '@/shared/utils/http/token'
import { rootServiceList } from '@/core/services'
import { setupI18nService } from '@/i18n'
import { langService } from '@/i18n/i18n.service'

export function setupDI(instance: App) {
    instance.use(
        vdi([
            ...rootServiceList,
            ...HttpModule({}),
            /**
             * Inject http-client
             * 注入http-client
             */
            [HTTP_CLIENT, { useClass: AxiosHttpClient }],
            [CREATED_VUE_APP_EXECUTION, { useClass: CreateDirective }],
            [CREATED_VUE_APP_EXECUTION, { useClass: setupI18nService }]
        ])
    )
}
