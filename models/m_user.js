//数据库操作的部分
//配置mysql
var mysql = require('mysql');

//配置数据库
    var createConnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'news51'
    });
//1.验证邮箱
const checkEmail = function(email,callback){
const sqlstr = 'select * from `users` where email = ?'
createConnection.query(sqlstr,email,(err,data) => {
    if(err) {
        return callback(err,null)
    }
    callback(null,data);
})
};



//导出模块
exports.checkEmail = checkEmail;