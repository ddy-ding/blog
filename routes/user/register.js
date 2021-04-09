const express = require('express');
const router = express.Router();
const sqlObj = require('../../db/sql');
// const moment = require('moment');
const connection = require('../../db/db')
 
router.post('/register',(req,res) => {
  const username = req.body.username;
  const password = req.body.password;
  if(!username || !password) {
    return res.json({
      code: 1,
      message: '账号密码不能为空'
    })
  } else {
    console.log('如果有用户表需要判断用户表是否存在')
    const params = [username,password]
    connection.query(sqlObj.sqls.register,params,(error) => {
      if(error) {
        throw error
      } else {
        return res.json({
          code: 200,
          message: '注册成功'
        })
      }
    })
  }
});
module.exports = router