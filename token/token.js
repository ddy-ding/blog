const jwt = require('jsonwebtoken');
const jwtScrect = 'DDY_first_token'

/**
 * @description 登录接口 生成token的方法
 * @param {number} username 
 * @param {number} id 
 * @returns 
 */
const setToken = function(username,id) {
  return new Promise((resolve) => {
    /**
     * username id 是传入需要解析的值（一般为用户名，用户id 等）
     * expiresln 设置token过期的时间
     */
    const token = jwt.sign({username: username, id:id},jwtScrect, { expiresIn: '24h' })
    resolve(token)
  })
}
const getToken = function(token) {
  return new Promise ((resolve, reject) => {
    if(!token) {
      console.log('token是空的')
      reject({
        error: 'token是空的'
      })
    } else {
      // 第二种
      var info = jwt.verify(token.split(' ')[1], jwtScrect);
      resolve(info);
    }
  })
}
module.exports = {
  setToken,
  getToken
}