
/*
 * 客户端entry只需要创建应用程序，并且将其挂载到dom中
   我们需要在挂载app之前调用router.onReady,因为路由器必须要提前解析路由配置中的异步组件，
   才能正确地调用组件中可能存在的路由钩子。这一步我们已经在我们的服务器入口 (server entry) 中实现过了，
   现在我们只需要更新客户端入口 (client entry)：
 */
// import Vue from 'vue'
import {createApp} from './main'

 // 客户端特定引导逻辑……
 
 const { app, router,store } = createApp()

 router.onReady(() => {
    // 添加路由钩子函数，用于处理 asyncData.
    // 在初始路由 resolve 后执行，
    // 以便我们不会二次预取(double-fetch)已有的数据。
    // 使用 `router.beforeResolve()`，以便确保所有异步组件都 resolve。
    // 方式1
    router.beforeResolve((to, from,next) => {
       const matched = router.getMatchedComponents(to)
       const prevMatched = router.getMatchedComponents(from)
        // 我们只关心非预渲染的组件
        // 所以我们对比它们，找出两个匹配列表的差异组件
        let diffed = false
        const activated = matched.filter((c, i) => {
          return diffed || (diffed = (prevMatched[i] !== c))
      })
        if(!activated.length) {
            return next()
        }
        // 如果有加载指示器（loading indicator）,就触发
        Promise.all(activated.map(c =>  {
            if(c.asyncData) {
               return c.asyncData({ store, route: to })
            }
        })).then(() => {
            // 停止加载指示器
            next()
        }).catch(next)
    })
    // 这里假定 App.vue 模板中根元素具有 `id="app"`
    app.$mount('#app')
 })
// 当使用 template 时，context.state 将作为 window.__INITIAL_STATE__ 状态，
// 自动嵌入到最终的 HTML 中。而在客户端，在挂载到应用程序之前，store 就应该获取到状态：
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
  }
 
