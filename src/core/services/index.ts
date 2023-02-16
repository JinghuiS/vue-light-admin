import type { Dependency } from '@wendellhu/redi'
import { GlobalConfigService } from './globalConfig.service'
import { PermissionModule } from './permission'

/**
 * Inject into the global service
 *
 *
 * 注入到全局的服务
 */
export const rootServiceList: Dependency[] = [
    [GlobalConfigService],
    ...PermissionModule
]
