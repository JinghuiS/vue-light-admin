import { useDependency } from 'vdi'
import { HTTP_CLIENT } from './token'

/**
 * 通过vdi HTTP_CLIENT令牌获取全局注入的请求库
 */
export function useHttp() {
    return useDependency(HTTP_CLIENT)
}
