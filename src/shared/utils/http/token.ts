import { createIdentifier } from '@wendellhu/redi'
import type { HttpClientInterceptor } from './http-type'

export const HTTP_CLIENT_CONFIG = createIdentifier('app-http-client-config')
export const HTTP_CLIENT = createIdentifier('app-http-client')

export const HTTP_CLIENT_INTERCEPTORS = createIdentifier<HttpClientInterceptor>(
    'app-http-client_interceptors'
)
