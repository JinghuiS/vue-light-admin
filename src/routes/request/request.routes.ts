import type { RouteRecordRaw } from 'vue-router'

export const RequestRoutes: RouteRecordRaw[] = [
    {
        path: '/request-base',
        component: () => import('./RequestBaseView.vue')
    },
    {
        path: '/request-interceptor',
        component: () => import('./RequestInterceptorView.vue')
    }
]
