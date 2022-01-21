import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from '@/router'

import { showMessage } from './utils'
Vue.prototype.$message = showMessage

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
