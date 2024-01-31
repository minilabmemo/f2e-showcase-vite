import '@/assets/tailwind.css'
import "@/assets/styles/global.css";
import "@/assets/styles/custom.css";
import "@/assets/styles/animation.css";
import "@/assets//styles/MantouSans.css";
import "@/assets//styles/notosanstc.css";
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './MeowApp.vue'


const app = createApp(App)

app.use(createPinia())


app.mount('#meow')
