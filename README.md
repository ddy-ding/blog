# fionading

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
### vue.config.js
 // 1.vue.config.js基本配置
 // 2.插件及规则的配置 configureWebpack 方式 chainWebpack 方式
 // 3.规则rules相关配置（包括新增和修改）
 // 4.插件plugins的配置（新增和修改）
 // 5.一些常见的配置

### 从这往下是一些配置的相关解释请知悉
### 修改mainjs的原因
在纯客户端应用程序中，我们将在此文件中创建根Vue实例，并直接挂载到dom
但是，对于服务器端渲染（ssr），责任转移到纯客户端entry文件
### 修改vue.config.js配置文件
主要是因为webpack的入口文件有两个，一个是客户端使用，一个是服务端使用
### 渲染页面写法
app.get('*',(request,response) => {
  response.end('hello ssr')
}) 这种形式只是读取服务器的文字，但是需要读取配置文件需要做以下修改
1.修改响应头
2.引入vue-server-renderer中的createRenderer对象，有一个renderToString的方法，可以将vue实例转成html的形式。
（备注：（renderToString这个方法接受的第一个参数是vue的实例，第二个参数是一个回调函数，如果不想使用回调函数的话，这个方法也返回了一个Promise对象，当方法执行成功之后，会在then函数里面返回html结构。））
###  客户端数据预处理流程
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
### 服务端数据预处理--流程
/**[服务端数据预处理--流程]
 * 简单介绍（来源文档）1.通过router.getMatchedComponents()进行路由匹配组件
 * 2.如果组件暴露出 asyncData，我们就调用这个方法
 * 3.然后我们需要将解析完成的状态，附加到渲染上下文(render context)中。
 */
### node相关配置
/**
 * node相关配置
 * 1.用node渲染，必然要拦截get请求的，然后根据get请求地址来进行要渲染的页面
 * 其流程为：
 * 1.node拦截所有的get请求
 * 2.将获取的路由地址传给前台，然后使用router实例进行push
 * 3.创建BundleRenderer:createBundleRenderer
 * 4.将Vue实例渲染为字符串:renderToString
 * 5.渲染应用程序的模板:template
 * 6.生成所需要的客户端或服务端清单:clientManifest
 */