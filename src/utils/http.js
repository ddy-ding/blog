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
/*
* 网络请求
* @params method 方法
* @params url 接口地址
* @params params 参数
* @params showError 是否展示错误信息
* @return (Promise<any>)
*/
// 错误和失败信息都在这里进行处理，界面中调用的时候只处理正确数据即可
function request (method, url, params,showError) {
    // 展示错误判断
    if(showError || showError == undefined) {
        showError = true
    }else {
        showError = false
    }
    return new Promise((resolve,reject) => {
        service({
            method: method,
            url: url,
            params:params
        }).then((res) => {
            if(res.data.code === 0){
                resolve(res.data.data)
            } else {
                // 错误信息的处理
                reject(res.data);
                if(showError){
                    console.log('我还没有写message弹窗')
                }
            }
        }).catch(() => {
            if(showError) {
                console.log('我还没写message的弹窗')
            }
        })
    })
}
/*
* 图片上传
* @params url 地址
* @param params 参数 FormData
* @param showError 是否展示错误
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
function get (url,params,showError) {
    return request(METHOD.GET,url,params,showError);
}
function post (url,params,showError) {
    return request(METHOD.POST,url,params,showError)
}
function upload(url,params,showError) {
    return uploadReq(url,params,showError)
}
export  {
    get,
    post,
    upload
}