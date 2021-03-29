### 日志文件
3.16--完成ssr搭建和webpack搭建
### 盒模型
前端面试之盒子模型（标准盒模型、怪异盒模型）和 css3指定盒子模型种类的box-sizing属性------https://www.imooc.com/article/68238

### 问题二
问题描述:父组件中引入子组件的时候，当要触发子组件点击事件的时候@click不生效
问题解决：
1.@click.native
2.在子组件中添加this.$emit('事件名', value)方法讲子组件的值传到父组件中
### 总结三
process.env.VUE_APP_PROXYAPIPATH
主要是指使用环境变量中的值
必须使用VUE_APP开头的环境变量名称，否则读取不到

简单介绍：项目需要在不同的环境下进行开发（开发 生产 测试）等，为了避免我们需要多次的去切换请求的地址以及相关的配置，vue-cli2是可以直接在config文件中进行配置的，但是vue-cli4和vue-cli3已经简化，可以建立.env系列文件
（一）建立.env系列文件
首先我们在根目录新建3个文件，分别为.env.development，.env.production，.env.test
注意文件是只有后缀的。
.env.development 模式用于serve，开发环境，就是开始环境的时候会引用这个文件里面的配置
.env.production模式用于build，线上环境。
.env.test 测试环境
 (二) 修改文件
 1.开发环境
  //.env.development 
  VUE_APP_BASE_API = '需要请求API'
 2.线上环境
  //.env.production
  VUE_APP_BASE_API = '需要请求API'
 3.测试环境
  //.env.test
  VUE_APP_BASE_API = '需要请求API'
（三）更改package.json文件
 "scripts": {
    "dev": "vue-cli-service serve",
    "test": "vue-cli-service serve --mode test",
    "build": "vue-cli-service build",
    "build:test": "vue-cli-service build --mode test",
    "lint": "vue-cli-service lint"
  },
（四）使用
当需要用到该变量是可以用process.env.VUE_APP_BASE_API进行取值
例如：
在js文件中直接使用
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 10000,
})
哈哈哈~~~还要修改vue.config.js里面的相关配置哦
eg：const proxyApiPath = process.env.VUE_APP_PROXYAPIPATH || 'http:xxxx';
或
publicPath: process.env.NODE_ENV === 'development' ? '/' : './',等等...