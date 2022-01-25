import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from '@/router'
import '@/mock'

// 注册全局组件
import { showMessage } from './utils'
Vue.prototype.$message = showMessage

// 注册全局指令
import vLoading from '@/directives/loading'
Vue.directive("loading", vLoading)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// 测试接口数据
// import * as blogApi from "./api/blog";

// blogApi.getBlog("asdfasdf").then((r) => {
//   console.log(r);
// });



// blogApi.postComment({
//   nickname: "昵称",
// 	content: "评论内容，纯文本",
// 	blogId: '21'
// }).then(res => {
//   console.log(res);
// })

// blogApi.getComments("123123").then((r) => {
//   console.log(r);
// });
