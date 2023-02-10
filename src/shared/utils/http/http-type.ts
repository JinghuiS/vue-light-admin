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
