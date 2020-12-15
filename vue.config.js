 /*
 * @Description: 1.polyfill的相关配置-浏览器兼容问题（很多的时候我们不知道哪里出现的兼容性问题，所以用下面的配置方法）
 * @version: 
 * @Author: Fiona
 * @Date: 2020-10-12 18:31:17
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-15 17:16:44
 */
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const path = require("path");
// const resolve = dir => path.join(__dirname, dir);
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
    extract: IS_PROD,
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
  dev: {
    overlay: { // 让浏览器 overlay 同时显示警告和错误
        warnings: true,
        errors: true
      },
      host: "localhost",
      port: 8088, // 端口号
      https: false, // https:{type:Boolean}
      open: false, //配置后自动启动浏览器
      hotOnly: true, // 热更新
      // proxy: 'http://localhost:8080'   // 配置跨域处理,只有一个代理
      proxy: { //配置多个代理
          "/testIp": {
              target: "http://197.0.0.1:8088",
              changeOrigin: true, // 起一个虚拟服务器跨域
              ws: true,//websocket支持
              secure: false, // 是否验证SSl证书(忽略https安全提示))
              pathRewrite: {
                  "^/testIp": "/"
              }
          },
          "/elseIp": {
              target: "http://197.0.0.2:8088",
              changeOrigin: true,
              //ws: true,//websocket支持
              secure: false,
              pathRewrite: {
                  "^/elseIp": "/"
              }
          },
      }
  }
}
