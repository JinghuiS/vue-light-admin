export type HttpResponse<T = any> = T
export type HttpRequest<D = any> = D

export interface HttpClientInterceptor<Config = any, Response = any> {
    request(request: Config): Promise<Config>

    response(response: HttpResponse): Promise<HttpResponse<Response>>
}
export interface HttpClientErrorInterceptor<Config = any, Response = any> {
    requestError(error: Config): Promise<any>
    responseError(error: Config): Promise<any>
}

export type HttpClientType = {
    request<T = any, R = T, D = any>(config: D): Promise<R>
}

export type HttpRequestConfig = {
    data?: any
    params?: any
}

export interface HttpClientImplements<config = object & HttpRequestConfig> {
    get<T = any, C = config>(url: string, config?: C): Promise<T>
    post<T = any, C = config>(url: string, config?: C): Promise<T>
    put<T = any, C = config>(url: string, config?: C): Promise<T>
    delete<T = any, C = config>(url: string, config?: C): Promise<T>
    head<T = any, C = config>(url: string, config?: C): Promise<T>
    patch<T = any, C = config>(url: string, config?: C): Promise<T>
    options<T = any, C = config>(url: string, config?: C): Promise<T>
}
