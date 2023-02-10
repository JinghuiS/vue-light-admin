import { Inject } from '@wendellhu/redi'
import axios, { type AxiosRequestConfig } from 'axios'
import type { HttpClientErrorInterceptor } from './http-type'
import { CreateHttpInterceptor } from './httpInterceptor'
import { HTTP_CLIENT_CONFIG } from './token'

export class AxiosHttpClient extends axios.Axios {
    constructor(
        @Inject(HTTP_CLIENT_CONFIG) public config: AxiosRequestConfig,
        @Inject(CreateHttpInterceptor)
        public CreateHttpInterceptor: CreateHttpInterceptor
    ) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        super({ ...axios.defaults, ...config })

        /**
         * Register Interceptor
         * 注册拦截器
         */
        this.CreateHttpInterceptor.register().map((item) => {
            const errorItem = item as unknown as HttpClientErrorInterceptor
            this.interceptors.request.use(
                (args) => {
                    return item.request(args)
                },
                (error) => {
                    if (errorItem.requestError) {
                        return errorItem.requestError(error)
                    }
                    return this.CreateHttpInterceptor.defaultError(error)
                }
            )
            this.interceptors.response.use(
                (args) => {
                    return item.response(args)
                },
                (error) => {
                    if (errorItem.responseError) {
                        return errorItem.responseError(error)
                    }
                    return this.CreateHttpInterceptor.defaultError(error)
                }
            )
        })
    }
}
