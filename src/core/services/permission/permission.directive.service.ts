import { Inject } from '@wendellhu/redi'
import type { DirectiveImplements } from 'vdi'
import { watch, type DirectiveBinding } from 'vue'
import { PermissionService } from './permission.service'

type VNodeTreeCache = {
    parentEl: HTMLElement | null
    parentNode: ParentNode | null
    comment?: Comment
}

function isCommentElement(el: any) {
    if (el && el.nodeType === 8) {
        return true
    }
    return false
}

export class PermissionDirectiveService implements DirectiveImplements {
    name: string = 'permission'
    completeDirectiveName = `v-${this.name}`

    constructor(
        @Inject(PermissionService) public permissionService: PermissionService
    ) {
        watch(
            () => this.permissionService.permissionList.value,
            () => {
                this.switchStatusOfIf(this.el, this.binding.value)
            }
        )
    }

    elMaps = new WeakMap<any, VNodeTreeCache>()

    el: any
    binding: any

    switchStatusOfIf(el: any, value: string) {
        const cache = this.elMaps.get(el) as VNodeTreeCache
        // eslint-disable-next-line prefer-const
        let { parentEl, comment } = cache
        if (this.permissionService.checkPermission(value)) {
            // 显示
            if (
                comment &&
                comment.nodeType === 8 &&
                comment.nodeValue === this.completeDirectiveName
            ) {
                parentEl?.replaceChild(el, comment)
            }
        } else {
            // 隐藏
            comment = document.createComment(this.completeDirectiveName)
            parentEl?.replaceChild(comment, el)
            this.elMaps.set(el, { ...cache, comment })
        }
    }

    mounted(el: any, binding: DirectiveBinding<any>) {
        this.elMaps.set(el, {
            parentEl: el.parentElement,
            parentNode: el.parentNode
        })
        this.el = el
        this.binding = binding
        this.switchStatusOfIf(el, binding.value)
    }
    updated(el: any, binding: DirectiveBinding<any>) {
        this.el = el
        this.binding = binding
        this.switchStatusOfIf(el, binding.value)
    }
    unmounted(el: any) {
        this.el = el
        const { parentEl, comment } = this.elMaps.get(el) as VNodeTreeCache
        if (
            comment &&
            isCommentElement(comment) &&
            comment.nodeValue === this.completeDirectiveName
        ) {
            parentEl?.removeChild(comment)
        }
        this.elMaps.delete(el)
    }
}
