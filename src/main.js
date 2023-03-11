import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UIcomponents from '@/components/UI'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)


UIcomponents.forEach(component => {
    app.component(component.name, component)
})


app.use(store).use(router).use(vuetify).mount('#app')

const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
