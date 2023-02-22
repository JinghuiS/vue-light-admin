import { ref, unref, type Ref } from 'vue'

export function elementRef<ElementRef = HTMLElement | null>(): Ref<ElementRef> {
    return ref<any>(null)
}
