import type {
    ClassComponent,
    GlobalComponentConstructor
} from 'primevue/ts-helpers'
import { ref, unref, type Component, type Ref } from 'vue'

/**
 *
 * Component Template Refs
 *
 * 获取组件引用
 */
export function elementRef<
    ElementRef extends GlobalComponentConstructor<any>
>(): Ref<InstanceType<ElementRef> | null>

/**
 *
 * HtmlElement Template Refs
 *
 * 获取html元素引用
 *
 */
export function elementRef<ElementRef = HTMLElement | null>(): Ref<ElementRef> {
    return ref<any>(null)
}
