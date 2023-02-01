import FormItem from '@shared/components/form/FormItem.vue'
import { Form } from 'vee-validate'
declare module 'vue' {
    export interface GlobalComponents {
        VeeFormItem: typeof FormItem
        VeeForm: typeof Form
    }
}
