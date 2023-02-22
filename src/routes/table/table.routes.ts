import type { RouteRecordRaw } from 'vue-router'

export const TableRoutes: RouteRecordRaw[] = [
    {
        path: '/table-base',
        component: () => import('./TableBaseView.vue')
    }
]
