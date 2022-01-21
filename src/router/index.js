import Vue from 'vue'
import VueRouter from "vue-router"
import routes from './router'


Vue.use(VueRouter); // 使用一个vue插件

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router