<script setup lang="tsx">
import type { LightTreeColumnsType } from '@/shared/components/treeTable/columns/columns-type'

const columns: LightTreeColumnsType[] = [
    {
        field: 'name',
        header: 'Name',
        expander: true
    },
    {
        field: 'size',
        header: 'Size',
        bodySlot: 'size'
    },
    {
        field: 'type',
        header: 'Type'
    }
]

const nodes = ref([
    {
        key: '0',
        data: {
            name: 'Applications',
            size: '100kb',
            type: 'Folder'
        },
        children: [
            {
                key: '0-0',
                data: {
                    name: 'Vue',
                    size: '25kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '0-0-0',
                        data: {
                            name: 'vue.app',
                            size: '10kb',
                            type: 'Application'
                        }
                    },
                    {
                        key: '0-0-1',
                        data: {
                            name: 'native.app',
                            size: '10kb',
                            type: 'Application'
                        }
                    },
                    {
                        key: '0-0-2',
                        data: {
                            name: 'mobile.app',
                            size: '5kb',
                            type: 'Application'
                        }
                    }
                ]
            },
            {
                key: '0-1',
                data: {
                    name: 'editor.app',
                    size: '25kb',
                    type: 'Application'
                }
            },
            {
                key: '0-2',
                data: {
                    name: 'settings.app',
                    size: '50kb',
                    type: 'Application'
                }
            }
        ]
    },
    {
        key: '1',
        data: {
            name: 'Cloud',
            size: '20kb',
            type: 'Folder'
        },
        children: [
            {
                key: '1-0',
                data: {
                    name: 'backup-1.zip',
                    size: '10kb',
                    type: 'Zip'
                }
            },
            {
                key: '1-1',
                data: {
                    name: 'backup-2.zip',
                    size: '10kb',
                    type: 'Zip'
                }
            }
        ]
    }
])
</script>
<template>
    <div>
        <PageCard>
            <template #title> 树形表格 </template>
            <template #body>
                <LightTreeTable :value="nodes">
                    <LightTreeTableColumns :columns="columns">
                        <template #size>1212</template>
                    </LightTreeTableColumns>
                </LightTreeTable>
            </template>
        </PageCard>
    </div>
</template>
