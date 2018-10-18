//路由模块 监听请求
    //1.引入包
    const express = require('express');
    const c_user = require('./controller/c_user');
    const c_topic = require('./controller/c_topic')
    //2.设置router对象
    const router = express.Router();
    //3.监听请求
      //(3).监听请求方式
            //渲染登录页面的请求
      router.get('/signin',c_user.showSignin)
            //监听登录表单的提交
      router.post('/signin',c_user.handleSignin)
            //渲染话题页
      router.get('/',c_topic.showTopic)
            //发布新文章
      router.get('/topic/create',c_topic.createTopic)
            //发布新话题文章列表页
      router.post('/createTopic',c_topic.handleCreateTopic)
            //用户退出的请求
      router.get('/signout',c_user.handleSignout)
            //渲染用户列表的详情页
            //:topicId自定义的动态添加的请求标识
      router.get('/topic/:topicId',c_topic.showDetail)
    //4导出模块
    module.exports = router;