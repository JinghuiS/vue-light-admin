<script lang="ts" setup>
import { usePrimeModal } from '@/shared/components/modal/useModel'
import * as yup from 'yup'
import TestModal from './TestModal.vue'

const { show } = usePrimeModal({ component: TestModal })

function onSubmit(values: any) {
    console.log(JSON.stringify(values, null, 2))
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
        <Button @click="show">测试弹窗</Button>
    </div>
</template>
