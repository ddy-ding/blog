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
const resolve = file => path.resolve(__dirname,file)
const renderer = createBundleRenderer(require('./dist/vue-ssr-server-bundle.json'),{
    runInNewContext:false,
    template:fs.readFileSync(resolve('./index.template.html'),'utf-8'),
    clientManifest:require('./dist/vue-ssr-client-manifest.json'),
    basedir:resolve('./dist')
})
app.use(express.static(path.join(__dirname,'dist')))
app.use('/manifest.json',express.static(path.join(__dirname,'manifest.json')))
app.use('/logo',express.static(path.join(__dirname,'logo')))
app.get('*',(req,res) => {
    res.setHeeader('Content-Type', 'text/html')
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
        title:'前端小站',
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