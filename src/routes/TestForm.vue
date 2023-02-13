<script lang="ts" setup>
import { GlobalService } from '@/core/services/global.service'
import { usePrimeModal } from '@/shared/components/modal/useModel'
import SidebarGroup from '@/shared/components/sidebar/SidebarGroup.vue'

import { useHttp } from '@/shared/utils/http/hooks'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { useDependency } from 'vdi'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import * as yup from 'yup'
import TestModal from './TestModal.vue'

const globalService = useDependency(GlobalService)

const router = useRouter()

const { show } = usePrimeModal({ component: TestModal })

const http = useHttp()

type RandomDTO = {
    message: string
    status: string
}

onMounted(() => {
    http.get<RandomDTO>('https://dog.ceo/api/breeds/image/random').then(
        (res) => {
            console.log(res.message)
        }
    )
})

function onSubmit(values: any) {
    console.log(JSON.stringify(values, null, 2))
}

function change() {
    globalService.config.value.user_name = '首页'
    router.push('admin/test')
}

const validationSchema = yup.object().shape({
    test: yup.string().required('请输入'),
    name: yup.string().when('test', (val: string, schema: yup.StringSchema) => {
        if (val === 'ces') {
            return schema.required('name是必填')
        } else {
            return schema.notRequired()
        }
    })
})
</script>

<template>
    <div>
        <VeeForm @submit="onSubmit" :validation-schema="validationSchema">
            <VeeFormItem name="test" label="测试" v-slot="field">
                <InputText :class="field.class" v-model="field.value.value" />
            </VeeFormItem>
            <VeeFormItem name="name" label="测试2" v-slot="field">
                <InputText :class="field.class" v-model="field.value.value" />
            </VeeFormItem>

            <Button type="submit">提交</Button>
        </VeeForm>
        <Button @click="change">测试弹窗</Button>
    </div>
</template>
