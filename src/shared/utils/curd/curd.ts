import { CurdBasePageService } from './page'

export abstract class BaseCurd<T extends object> {
    public path: string = ''
    constructor() {
        const baseData = setParam(this)
        new CurdBasePageService<T>(this.path)
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
