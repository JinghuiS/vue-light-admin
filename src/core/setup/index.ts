import { AxiosHttpClient } from '@/shared/utils/http/axios'
import { HttpModule } from '@/shared/utils/http/http.module'
import { HTTP_CLIENT } from '@/shared/utils/http/token'
import { vdi } from 'vdi'
import { createApp, type Component } from 'vue'
import { GlobalService } from '../services/global.service'
import { setupComponents } from './components/setupComponents'
import { setupRouter } from './router/setupRouter'

/**
 * Created Vue Instance.
 *
 * Return the promise, where you can do some request actions.
 *
 * @param {Component} root component.
 *
 * @return App Instance.
 *
 *
 * 创建vue实例
 *
 * 返回promise的话，我们可以在vue实例挂载之前发送一些请求
 *
 * @param {Component} 根组件.
 *
 * @return App Instance.
 */
export async function setupApp(app: Component) {
    const instance = createApp(app)
    instance.use(
        vdi([
            [GlobalService],
            ...HttpModule({}),
            /**
             * Inject http-client
             * 注入http-client
             */
            [HTTP_CLIENT, { useClass: AxiosHttpClient }]
        ])
    )
    setupRouter(instance)
    setupComponents(instance)
    return instance
}
