import AppLayoutVue from '@/layout/AppLayout.vue'
import type { RouteRecordRaw } from 'vue-router'
import { PermissionRoutes } from './permission/permission.routes'
import { RequestRoutes } from './request/request.routes'
import { TableRoutes } from './table/table.routes'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: AppLayoutVue,
        redirect: '/welcome',
        children: [
            {
                path: '/welcome',
                component: () => import('./welcome/WelcomeView.vue')
            },
            ...PermissionRoutes,
            ...TableRoutes,
            ...RequestRoutes
        ]
    }
]
