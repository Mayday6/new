//配置mysql
//数据库操作的部分
//配置mysql
var mysql = require('mysql');

//配置数据库
    var db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'news51'
    });
    //导出对象
    module.exports = db;