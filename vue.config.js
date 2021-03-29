 /*
 * @Description: https://juejin.cn/post/6886698055685373965
 * @version: 
 * @Author: Fiona
 * @Date: 2020-10-12 18:31:17
 * @LastEditors: Fiona
 * @LastEditTime: 2021-02-04 17:39:18
 */
// 配置ssr相关 vue-cli3相关配置
const ServerPlugin = require('vue-server-renderer/server-plugin'); //生成服务端清单
const ClientPlugin = require('vue-server-renderer/client-plugin');//生成客户端清单
const nodeExternals = require('webpack-node-externals');//忽略node_modules文件夹中的所有模块
const { resolve } = require('path');
const VUE_NODE = process.env.VUE_NODE === 'node';
const entry = VUE_NODE ? 'entry-server' : 'entry-client';//根据环境变量来指向入口
// 配置ssr相关文档结束
 
module.exports = {
  productionSourceMap: false, //生产环境是否要生成 sourceMap
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
  chainWebpack: config => {
    // 
    config.resolve.alias
       .set('@',resolve('./src'))
       .set('api',resolve('./src/service/api'))
       .set('common', resolve('./src/common'))
    config.module
      .rule('vue')
        .use('vue-loader')
          .tap(options => {
               options.optimizeSSR = false;
               return options;
      });
    // `url-loader`是webpack默认已经配置的，现在我们来修改它的参数
    config.module
      .rule('images')
        .use('url-loader')
          .tap(options => {
              options = {
                  limit: 1024,
                  fallback:'file-loader?name=img/[path][name].[ext]'
              }
          return options;
      });
    },
    devServer: {
      port:8088,
      disableHostCheck: true,
      proxy: {
        '/api': {
          target:'http://127.0.0.1:3000',
          changeOrigin: true, // 起一个虚拟服务器跨域
          secure: false, // 是否验证SSl证书(忽略https安全提示))
          pathRewrite: {
              '^/api': '',
          },
        }
      }
    }
}
