<script setup lang="ts">
import type { LightColumnsType } from '@/shared/components/table/columns/columns-type'

const columns: LightColumnsType[] = [
    {
        field: 'no',
        header: '序号',
        columnType: 'serial'
    },
    {
        field: 'abb',
        header: '测试',
        bodySlot: 'as'
    }
]
const data = [{ abb: '12121' }]
</script>
<template>
    <div>
        <PageCard>
            <template #title> 基础表格 </template>
            <template #body>
                <LightTable :value="data">
                    <LightTableColumns :columns="columns">
                        <template #as>1212</template>
                    </LightTableColumns>
                </LightTable>
            </template>
        </PageCard>
    </div>
</template>
