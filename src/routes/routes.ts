import type { RouteRecordRaw } from 'vue-router'
import { TestService } from './testProvider/test.service'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('./TestForm.vue')
    },
    {
        path: '/admin',
        meta: {
            provider: [[TestService]]
        },
        component: () =>
            import('@shared/components/baseProvider/BaseProvider.vue'),
        children: [
            {
                path: '/admin/test',
                component: () => import('./testProvider/TestView.vue')
            }
        ]
    }
]
