import { ref } from 'vue'
import type { HttpClientImplements } from '../http/http-type'

export type PageType<T> = {
    data: T[]
    total: number
}

export class CurdBasePageService<T extends object> {
    loading = ref<boolean>(false)

    data = ref<T[]>([])

    constructor(public path: string, public http: HttpClientImplements) {}

    async request() {
        return this.http.get(this.path)
    }
}
