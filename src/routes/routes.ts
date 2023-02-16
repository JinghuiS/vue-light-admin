import AppLayoutVue from '@/layout/AppLayout.vue'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: AppLayoutVue,
        children: [
            {
                path: '/',
                component: () => import('./TestForm.vue')
            }
        ]
    }
]
