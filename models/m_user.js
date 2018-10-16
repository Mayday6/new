const db = require('../tools/db_config')
//1.验证邮箱
const checkEmail = function(email,callback){
const sqlstr = 'select * from `users` where email = ?'
db.query(sqlstr,email,(err,data) => {
    if(err) {
        return callback(err,null)
    }
    callback(null,data);
})
};



//导出模块
exports.checkEmail = checkEmail;