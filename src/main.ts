import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from './router'

import '@fortawesome/fontawesome-free/js/all'
import {createMetaManager} from "vue-meta";

const app = createApp(App)
    .use(router)
    .use(createMetaManager())

app.mount('#app')
