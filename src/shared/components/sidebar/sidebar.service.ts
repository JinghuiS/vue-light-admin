import { ref } from 'vue'
import { createEventHook } from '@vueuse/core'

export type SidebarMenuItemType = {
    path: string
    label: string
    groupLabel?: string
    children?: SidebarMenuItemType[]
}

export class SidebarService {
    activeItem = ref('')

    activeMenuItem = createEventHook<{ label: string; path: string }>()

    activeSubItem = ref<string[]>([])
}
