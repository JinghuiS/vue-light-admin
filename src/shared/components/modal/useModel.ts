import type { DialogProps } from 'primevue/dialog'
import { useDependency } from 'vdi'
import type { Component } from 'vue'
import { useModal as _useModal, useModalRef } from 'vue-modal-provider'
import BaseModal from './BaseModal.vue'
import { PrimeModalService } from './prime-modal.service'

type PrimeModal = {
    component: Component
} & DialogProps

export function usePrimeModal(primeModalProps: PrimeModal) {
    const { show } = _useModal(BaseModal, primeModalProps)

    return { show }
}

export function usePrimeModalRef() {
    const primeModalService = useDependency(PrimeModalService)

    const modalRef = useModalRef()

    return {
        showLoading: primeModalService.showLoading.bind(primeModalService),
        ...modalRef
    }
}
