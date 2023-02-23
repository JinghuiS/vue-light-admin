import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css '
import 'primeicons/primeicons.css'

import 'primeicons/primeicons.css'

import PrimeVue from 'primevue/config'

import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import Calendar from 'primevue/calendar'
import InputText from 'primevue/inputtext'
import ProgressSpinner from 'primevue/progressspinner'

import Avatar from 'primevue/avatar'
import SplitButton from 'primevue/splitbutton'
import Menu from 'primevue/menu'

import Dialog from 'primevue/dialog'

// table
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'

import type { App, Component } from 'vue'
import { scanComponents } from './scanComponent'

const PrimeComponents: Component[] = [
    Button,
    Dropdown,
    Calendar,
    InputText,
    Dialog,
    ProgressSpinner,
    Avatar,
    SplitButton,
    Menu,

    // table
    DataTable,
    Column,
    ColumnGroup
]

/**
 *  Registration Global PrimeVue component
 *
 *
 * 注册 PrimeVue 组件
 *
 */
export function setupPrime(instance: App) {
    instance.use(PrimeVue)

    scanComponents(PrimeComponents, instance)
}
