import { Inject } from '@wendellhu/redi'
import { PermissionService } from '../permission/permission.service'

import { HTTP_CLIENT } from '@/shared/utils/http/token'
import type { HttpClientImplements } from '@/shared/utils/http/http-type'
import type { SidebarMenuItemType } from '@/shared/components/sidebar/sidebar.service'

type MockData = {
    menuList: SidebarMenuItemType[]
}

export class StartupService {
    constructor(
        @Inject(PermissionService) public permissionService: PermissionService,
        @Inject(HTTP_CLIENT) public httpClient: HttpClientImplements
    ) {}

    /**
     *
     * Execute before vue is mounted
     *
     *
     * 在vue挂载之前执行
     */
    async load() {
        this.httpClient.get<MockData>('./mock.json').then((res) => {
            this.permissionService.setPermissionMenuList(res.menuList)
        })

        /**Simulate a real request, wait for the end of the request to mount vue */
        return new Promise((rs) => {
            setTimeout(() => {
                rs(true)
            }, 1000)
        })
    }
}
