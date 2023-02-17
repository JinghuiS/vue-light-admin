import type { RouteRecordRaw } from 'vue-router'

export const PermissionRoutes: RouteRecordRaw[] = [
    {
        path: '/permission-button',
        component: () => import('./PermissionButtonView.vue')
    }
]
