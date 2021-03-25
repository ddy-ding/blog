/*
 * @Description: 路由页面
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-14 11:23:05
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-15 15:23:11
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 解决导航栏或者底部导航tabBar中的vue-route在3.0版本上频繁点击菜单报错的问题
const originalPush  = Router.prototype.push
Router.prototype.push = function push(location){
    return originalPush.call(this,location).catch(err => err)
}
export function createRouter() {
  return new Router({
    mode:'history',
    routes:[
      {
          path:'/',
          component: () => import('@/page/Home/Home.vue'),
          name:'home',
          meta: { index: 0 }
      },
      // 注册
      {
        path: '/signup',
        component: () => import('@/page/User/Signup/Signup.vue'),
        name:'signup'
      },
      // 登录
      {
        path: '/singin',
        component: () => import('@/page/User/Signin/Signin.vue'),
        name:'signin'
      }
    ]
  })
}