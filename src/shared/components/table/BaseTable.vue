<script lang="ts" setup>
import type { DataTableProps } from 'primevue/datatable'
import {
    computed,
    useSlots,
    type RendererElement,
    type RendererNode,
    type VNode
} from 'vue'
import type { LightColumnsType } from './columns/columns-type'
import ColumnTypeSelect from './columns/ColumnTypeSelect.vue'

defineOptions({
    name: 'LightTable'
})

interface Props extends DataTableProps {}

const props = defineProps<Props>()

const slots = useSlots()

function getChildren() {
    return slots.default ? slots.default() : null
}

function recursiveGetChildren(
    children: VNode<
        RendererNode,
        RendererElement,
        {
            [key: string]: any
        }
    >[],
    results: LightColumnsType[],
    slots: any
) {
    if (!results) {
        results = []
    }
    if (!slots) {
        slots = {}
    }

    if (children && children.length) {
        children.forEach((child) => {
            if ((child.type as { name: string }).name == 'LightTableColumns') {
                results = child!.props!.columns as LightColumnsType[]
                slots = child.children
            }
        })
    }
    return { results, slots }
}

const columns = computed(() => {
    let children = getChildren()

    if (!children) {
        return
    }
    const cols = recursiveGetChildren(children, [], {})

    return cols
})
</script>

<template>
    <DataTable v-if="$slots.default" v-bind="props">
        <slot />

        <template v-if="columns?.results">
            <Column
                v-for="column in columns?.results"
                :key="column.field"
                v-bind="column"
            >
                <template
                    v-if="column.bodySlot && columns?.slots[column.bodySlot]"
                    #body="slotProps"
                >
                    <component
                        :is="
                            columns.slots[
                                column.bodySlot ? column.bodySlot : ''
                            ]
                        "
                        v-bind="slotProps"
                    />
                </template>
                <template v-else-if="column.columnType" #body="slotProps">
                    <ColumnTypeSelect
                        :type="column.columnType"
                        :data="slotProps"
                    />
                </template>
                <template
                    v-if="
                        column.headerSlot && columns?.slots[column.headerSlot]
                    "
                    #header="slotProps"
                >
                    <component
                        :is="
                            columns?.slots[
                                column.bodySlot ? column.bodySlot : ''
                            ]
                        "
                        v-bind="slotProps"
                    />
                </template>
            </Column>
        </template>

        <template #empty>
            <div
                class="w-full h-150px flex flex-col justify-center items-center"
            >
                <div class="i-tabler-coffee w-60px h-60px mb-2"></div>
                暂无数据
            </div>
        </template>
    </DataTable>
</template>
