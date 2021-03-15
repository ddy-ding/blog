/*
 * @Description: ssr与服务器集成
 * @version: 
 * @Author: Fiona
 * @Date: 2021-02-08 13:46:51
 * @LastEditors: Fiona
 * @LastEditTime: 2021-02-08 16:48:54
 */
const express = require('express')
const fs = require('fs')
const path = require('path')
const { createBundleRenderer} = require('vue-server-renderer')
const { minify } = require('html-minifier')
const app = express()
const resolve = file => path.resolve(__dirname,file)// 模板地址

// 服务端渲染清单
// 读取模板
const renderer = createBundleRenderer(require('./dist/vue-ssr-server-bundle.json'),{
    runInNewContext:false,
    template:fs.readFileSync(resolve('./public/index.nodeTempalte.html'),'utf-8'), 
    clientManifest:require('./dist/vue-ssr-client-manifest.json'), // 客户端渲染清单
    basedir:resolve('./dist')
})
app.use(express.static(path.join(__dirname,'dist')))
app.use('/js', express.static(resolve(__dirname, './dist/js')))
app.use('/img', express.static(resolve(__dirname, './dist/img')))

//  路由请求
app.get('*',(req,res) => {
    res.setHeader('Content-Type', 'text/html')
     //传入路由 src/entry/server.js会接收到  使用vueRouter实例进行push
    const handleError = err => {
        if(err.url) {
            res.redirect(err.url)
        } else if(err.code === 404) {
            res.status(404).send('404 | page not found')
        } else {
            res.status(500).send('500 | internal server error')
            console.error(`error during render : ${req.url}`)
            console.error(err.stack)
        }
    }
    const context = {
        title:'ccc',
        url: req.url
    }
    renderer.renderToString(context,(err,html) => {
        console.log(err)
        if(err) {
            return handleError(err)
        }
        res.send(minify(html, { collapseWhitespace:true,minifyCSS:true }))
    })
})

app.listen(9999,() => {
    console.log('vue ssr started at localhost:9999')
})
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