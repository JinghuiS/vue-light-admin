import type { Dependency } from '@wendellhu/redi'
import { AxiosHttpClient } from './axios'
import { CreateHttpInterceptor, NoopInterceptor } from './httpInterceptor'
import {
    HTTP_CLIENT,
    HTTP_CLIENT_CONFIG,
    HTTP_CLIENT_INTERCEPTORS
} from './token'

export function HttpModule<T>(config: T): Dependency[] {
    return [
        [HTTP_CLIENT_INTERCEPTORS, { useClass: NoopInterceptor }],
        [CreateHttpInterceptor],
        [HTTP_CLIENT_CONFIG, { useValue: config }],
        [HTTP_CLIENT, { useClass: AxiosHttpClient }]
    ]
}
