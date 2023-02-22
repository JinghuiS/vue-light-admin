#### 在组件中使用请求

<br />

```ts
import {useHttp} from '@shared/utils/http/hooks';
const http = useHttp()

http.get(url,config)
http.post(url,config)
http.put(url,config)
.
.
.
```
<br />

#### 在依赖注入的类中使用

<br />

```ts

import { Inject } from '@wendellhu/redi'
import { HTTP_CLIENT } from '@shared/utils/http/token'

class HttpClass {
    constructor(@Inject(HTTP_CLIENT) public http: HttpClientImplements) {
       this.http.get(url,config)
       this.http.post(url,config)
       this.http.put(url,config)
       .
       .
       .
    }
}

```

<br />

#### 声明返回数据类型

<br />

```ts

import {useHttp} from '@shared/utils/http/hooks';

type ResultType = {
    data:string[]
    total:number
}

const http = useHttp()

http.get<ResultType>(url,config).then({data,total}=>{})


```
