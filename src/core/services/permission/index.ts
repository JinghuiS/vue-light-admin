import type { Dependency } from '@wendellhu/redi'
import { DIRECTIVE } from 'vdi'
import { PermissionDirectiveService } from './permission.directive.service'
import { PermissionService } from './permission.service'
export const PermissionModule: Dependency[] = [
    [PermissionService],
    [DIRECTIVE, { useClass: PermissionDirectiveService }]
]
