/*
 * @Description: 封装请求 --- http.js
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-16 11:12:43
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-16 17:19:57
 */
import  service from './request'

const METHOD = {
    GET:'get',
    POST:'post'
}
/**
 * @description 错误和失败信息都在这里进行处理，界面中调用的时候只处理正确数据即可
 * @param {*} method 方法
 * @param { string } url 接口地址
 * @param {*} params 参数
 * @param {boolean} showError 是否展示错误（展示没有具体做）
 * @returns (Promise<any>)
 */
function request (method, url, params) {
    return service({
      method: method,
      url: url,
      params:params
    }).then(res => {
      res.data
    }).catch (err => {
      console.log('err',err)
    })
}
/**
 * 
 * @param {*} url 地址
 * @param {*} params 参数 FormData
 * @param {*} showError 是否展示错误
 * @returns {Promise<any>}
 */
function uploadReq(url,params,showError) {
    if(showError || showError === undefined) {
        showError === true
    } else {
        showError === false
    }
    return new Promise((resolve,reject) => {
        service.post(url,params,showError).then((res) => {
            if(res.data.code === 0) {
                resolve(res.data.data)
            } else {
                reject(res.data);
                    if(showError) {
                        console.log('我还没写message弹窗')
                }
            }
        })
    }).catch(() => {
        if(showError) {
            console.log('wo hai mei xie tan chuang')
        }
    })
}
function get (url,params) {
    return request(METHOD.GET,url,params);
}
function post (url,params) {
    return request(METHOD.POST,url,params)
}
function upload(url,params) {
    return uploadReq(url,params)
}
export  {
    get,
    post,
    upload
}