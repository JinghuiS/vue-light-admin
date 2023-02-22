import type { ColumnProps } from 'primevue/column'
import { ClassComponent } from 'primevue/ts-helpers'
import type { VNode } from 'vue'

export type ColumnDataType = 'serial'

export interface LightColumnsType extends ColumnProps {
    bodySlot?: string
    headerSlot?: string
    filter?: string
    dataType?: ColumnDataType
    field: string
}
interface LightColumnsSlots {
    [key: string]: (scope: {
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
        column: LightColumnsType
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
    }) => VNode[]
}

export class BaseTableColumnsType extends ClassComponent<
    {
        columns: LightColumnsType[]
    },
    LightColumnsSlots
> {}
