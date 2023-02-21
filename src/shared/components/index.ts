import type { Component } from 'vue'
import type { Form } from 'vee-validate'
import FormItem from './form/FormItem.vue'
import { tableComponentList, BaseTable } from './table'

export interface GlobalComponentListType {
    VeeFormItem: typeof FormItem
    VeeForm: typeof Form
    LightTable: typeof BaseTable
}

export default [FormItem, ...tableComponentList] as Component[]
