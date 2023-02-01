import { routes } from '@/router/routes'
import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * Created router. It is best not to use it directly.
 *
 * 创建路由最好不要直接使用 */
export const _router = createRouter({
    routes,
    history: createWebHashHistory(import.meta.url)
})

/**
 * Mount router
 *
 *
 * 挂载路由
 *
 */
export function setupRouter(instance: App) {
    instance.use(_router)
}
