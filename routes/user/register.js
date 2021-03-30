// 导入数据库相关配置
let mysql = require('../db');
let express = require('express');
let router = express.Router();

//  获取客户端数据
router.post('/', (req , res) => {
  console.log('req', req)
  console.log('res', res)
  let { name, psw , id } = res.body
   console.log('registername',name)
   console.log('registerpsw',psw)
   console.log('registerid',id)
   mysql.query(`SELECT * FROM user_info WHERE username= '${name}'`, (err , data) => {
     if(data[0]) {
       console.log(data,data)
       res.send({ statusCode:0, msg:'用户名已经存在'})
     } else {
      console.log('err', err)
      console.log('err', data)
      if(err) {
        res.send({ statusCode:0, msg:'注册失败'})
        return
      } else {
        res.send({ statusCode:200, msg:'注册成功'})
      }
     }
   })
})