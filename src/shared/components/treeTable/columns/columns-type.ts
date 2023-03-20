import type Column from 'primevue/column'
import type { ColumnProps } from 'primevue/column'
import { ClassComponent } from 'primevue/ts-helpers'
import type { Component, VNode } from 'vue'

export type ColumnDataType = 'serial'

export interface LightTreeColumnsType extends ColumnProps {
    bodySlot?: string
    headerSlot?: string
    filter?: string
    columnType?: ColumnDataType | Component
    field: string
    render?: (scope: LightTreeColumnsSlotScope) => Component
}

export interface LightTreeColumnsSlotScope {
    /**
     * Row data.
     */
    data: any
    /**
     * Row node data.
     */
    node: any
    /**
     * Column node.
     */
    column: Column
    /**
     * Column field.
     */
    field: string
    /**
     * Row index.
     */
    index: number
    /**
     * Whether the row is frozen.
     */
    frozenRow: boolean
    /**
     * Callback function
     */
    editorInitCallback: () => void
}
interface LightTreeColumnsSlots {
    [key: string]: (scope: LightTreeColumnsSlotScope) => VNode[]
}

export class BaseTreeTableColumnsType extends ClassComponent<
    {
        columns: LightTreeColumnsType[]
    },
    LightTreeColumnsSlots,
    ''
> {}
