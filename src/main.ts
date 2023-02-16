import { setupApp } from '@core/setup'
import App from './App.vue'

import 'uno.css'
import './styles/main.css'

setupApp(App).then((vueInstance) => {
    vueInstance.mount('#app')
})
