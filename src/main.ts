import { setupApp } from '@core/setup'
import App from './App.vue'
import './styles/main.css'
import 'uno.css'

setupApp(App).then((vueInstance) => {
    vueInstance.mount('#app')
})
