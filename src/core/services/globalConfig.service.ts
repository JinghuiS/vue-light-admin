import { ref } from 'vue'

export type DTO = {
    uuid: string
    end_time: string
    user_name: string
}

export class GlobalConfigService {
    config = ref<DTO>({
        uuid: '',
        end_time: '',
        user_name: ''
    })
}
