import { GlobalComponentListType } from '@shared/components'

declare module 'vue' {
    export interface GlobalComponents extends GlobalComponentListType {}
}
