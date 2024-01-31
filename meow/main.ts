import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './MeowApp.vue'


const app = createApp(App)

app.use(createPinia())


app.mount('#meow')
