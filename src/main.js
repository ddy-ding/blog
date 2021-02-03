/*
 * @Description: 入口配置文件
 * @version: 
 * @Author: Fiona
 * @Date: 2020-10-22 09:43:14
 * @LastEditors: Fiona
 * @LastEditTime: 2021-02-03 18:19:26
 */
import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible' // lib-flexible 用于设置 rem 基准值
import router from './router'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)
 

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
