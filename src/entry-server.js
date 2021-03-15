 /**
  * 服务器entry使用default export导出函数，并在每次渲染中重复调用此函数
  * 主要的作用就是创建和返回程序的实例
  * 并执行服务器理由匹配和数据预取逻辑
  */
/**
 * 这个页面实现服务器端路由逻辑
 */

import {createApp}  from './main'

export default context => {
    // 因为有可能会是一个异步路由钩子函数或者组件，所以我们将返回一个promise
    // 以便服务器能够等待所有的内容在渲染前就已经准备就绪
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp()
        // 设置服务器端router的位置
        router.push(context.url)
        // 等到 router 将可能的异步组件和钩子函数解析完
        router.onReady(() => {
            // 路由匹配
            const matchedComponents = router.getMatchedComponents()
            console.log('matchedComponents-entry-server页面',matchedComponents)
            // 如果匹配不到路由就执行reject函数，并返回404
            if( !matchedComponents.length ) {
                return reject({ code:404 })
            }
            // 对所有匹配的路由组件调用·asyncData()·
            Promise.all(matchedComponents.map(Component => {
                if(Component.asyncData()) {
                    return Component.asyncData({
                        store,
                        router:router.currentRoute
                    })
                }
            })).then(() =>{
             // 在所有预取钩子(preFetch hook) resolve 后，
             // 我们的 store 现在已经填充入渲染应用程序所需的状态。
             // 当我们将状态附加到上下文，
             // 并且 `template` 选项用于 renderer 时，
             // 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。
             context.state = store.state
              // Promise 应该 resolve 应用程序实例，以便它可以渲染
             resolve(app)
            })
           
        }, reject)
    })
}