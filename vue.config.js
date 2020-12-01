 /*
 * @Description: 1.polyfill的相关配置-浏览器兼容问题（很多的时候我们不知道哪里出现的兼容性问题，所以用下面的配置方法）
 * @version: 
 * @Author: Fiona
 * @Date: 2020-10-12 18:31:17
 * @LastEditors: Fiona
 * @LastEditTime: 2020-10-22 18:30:22
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
            localIdentName: '[name]-[hash]', // 设定 CSS Modules 命名规则
        },
        localsConvention: 'camelCaseOnly'
      },
      postcss: {
        plugins: [
            autoprefixer(),
            pxtorem({
                rootValue: 75,
                propList: ['*'],
                "selectorBlackList":["van-"]   //排除vant框架相关组件
            })
            ]
      }
    }
  }
}
