<script lang="ts" setup>
import * as yup from 'yup'

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
    <VeeForm @submit="onSubmit" :validation-schema="validationSchema">
        <VeeFormItem name="test" label="测试" v-slot="field">
            <InputText v-model="field.value.value" />
        </VeeFormItem>
        <VeeFormItem name="name" label="测试2" v-slot="field">
            <InputText v-model="field.value.value" />
        </VeeFormItem>

        <Button type="submit">提交</Button>
    </VeeForm>
</template>
