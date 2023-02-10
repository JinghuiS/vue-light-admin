<script lang="ts" setup>
import { GlobalService } from '@/core/services/global.service'
import { useDependency } from 'vdi'
import { TestService } from './test.service'

const globalService = useDependency(GlobalService)

function change() {
    globalService.config.value.user_name = 'test'
}

const testService = useDependency(TestService)
</script>
<template>
    <div>
        {{ testService.abc }}
        <Button @click="change">测试弹窗</Button>
    </div>
</template>
