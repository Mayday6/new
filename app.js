//程序的入口文件
    //1.导入包
    const express = require('express');
    const bodyParser = require('body-parser')
    const router = require('./router')
    //2.设置app对象
    const app = express();
        //配置模板的包 固定结构
        app.engine('html',require('express-art-template'))
        //处理静态资源
        app.use('/public',express.static('./public'));
        app.use('/node_modules',express.static('./node_modules'))
        app.use(bodyParser.urlencoded({ extended: false }))
    //监听端口
    app.use(router)
    app.listen(5000,()=>{
        console.log('服务器启动');
    })