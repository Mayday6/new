//路由模块 监听请求
    //1.引入包
    const express = require('express');
    const c_user = require('./controller/c_user');
    //2.设置router对象
    const router = express.Router();
    //3.监听请求
      //(3).监听请求方式
      router.get('/login',c_user.showSignin)
    //4导出模块
    module.exports = router;