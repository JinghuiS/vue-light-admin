import { Many } from '@wendellhu/redi'
import type {
    HttpClientErrorInterceptor,
    HttpClientInterceptor,
    HttpRequest,
    HttpResponse
} from './http-type'
import { HTTP_CLIENT_INTERCEPTORS } from './token'

export class CreateHttpInterceptor {
    constructor(
        @Many(HTTP_CLIENT_INTERCEPTORS)
        private interceptors: HttpClientInterceptor[] &
            HttpClientErrorInterceptor[]
    ) {}
    register() {
        return this.interceptors
    }

    defaultError = (error: any) => {
        console.error(error)
        return Promise.reject(error)
    }
}
export class NoopInterceptor implements HttpClientInterceptor {
    request(request: HttpRequest) {
        return request
    }

    response(response: HttpResponse) {
        return response
    }
}
