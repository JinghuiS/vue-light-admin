<script lang="ts" setup>
import { computed, render, useSlots, type RendererElement, type RendererNode, type VNode } from 'vue'
import type { LightTreeColumnsType } from './columns/columns-type'
import TreeTable, { type TreeTableProps } from 'primevue/treetable'
import ColumnTypeSelect from './columns/ColumnTypeSelect.vue'

defineOptions({
    name: 'LightTreeTable'
})

interface Props extends TreeTableProps {}

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
    results: LightTreeColumnsType[],
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
            if ((child.type as { name: string }).name == 'LightTreeTableColumns') {
                results = child!.props!.columns as LightTreeColumnsType[]
                slots = child.children
            }
        })
    }
    return { results, slots }
}

const columns = computed(() => {
    let children = getChildren()
    console.log(children)

    if (!children) {
        return
    }
    const cols = recursiveGetChildren(children, [], {})
    console.log(cols)

    return cols
})
</script>

<template>
    <TreeTable v-if="$slots.default" v-bind="props">
        <template v-if="columns?.results">
            <Column v-for="column in columns?.results" :key="column.field" v-bind="column">
                <template v-if="column.render" #body="slotProps">
                    <component :is="column.render ? column.render(slotProps) : ''" />
                </template>

                <template v-else-if="column.bodySlot && columns?.slots[column.bodySlot]" #body="slotProps">
                    <component :is="columns.slots[column.bodySlot ? column.bodySlot : '']" v-bind="slotProps">
                    </component>
                </template>
                <template v-else-if="column.columnType" #body="slotProps">
                    <ColumnTypeSelect :type="column.columnType" :data="slotProps" />
                </template>
                <template v-if="column.headerSlot && columns?.slots[column.headerSlot]" #header="slotProps">
                    <component :is="columns?.slots[column.headerSlot ? column.headerSlot : '']" v-bind="slotProps" />
                </template>
            </Column>
        </template>

        <!-- <template #empty>
            <div class="w-full h-150px flex flex-col justify-center items-center">
                <div class="i-tabler-coffee w-60px h-60px mb-2"></div>
                暂无数据
            </div>
        </template> -->
    </TreeTable>
</template>
