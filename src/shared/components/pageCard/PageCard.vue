<script lang="ts" setup>
defineOptions({
    name: 'PageCard'
})
</script>
<template>
    <div
        class="flex font-bold min-h-100px w-full flex-col overflow-hidden bg-white dark:bg-slate-800 rounded-lg border border-slate-100 shadow-md dark:border-slate-800"
    >
        <h2
            class="py-4 px-6 border-b border-solid border-b-slate-100"
            v-if="$slots.title"
        >
            <slot name="title" />
        </h2>

        <div class="py-4 px-6">
            <slot name="body" />
        </div>
    </div>
</template>
