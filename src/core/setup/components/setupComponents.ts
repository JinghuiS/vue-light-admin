import type { App } from 'vue'
import { setupPrime } from './primevues'
import { scanComponents } from './scanComponent'
import components from '@/shared/components'
import { Form } from 'vee-validate'
export function setupComponents(instance: App) {
    setupPrime(instance)
    scanComponents(components, instance)
    instance.component('VeeForm', Form)
}
