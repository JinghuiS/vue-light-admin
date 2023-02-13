import { ref } from 'vue'
import type { HttpClientImplements } from '../http/http-type'

export class CurdBasePageService<T extends object> {
    loading = ref<boolean>(false)

    data = ref<any[]>([])

    constructor(public path: string, public http: HttpClientImplements) {}

    request() {
        return this.http.get(this.path)
    }
}
