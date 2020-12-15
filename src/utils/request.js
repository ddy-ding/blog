/*
 * @Description: axios封账过程
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-15 17:20:07
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-15 18:21:18
 */
import axios from 'axios'
// 创建实例
const service = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? `/java` : '/apis',
    timeout:30000, // 请求超时
    retry: 3, // 超时重新请求次数
    headers: {
        get: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
        },
        post: {
          'Content-Type': 'application/json;charset=utf-8'
          // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
        }
    },
    validateStatus: function () {
		// 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
		return true
    },
    // 请求响应处理
    // 在向服务器发送请求前，序列化请求数据
    transformRequest:[function(data) {
        data = JSON.stringify(data)
        return data
    }],
    // 在传递给then/catch前修改数据
    transformResponse:[function(data) {
        if(typeof data === 'string' && data.startsWith('{')) {
            data = JSON.parse(data)
        }
        return data
    }]
})
// 请求拦截器
service.interceptors.request.use(config => {
    const token = ''
    if(token) {
        config.params = {'token':token} // 携带在参数中
        config.headers.token = token; //携带在请求头中
    }
    return config
}, (error) => {
    error.data = {}
    error.data.msg = '服务器异常,请联系管理员'
    return Promise.resolve(error)
})
