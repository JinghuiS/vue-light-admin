import type { Injector } from '@wendellhu/redi'
import { getGlobalInjector } from 'vdi'
import { createApp, type Component } from 'vue'
import { PermissionService } from '../services/permission/permission.service'
import { StartupService } from '../services/startup/startup.service'
import { setupComponents } from './components/setupComponents'
import { setupDI } from './di/setupDI'
import { setupRouter } from './router/setupRouter'

/**
 * Create a vue instance.
 *
 * If the promise is returned, we can do some operations before the vue instance is mounted
 *
 * @param {Component} root component.
 *
 * @return App Instance.
 *
 *
 * 创建vue实例
 *
 * 返回promise的话，我们可以在vue实例挂载之前做一些操作
 *
 * @param {Component} 根组件.
 *
 * @return App Instance.
 */
export async function setupApp(app: Component) {
    const instance = createApp(app)
    setupDI(instance)
    setupRouter(instance)
    setupComponents(instance)

    const inject = getGlobalInjector(instance) as Injector

    const startupService = inject.get(StartupService)

    await startupService.load()

    return instance
}
