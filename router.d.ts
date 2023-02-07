import { Dependency } from '@wendellhu/redi'
import 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        // 是可选的
        provider?: Dependency<any>[]
    }
}
