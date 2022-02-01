import './scss/app.scss'

import Vue from 'vue'
import App from './App.vue'
import vueHeadful from 'vue-headful'
import router from './router'

import axios from 'axios'
import { InlineSvgPlugin } from 'vue-inline-svg'

Vue.use(InlineSvgPlugin)
Vue.config.productionTip = false

window.Vue = Vue
window.axios = axios
window.router = router

Vue.component('vue-headful', vueHeadful)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
