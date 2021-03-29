/*
 * @Description: axios封账过程
 * @version: 
 * @Author: Fiona
 * @Date: 2020-12-15 17:20:07
 * @LastEditors: Fiona
 * @LastEditTime: 2020-12-16 16:16:42
 */
import axios from 'axios'
// 创建实例
const service = axios.create({
    baseURL: '',
    timeout:30000, // 请求超时
    retry: 3, // 超时重新请求次数
    headers: {
        get: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
        post: { 'Content-Type': 'application/json;charset=utf-8' }
    },
    validateStatus: function () {
		// 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
		return true
    },
    /**
     * @description 请求处理响应  在向服务器发送请求前，序列化请求数据
     * @param {data} data
     */
    transformRequest:[function(data) {
        data = JSON.stringify(data)
        return data
    }], 
    /**
     * @description 在传递给then/catch前修改数据
     * @param { data } data
     */
    transformResponse:[function(data) {
        if(typeof data === 'string' && data.startsWith('{')) {
            data = JSON.parse(data)
        }
        return data
    }]
})
/**
 * @description 请求拦截器
 */
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
// 不同的状态提示不同的信息
const statusData = new Map([
    [400,['请求错误(400)']],
    [401,['未授权，请重新登录(401)']],
    [403,['拒绝访问(403)']],
    [404,['请求出错(404)']],
    [408,['请求超时(408)']],
    [500,['服务器错误(500)']],
    [501,['服务未实现(501)']],
    [502,['网络错误(502)']],
    [503,['服务不可用(503)']],
    [504,['网络超时(504)']],
    [505,['HTTP版本不受支持(505)']],
    ['default',[`连接出错(${status})!`]],
])
let message = ''
const showStatue = (status) => {
    let statusList = statusData.get(status) || statusData.get('default')
    message = statusList[0]
    return `${message}，请检查网络或联系管理员！`
}
/**
 * @description 响应拦截器
 */
service.interceptors.response.use((response) => {
    const status = response.status
    let msg = ''
    if(status < 200 || status >= 300) {
        // 处理http错误
        msg = showStatue(status)
        if(typeof response.data === 'string') {
            response.data = { msg }
        } else {
            response.data.msg = msg
        }
    }
    return response
}, (error) =>{
   console.log('err',error)
    // 错误处理
    error.data = {}
    error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
    return Promise.resolve(error)
    // 这边需要加登录超时操作
})

export default service