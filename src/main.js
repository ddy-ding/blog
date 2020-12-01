/*
 * @Description: 入口配置文件
 * @version: 
 * @Author: Fiona
 * @Date: 2020-10-22 09:43:14
 * @LastEditors: Fiona
 * @LastEditTime: 2020-10-23 15:34:54
 */
import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible' // lib-flexible 用于设置 rem 基准值
import "@/svgIcon/index.js"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
