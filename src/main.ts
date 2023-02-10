import App from './App.vue'
import 'uno.css'
import './styles/main.css'
import { setupApp } from '@core/setup'

setupApp(App).then((vueInstance) => {
    vueInstance.mount('#app')
})
