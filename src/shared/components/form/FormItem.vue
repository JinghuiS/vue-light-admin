<script setup lang="ts">
import { toRef } from 'vue'
import { useField } from 'vee-validate'

defineOptions({
    name: 'VeeFormItem'
})

const props = defineProps<{ name: string; label?: string }>()
const field = useField<any>(toRef(props, 'name'))
</script>

<template>
    <div>
        <label
            :class="field.errorMessage.value && 'p-error'"
            v-if="label"
            :for="name"
            >{{ label }}</label
        >
        <div :class="field.errorMessage.value && 'p-error'">
            <slot
                :class="{ 'p-invalid': field.errorMessage.value }"
                v-bind="field"
            ></slot>
        </div>
        <small v-if="field.errorMessage.value" class="p-error">{{
            field.errorMessage.value
        }}</small>
    </div>
</template>

<style scoped>
.field {
    margin-bottom: 1.5rem;
}
.field > small {
    margin-top: 0.25rem;
}
</style>
