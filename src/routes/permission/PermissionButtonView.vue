<script lang="ts" setup>
import { useDependency } from 'vdi'
import { PermissionService } from '@/core/services/permission/permission.service'

import { ref } from 'vue'

const permissionService = useDependency(PermissionService)

function change() {
    Point.value = ''
}

function addPermission() {
    permissionService.setPermission(['test'])
}
function deletePermission() {
    permissionService.setPermission([])
}

const Point = ref('test')
</script>

<template>
    <div>
        <Button @click="addPermission">增加全局test权限</Button>
        <Button @click="deletePermission">删除全局test权限</Button>
        <Button @click="change"> 修改权限点 </Button>
        <Button @click="Point = 'test'"> 修改权限点为test </Button>
        <div v-permission="Point" @click="change">当权限名为test时展示</div>
    </div>
</template>
