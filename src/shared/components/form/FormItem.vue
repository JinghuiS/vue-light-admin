<script setup lang="ts" name="VeeFormItem">
import { toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps<{ name: string; label?: string }>()
const field = useField<any>(toRef(props, 'name'))
</script>

<template>
    <div>
        <label v-if="label" :for="name">{{ label }}</label>
        <slot v-bind="field"></slot>
        <small :id="`${name}-help`" class="p-error">{{
            field.errorMessage.value
        }}</small>
    </div>
</template>
