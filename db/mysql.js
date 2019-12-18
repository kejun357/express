const mysql = require('mysql')

const { MYSQL_CONF } = require('../conf/db')

//创建链接对接
const con = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'1234',
    port:'3306',
    database:'myblog'
})
// 开始连接
con.connect();

//统一执行sql的函数
function  exec(sql) {
    const promise =new Promise((resolve, reject) => {
        con.query(sql, (err, result) =>{
            if(err){
                reject(err)
                return
            }
            resolve(result)
        })
    })
    return promise
}
module.exports = {
    exec
}
