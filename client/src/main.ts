import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import core from './core/index'

const app = createApp(App)

app.use(store).use(router).use(core).mount('#app')
