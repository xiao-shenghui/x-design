import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/aliIcon/iconfont'
import XDesign from './xdesign'

Vue.config.productionTip = false
Vue.use(XDesign)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
