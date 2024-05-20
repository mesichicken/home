import './assets/main.css'
import ElementPlus from 'element-plus'
import 'nes.css/css/nes.min.css'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')
