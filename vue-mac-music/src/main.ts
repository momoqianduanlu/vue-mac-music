import { createApp } from 'vue'
import router from './router'
import App from './App'

import 'element-plus/dist/index.css'
import '@assets/scss/index.scss'
import '@/utils/rem'

const app = createApp(App)
app.use(router)
app.mount('#app')
