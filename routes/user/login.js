const express = require('express');
const router = express.Router();
const sqlObj = require('../../db/sql');
// const moment = require('moment');
const connection = require('../../db/db')
// 引入token
const token = require('../../token/token')

// 登录
router.post('/login',(req, res) => {
   const username = req.body.username;
   const password = req.body.password;
   console.log('username',username)
   console.log('password',password)
   if(!username || !password) {
     return res.json({
      code:1,
      message:'账户或密码不能为空'
     })
   } else {
     const params = [username,password]
     connection.query(sqlObj.sqls.login, params, (err, result) => {
       if(err) {
         throw err;
       } else {
         if(result) {
           console.log(result)
           token.setToken(result[0].id,result[1].username).then(data => {
             return res.json({
               code: 200,
               message:'登录成功',
               token:data
             })
           })
         } else {
          //  需要对用户进行处理
         }
       }
     })
   }
})