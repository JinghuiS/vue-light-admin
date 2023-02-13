import { ref } from 'vue'

export type SidebarMenuItemType = {
    path: string
    label: string
    groupLabel?: string
    children?: SidebarMenuItemType[]
}

export class SidebarService {
    activeItem = ref({
        subKey: '',
        itemKey: ''
    })
}
