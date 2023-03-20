import type { Component } from 'vue'
import type { Form } from 'vee-validate'
import FormItem from './form/FormItem.vue'
import PageCard from './pageCard/PageCard.vue'
import { tableComponentList, BaseTable, BaseTableColumns } from './table'
import type { GlobalComponentConstructor } from 'primevue/ts-helpers'
import type { BaseTableColumnsType } from './table/columns/columns-type'
import type { BaseTreeTableColumnsType } from './treeTable/columns/columns-type'
import { treeTableComponentList, BaseTreeTable } from './treeTable'

export interface GlobalComponentListType {
    VeeFormItem: typeof FormItem
    VeeForm: typeof Form
    LightTable: typeof BaseTable
    PageCard: typeof PageCard
    LightTableColumns: GlobalComponentConstructor<BaseTableColumnsType>
    LightTreeTable: typeof BaseTreeTable
    LightTreeTableColumns: GlobalComponentConstructor<BaseTreeTableColumnsType>
}

export default [
    FormItem,
    PageCard,
    ...tableComponentList,
    ...treeTableComponentList
] as Component[]
