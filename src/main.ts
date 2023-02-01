import App from './App.vue'

import './assets/main.css'
import { setupApp } from '@core/setup'

setupApp(App).then((vueInstance) => {
    vueInstance.mount('#app')
})
