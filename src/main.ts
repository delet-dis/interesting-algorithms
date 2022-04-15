import {createApp} from 'vue'
import App from './App.vue'
import 'babel-polyfill'
import './ui/assets/global.css'
import './ui/assets/buttons.css'
import router from './router'

import '@fortawesome/fontawesome-free/js/all'
import {createMetaManager} from "vue-meta";

const app = createApp(App)
    .use(router)
    .use(createMetaManager())

app.mount('#app')
