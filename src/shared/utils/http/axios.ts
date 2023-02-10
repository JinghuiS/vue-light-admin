import { Inject } from '@wendellhu/redi'
import axios, { type AxiosRequestConfig } from 'axios'
import type {
    HttpClientErrorInterceptor,
    HttpClientImplements,
    HttpRequestConfig
} from './http-type'
import { CreateHttpInterceptor } from './httpInterceptor'
import { HTTP_CLIENT_CONFIG } from './token'

export class AxiosHttpClient implements HttpClientImplements {
    instance
    constructor(
        @Inject(HTTP_CLIENT_CONFIG) public config: AxiosRequestConfig,
        @Inject(CreateHttpInterceptor)
        public CreateHttpInterceptor: CreateHttpInterceptor
    ) {
        this.instance = axios.create({ ...axios.defaults, ...config })

        /**
         * Register Interceptor
         * 注册拦截器
         */
        this.CreateHttpInterceptor.register().map((item) => {
            const errorItem = item as unknown as HttpClientErrorInterceptor
            this.instance.interceptors.request.use(
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
            this.instance.interceptors.response.use(
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
        /**
         * Filter data
         * 过滤数据
         */
        this.instance.interceptors.response.use((args) => {
            return args.data
        })
    }

    get<T = any, C = object & HttpRequestConfig>(
        url: string,
        config?: C | undefined
    ): Promise<T> {
        return this.instance.request<any, T>({
            url: url,
            ...config,
            method: 'GET'
        })
    }

    post<T = any, C = object & HttpRequestConfig>(
        url: string,
        config?: C | undefined
    ): Promise<T> {
        return this.instance.request<any, T>({
            url: url,
            ...config,
            method: 'POST'
        })
    }

    put<T = any, C = object & HttpRequestConfig>(
        url: string,
        config?: C | undefined
    ): Promise<T> {
        return this.instance.request<any, T>({
            url: url,
            ...config,
            method: 'PUT'
        })
    }

    delete<T = any, C = object & HttpRequestConfig>(
        url: string,
        config?: C | undefined
    ): Promise<T> {
        return this.instance.request<any, T>({
            url: url,
            ...config,
            method: 'DELETE'
        })
    }

    head<T = any, C = object & HttpRequestConfig>(
        url: string,
        config?: C | undefined
    ): Promise<T> {
        return this.instance.request<any, T>({
            url: url,
            ...config,
            method: 'HEAD'
        })
    }

    patch<T = any, C = object & HttpRequestConfig>(
        url: string,
        config?: C | undefined
    ): Promise<T> {
        return this.instance.request<any, T>({
            url: url,
            ...config,
            method: 'PATCH'
        })
    }

    options<T = any, C = object & HttpRequestConfig>(
        url: string,
        config?: C | undefined
    ): Promise<T> {
        return this.instance.request<any, T>({
            url: url,
            ...config,
            method: 'OPTIONS'
        })
    }
}
