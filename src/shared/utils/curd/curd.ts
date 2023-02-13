import { CurdBasePageService } from './page'
import { Inject } from '@wendellhu/redi'
import { HTTP_CLIENT } from '../http/token'
import type { HttpClientImplements } from '../http/http-type'
export abstract class BaseCurd<T extends object> {
    public path: string = ''

    public page

    constructor(@Inject(HTTP_CLIENT) public http: HttpClientImplements) {
        const baseData = setParam(this)
        this.page = new CurdBasePageService<T>(this.path, this.http)
        this.path = `${baseData.baseUrl}`
    }
}

const paramKey = `__api_params`

/**
 * 默认基准URL
 * - 有效范围：BaseCurd
 */
export function BaseUrl(url: string) {
    return function <TClass extends new (...args: any[]) => BaseCurd<any>>(
        target: TClass
    ): TClass {
        const params = setParam(target.prototype)
        params.baseUrl = url

        return target
    }
}

function setParam(target: any, key: string = paramKey): any {
    let params = target[key]
    if (typeof params === 'undefined') {
        params = target[key] = {}
    }
    return params
}
