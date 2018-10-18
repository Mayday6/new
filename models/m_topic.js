//导入数据库
const db = require('../tools/db_config')
exports.findAllTopic = (callback) => {
    const sqlstr = 'select * from `topics`oder by `createdAt` desc'
    db.query(sqlstr,(err,data) => {
        if(err) {
            return callback(err);
        }
        callback(null,data);
    })
}

//向数据库中添加新数据
exports.addTopic = (body,callback) => {
    const sqlstr = 'insert into `topics` set ?'
    //body通过传参的形式传入
    db.query(sqlstr,body,(err,data) => {
        if(err) {
            return callback(err);
        }
        callback(null,data);
    })
}