import { vdi } from 'vdi'
import type { App } from 'vue'

import { AxiosHttpClient } from '@/shared/utils/http/axios'
import { HttpModule } from '@/shared/utils/http/http.module'
import { HTTP_CLIENT } from '@/shared/utils/http/token'
import { rootServiceList } from '@/core/services'

export function setupDI(instance: App) {
    instance.use(
        vdi([
            ...rootServiceList,
            ...HttpModule({}),
            /**
             * Inject http-client
             * 注入http-client
             */
            [HTTP_CLIENT, { useClass: AxiosHttpClient }]
        ])
    )
}
