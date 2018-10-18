//导入数据库
const db = require('../tools/db_config')
exports.findAllTopic = (callback) => {
    const sqlstr = 'select * from `topics` order by `createdAt` desc'
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
//根据条件查询数据库中的信息
exports.findTopicId = (topicId,callback) => {
 const sqlstr = 'select * from `topics` where id = ?'
 db.query(sqlstr,topicId,(err,data) => {
     if(err) {
         return callback(err)
     }
     callback(null,data)
 })
}