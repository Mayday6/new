//程序的入口文件
    //1.导入包
    const express = require('express');
    const router = require('./router')
    //2.设置app对象
    const app = express();
        app.use(router)
    //监听端口
    app.listen(5000,()=>{
        console.log('服务器启动');
    })