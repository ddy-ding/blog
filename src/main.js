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
import {createRouter} from './router'
import  {createStore}  from './store'
import VueLazyLoad from 'vue-lazyload'
import { sync } from 'vuex-router-sync'
import Rem from './utils/RemSet'
import './assets/css/remove.scss' //清除默认样式
import './assets/css/global.scss' //公共样式
Vue.prototype.Rem = Rem
/**
 * @param {string} loading
 * @returns webp图片格式
 * @description 添加懒加载图片并设置webp图片格式（这种格式目前只能在android下才能使用）
 */
Vue.use(VueLazyLoad,{
    loading:require('./assets/imgs/loading.gif'),
    listenEvents: ['scroll'],
    filter: {
        webp(listener, options) {
          if (!options.supportWebp) return
          const isCDN = /xiaohuochai.site/
          if (isCDN.test(listener.src)) {
            listener.src += '?imageView2/2/format/webp'
          }
        }
    }
})
Vue.config.productionTip = false
export function createApp() {
    // 创建 router 和 store 实例
    const router = createRouter()
    const store = createStore()

    // 同步路由状态（route state）到 Store
    sync(store, router)
    const app = new Vue({
        router,
        store,
        render: h => h(App),
    }) 
    // 暴露 app router和 store
    return  { app , router , store }
}

