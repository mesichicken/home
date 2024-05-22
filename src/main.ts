import './assets/main.css'
import ElementPlus from 'element-plus'
import 'nes.css/css/nes.min.css'
import 'element-plus/dist/index.css'
import VueGTag from 'vue-gtag'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(VueGTag, {
  config: { id: import.meta.env.VITE_GTAG_ID }
})

app.mount('#app')
