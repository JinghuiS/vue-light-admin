import type { SidebarMenuItemType } from '@/shared/components/sidebar/sidebar.service'
import { ref } from 'vue'

export class PermissionService {
    private _permissionList = ref<string[]>(['test'])

    private _permissionMenuList = ref<SidebarMenuItemType[]>([])

    get permissionList() {
        return this._permissionList
    }

    get permissionMenuList() {
        return this._permissionMenuList
    }

    setPermission(permissionList: string[]) {
        this._permissionList.value = permissionList
    }

    setPermissionMenuList(permissionMenuList: SidebarMenuItemType[]) {
        this._permissionMenuList.value = permissionMenuList
    }

    checkPermission(permission: string): boolean {
        return this._permissionList.value.includes(permission)
    }
}
