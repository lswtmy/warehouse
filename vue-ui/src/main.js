import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueui from '../packages/vueui.js'


Vue.config.productionTip = false
// console.log(vueui)
Vue.use(vueui)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
