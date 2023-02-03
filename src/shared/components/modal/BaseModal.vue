<script lang="ts" setup>
import { toRaw, unref } from 'vue'
import { useModalRef } from 'vue-modal-provider'
import { onProvider, useDependency } from 'vdi'
import { PrimeModalService } from './prime-modal.service'

onProvider([[PrimeModalService]])

const primeModalService = useDependency(PrimeModalService, { self: true })

const { visible, args } = useModalRef()

const { component, ...props } = unref(args)

const rawComponent = toRaw(component)
</script>

<template>
    <Dialog v-bind="props" modal v-model:visible="visible">
        <Suspense :key="primeModalService.suspenseKey">
            <template #fallback>
                <div class="w-full h-full">
                    <ProgressSpinner />
                </div>
            </template>
            <component :is="rawComponent" />
        </Suspense>
    </Dialog>
</template>
