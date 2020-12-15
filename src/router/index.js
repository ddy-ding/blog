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

const router = new Router({
    routes:[
        {
            path:'/',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Home/Home'),
            name:'home'
        },
        {
            path:'/login',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Login/Login'),
            name:'login'
        },
        {
            path:'/register',
            component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Login/Register'),
            name:'register'
        }
    ]
})
export default router