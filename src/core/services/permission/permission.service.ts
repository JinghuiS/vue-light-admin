import { ref } from 'vue'

export class PermissionService {
    permissionList = ref<string[]>(['test'])

    setPermission(permissionList: string[]) {
        this.permissionList.value = permissionList
    }

    checkPermission(permission: string): boolean {
        return this.permissionList.value.includes(permission)
    }
}
