import type { GlobalComponentConstructor } from 'primevue/ts-helpers'
import { ref, type Ref } from 'vue'

/**
 *
 * HtmlElement Template Refs
 *
 * 获取html元素引用
 *
 */
export function elementRef<
    ElementRef extends HTMLElement | null
>(): Ref<ElementRef>
/**
 *
 * Component Template Refs
 *
 * 获取组件引用
 */
export function elementRef<
    ElementRef extends GlobalComponentConstructor<any>
>(): Ref<InstanceType<ElementRef> | null>

export function elementRef() {
    return ref<any>(null)
}
