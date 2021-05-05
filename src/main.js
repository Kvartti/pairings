import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VSwitch from 'v-switch-case'

Vue.config.productionTip = false
Vue.use(VSwitch)

new Vue({
  router,
  store,
  VSwitch,
  render: h => h(App),
}).$mount('#app')
