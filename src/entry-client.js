
/*
 * 客户端entry只需要创建应用程序，并且将其挂载到dom中
   我们需要在挂载app之前调用router.onReady,因为路由器必须要提前解析路由配置中的异步组件，
   才能正确地调用组件中可能存在的路由钩子。这一步我们已经在我们的服务器入口 (server entry) 中实现过了，
   现在我们只需要更新客户端入口 (client entry)：
 */
import Vue from 'vue'
import { createApp } from './main'

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
        const activated = matched.filter((c,i) => {
            return diffed || (diffed = (prevMatched[i] !== c))
        })
        if(!activated.length) {
            return next()
        }
        // 如果有加载指示器（loading indicator）,就触发
        Promise.all(activated.map(c => {
            if(c.asyncData) {
                return c.asyncData({ store, route:to})
            }
        })).then(() => {
            // 停止加载指示器
            next()
        }).catch(next)
    })
    // 这里假定 App.vue 模板中根元素具有 `id="app"`
    app.$mount('#app')
 })

//  方式二
Vue.mixin({ 
    beforeMount(to, from, next){
        const { asyncData } = this.$options
        if(asyncData) {
            // 将获取数据操作分配给 promise
            // 以便在组件中，我们可以在数据准备就绪后
            // 通过运行 `this.dataPromise.then(...)` 来执行其他任务
             asyncData({
                store: this.$store,
                route: to
            }).then(next).catch(next)
        } else {
            next()
        }
}})
// 当使用 template 时，context.state 将作为 window.__INITIAL_STATE__ 状态，
// 自动嵌入到最终的 HTML 中。而在客户端，在挂载到应用程序之前，store 就应该获取到状态：
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
  }
 
/**[客户端数据预处理流程]
 * 在客户端处理数据预取有两种方式1.在路由导航之前解析数据  2.匹配要渲染的视图取数据
 * 方式1：使用此策略，应用程序会等待视图所需数据全部解析之后，再传入数据并处理当前视图。
 * 好处在于，可以直接在数据准备就绪时，传入视图渲染完整内容，但是如果数据预取需要很长时间，
 * 用户在当前视图会感受到"明显卡顿"。因此，如果使用此策略，建议提供一个数据加载指示器 (data loading indicator)。
 * 我们可以通过检查匹配的组件，并在全局路由钩子函数中执行 asyncData 函数，来在客户端实现此策略。
 * 注意，在初始路由准备就绪之后，我们应该注册此钩子，这样我们就不必再次获取服务器提取的数据。
 * 方式2：
 * 此策略将客户端数据预取逻辑，放在视图组件的 beforeMount 函数中。
 * 当路由导航被触发时，可以立即切换视图，因此应用程序具有更快的响应速度。
 * 然而，传入视图在渲染时不会有完整的可用数据。因此，对于使用此策略的每个视图组件，
 * 都需要具有条件加载状态。
 * 这可以通过纯客户端 (client-only) 的全局 mixin 来实现：
 * 
 * 总结：
 * 这两种策略是根本上不同的用户体验决策，应该根据你创建的应用程序的实际使用场景进行挑选。
 * 但是无论你选择哪种策略，当路由组件重用（同一路由，但是 params 或 query 已更改，
 * 例如，从 user/1 到 user/2）时，也应该调用 asyncData 函数。
 * 我们也可以通过纯客户端 (client-only) 的全局 mixin 来处理这个问题：
 */
