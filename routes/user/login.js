// 导入数据库相关配置
let mysql = require('../db');
let express = require('express');
let router = express.Router();

// 获取客户端数据
router.get('/' , (req, res) => {
   console.log('res',res)
   console.log('req',req)
  //  把客户端传来的名字，密码赋值到新的变量
  const name = req.query.username;
  const pwd = req.query.password;
  console.log('pwd',pwd)
  // 通过名字查询数据库用户表得到密码
  mysql.query(`SELECT * FROM user_info WHERE username= '${name}'`,(err, data) => {
    if(err) {
      console.log('loginjs',err)
      res.send({statusCode:500, msg:'数据库错误'})
    } else {
      if(data.length === 0) {
        res.send({statusCode:400, msg:'没有当前用户'})
      } else {
        // 将传过来的数据转换成json数据
        const newPwd = JSON.stringify(data[0].password)
        const handlePwd = JSON.parse(newPwd)
        if(handlePwd === pwd) {
          req.session['id']=data[0].id;
          res.send({statusCode:200, msg:'登录成功'})
          return
        } else {
          res.send({statusCode:0, msg:'密码不正确'})
        }
      }
    }
    res.send({statusCode:0, msg:'用户名不正确'})
  })

})