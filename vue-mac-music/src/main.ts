import { createApp } from 'vue'
import router from './router'
import App from './App'

import '@assets/scss/reset.scss'
import 'element-plus/dist/index.css'
import '@/utils/rem'

const app = createApp(App)
app.use(router)
app.mount('#app')
