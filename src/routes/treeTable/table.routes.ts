import type { RouteRecordRaw } from 'vue-router'

export const TreeTableRoutes: RouteRecordRaw[] = [
    {
        path: '/tree-table-base',
        component: () => import('./TreeTableBaseView.vue')
    }
]
