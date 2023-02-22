import type { Component } from 'vue'
import type { Form } from 'vee-validate'
import FormItem from './form/FormItem.vue'
import PageCard from './pageCard/PageCard.vue'
import { tableComponentList, BaseTable, BaseTableColumns } from './table'
import type { GlobalComponentConstructor } from 'primevue/ts-helpers'
import type { BaseTableColumnsType } from './table/columns/columns-type'

export interface GlobalComponentListType {
    VeeFormItem: typeof FormItem
    VeeForm: typeof Form
    LightTable: typeof BaseTable
    PageCard: typeof PageCard
    LightTableColumns: GlobalComponentConstructor<BaseTableColumnsType>
}

export default [FormItem, PageCard, ...tableComponentList] as Component[]
