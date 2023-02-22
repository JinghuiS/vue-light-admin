为了可以把请求拦截器从请求库中解耦出来，所以拦截器要用`vue-light-admin`封装过的方式注册

<br />
<br />

#### 1.如何注册

<br />

通过`HTTP_CLIENT_INTERCEPTORS`标识符创建服务，在 `core/setup/di/setupDI.ts` 文件中进行全局注册

<br />

拦截器也是一个服务，最好写在`core/services`文件夹下,然后在`globalConfig.service.ts`文件中统一导出，这样更好管理


<br />
<br />

#### 2.简单示例

<br />

实现一个拦截器,用`HttpClientInterceptor`类型来规范拦截器方法

<br />

```ts
import type {
    HttpClientInterceptor,
    HttpRequest,
    HttpResponse
} from '@shared/utils/http'

export class DefaultInterceptor implements HttpClientInterceptor {
    request(request: HttpRequest) {
        console.log(request)
        return request
    }

    response(response: HttpResponse) {
        console.log(response)
        return response
    }
}
```

<br />

在 `core/setup/di/setupDI.ts` 文件中进行全局注册,`...HttpModule({})`是必须注入的请求服务,不要删除

<br />

```ts
import { vdi, CreateDirective, CREATED_VUE_APP_EXECUTION } from 'vdi'
import type { App } from 'vue'

import { AxiosHttpClient } from '@shared/utils/http/axios'
import { HttpModule, HTTP_CLIENT } from '@shared/utils/http'
import { rootServiceList } from '@core/services'

export function setupDI(instance: App) {
    instance.use(
        vdi([
            ...rootServiceList,
            ...HttpModule({}),
            /**注入刚刚声明的拦截器，可以多个声明像这样，会根据前后顺序执行
             *  [HTTP_CLIENT_INTERCEPTORS,{useClass:DefaultInterceptor}]
             *  [HTTP_CLIENT_INTERCEPTORS,{useClass:DefaultInterceptor1}]
             *  [HTTP_CLIENT_INTERCEPTORS,{useClass:DefaultInterceptor2}]
             */
            [HTTP_CLIENT_INTERCEPTORS, { useClass: DefaultInterceptor }][
                (HTTP_CLIENT, { useClass: AxiosHttpClient })
            ],
            [CREATED_VUE_APP_EXECUTION, { useClass: CreateDirective }]
        ])
    )
}
```

#### 3.在拦截器中使用其他依赖
在平常开发中，我们经常使用拦截器拼接前缀，添加token，依赖于vdi，我们可以在拦截器中使用其他全局注册的服务

<br />

一个token服务,使用前要先在setupDI中全局注入

<br />

```ts
import {ref} from 'vue'
export class TokenService {
     _token = ref<string>()

     get token(){
        return this._token
     }

    setToken(token:string){
        this._token.value = token
    }
}

```

<br />

在拦截器使用

```ts
import type {
    HttpClientInterceptor,
    HttpRequest,
    HttpResponse
} from '@shared/utils/http'

import {TokenService} from './token.service'

export class DefaultInterceptor implements HttpClientInterceptor {

    constructor(@Inject(TokenService) public tokenService: TokenService){}

    request(request: HttpRequest) {
        console.log(request,this.tokenService.token)
        return request
    }

    response(response: HttpResponse) {
        console.log(response)
        return response
    }
}
```

<br />




