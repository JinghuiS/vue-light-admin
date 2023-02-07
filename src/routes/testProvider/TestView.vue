<script lang="ts" setup>
import { useDependency } from 'vdi'
import { TestService } from './test.service'

const testService = useDependency(TestService)
</script>
<template>
    <div>
        {{ testService.abc }}
    </div>
</template>
