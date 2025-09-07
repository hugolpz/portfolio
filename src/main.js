import { createApp } from 'vue'
import BootstrapVueNext from 'bootstrap-vue-next'
import App from './App.vue'
import i18n from './i18n'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'animate.css'

// Import custom styles
import './assets/styles/main.css'

const app = createApp(App)
app.use(BootstrapVueNext)
app.use(i18n)
app.mount('#app')
