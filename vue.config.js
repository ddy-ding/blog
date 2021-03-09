 /*
 * @Description: 1.polyfill的相关配置-浏览器兼容问题（很多的时候我们不知道哪里出现的兼容性问题，所以用下面的配置方法）
 * @version: 
 * @Author: Fiona
 * @Date: 2020-10-12 18:31:17
 * @LastEditors: Fiona
 * @LastEditTime: 2021-02-04 17:39:18
 */
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const path = require("path");
// 配置ssr相关 vue-cli3相关配置
const ServerPlugin = require('vue-server-renderer/server-plugin'); //生成服务端清单
const ClientPlugin = require('vue-server-renderer/client-plugin');//生成客户端清单
const nodeExternals = require('webpack-node-externals');//忽略node_modules文件夹中的所有模块
// const { fstat } = require('fs');
const VUE_NODE = process.env.VUE_NODE === 'node';
const entry = VUE_NODE ? 'entry-server' : 'entry-client';//根据环境变量来指向入口
// 配置ssr相关文档结束

function resolve(dir) {
    return path.join(__dirname, dir);
  }
module.exports = {
 publicPath: IS_PROD ? "process.env.VUE_APP_PUBLIC_PATH" : "/", // 默认'/'，部署应用包时的基本 URL
 // 添加别名
 chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
    .use("svg-sprite-loader")
    .loader("svg-sprite-loader")
    .options({
        symbolId: "icon-[name]"
     });
    // 添加别名
    config.resolve.alias
      .set("@", resolve("/src"))
      .set("assets", resolve("src/assets"))
      .set("scss", resolve("src/assets/css"))
      .set("components", resolve("src/components"))
      .set("router", resolve("src/router"))
      .set("store", resolve("src/store"))
  },
 // css配置
 css: {
    extract: false, //关闭提取css，不关闭node渲染会报错
    sourceMap: false,
    requireModuleExtension: false, // 是否仅对文件名包含module的css相关文件使用 CSS Modules
    loaderOptions: {
      // 给 scss-loader 传递选项
      scss: {
        // 注入 `sass` 的 `mixin` `variables` 到全局, $cdn可以配置图片cdn
        prependData: `
                @import "assets/css/mixin.scss";
                @import "assets/css/variables.scss";
                $src: "${process.env.VUE_APP_OSS_SRC}";
                 `
      },
      css: {
        modules: {
          localIdentName: '[local]_[hash:base64:8]' // 设定 CSS Modules 命名规则 命名规则
        },
        localsConvention: 'camelCaseOnly'
      },
      postcss: {
        plugins: [
            autoprefixer(),
            pxtorem({
                rootValue: 75,
                propList: ['*'],
                selectorBlackList:["van-"]   //排除vant框架相关组件
            })
            ]
      }
    }
  },
  devServer: {
    overlay: { // 让浏览器 overlay 同时显示警告和错误
        warnings: true,
        errors: true
      },
      host: "0.0.0.0",
      port: 8088, // 端口号
      https: false, // https:{type:Boolean}
      open: false, //配置后自动启动浏览器
      hotOnly: true, // 热更新
      // proxy: 'http://localhost:8080'   // 配置跨域处理,只有一个代理
      proxy: { //配置多个代理
        '/api': {
              target: "http://hotplato.top:7777",
              changeOrigin: true, // 起一个虚拟服务器跨域
              ws: true,//websocket支持
              secure: false, // 是否验证SSl证书(忽略https安全提示))
              pathRewrite: {
                '^/api': '',
              }
          },
      }
  },
 // ssr具体配置  https://segmentfault.com/a/1190000018043697 
  configureWebpack: () => ({
      entry: `./src/${entry}`,
      output: {
          filename: 'js/[name].js',
          chunkFilename: 'js/[name].js',
          libraryTarget: VUE_NODE ? 'commonjs2' : undefined
      },
      target: VUE_NODE  ? 'node' : 'web',
      externals: VUE_NODE ? nodeExternals({
        allowlist: /\.css$/
    }) : undefined,
      plugins: [
          //根据环境来生成不同的清单。
          VUE_NODE ? new ServerPlugin() : new ClientPlugin()
      ]
  }),
}
