// const connection = require("./db")
const sqls = {
  login: 'select * from user_info where username = ? and password = ?',
  register: 'insert into user_info (id,username,password,createtime) value (0,?,?,?)',
}
module.exports = {
  sqls,
}