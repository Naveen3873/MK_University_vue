import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FormFilePlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.use(FormFilePlugin)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
