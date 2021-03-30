
// 连接数据库
const mysql = require('mysql')

// 设置数据库链接属性
let connection = mysql.createConnection({
  host :'localhost',
  user:"root",
  password:"root",
  database:"blog",
  port: "3306"
});
connection.connect(err => {
  if(err) {
    console.log('err',err)
  } else {
    console.log('数据库连接')
  }
})

module.exports = connection