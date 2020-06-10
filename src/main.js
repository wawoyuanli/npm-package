import Vue from 'vue'
import App from './App.vue'
import TestUi from './../packages'
Vue.config.productionTip = false
Vue.use(TestUi)
new Vue({
  // index,
  render: h => h(App),
}).$mount('#app')
