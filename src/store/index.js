/**
 * ssr避免一些异步程序的时候，所以在渲染之前就应该先预取和解析好这些数据
 * 如果在挂载（mount）到客户端应用程序之前，需要获取到与服务器端应用程序完全相同的数据
 * 否则客户端应用程序会因为使用于服务器端应用程序不同的状态然后导致混合失败
 * 为了解决这个问题，获取的数据需要放置在专门的数据预取存储器（data store）和状态容器（state container）
 * 首先，在服务器端，我们可以在渲染之前预取数据，并将数据填充到 store 中。此外，我们将在 HTML 中序列化(serialize)和内联预置(inline)状态。这样，在挂载(mount)到客户端应用程序之前，可以直接从 store 获取到内联预置(inline)状态。
 */

 import Vue from 'vue'
 import Vuex from 'vuex'
 import alert from './page/alert'
 import auth from './page/user'
 import post from './page/post'
 import category from './page/category'
 import like from './page/like'
 import size from './page/size'
 import comment from './page/comment'

 Vue.use(Vuex)

 export default function createStore() {
     return new Vuex.Store({
         modules:{
            alert,
            auth,
            post,
            category,
            like,
            size,
            comment
         }
     })
 }