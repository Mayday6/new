//导入moment包
const moment = require('moment')
//导入模型文件
m_topic = require('../models/m_topic')
const showTopic = (req,res) => {
    //调用模型方法
    m_topic.findAllTopic((err,data) => {
        if(err) {
            return res.send({
                code: 500,
                msg: '服务器错误'
            })
        }
        //拿到正确的数据
        res.render('index.html',{
            topics : data,
            //当前登录用户的信息 对象形式
            user: req.session.user
        })
    });
    //渲染话题列表页render第一个参数是要传入的页面
    //第二个参数是需要渲染的数据
}
//发布新话题
const createTopic = (req,res) => {
    res.render('topic/create.html')
}
//处理发布新话题的表单
const handleCreateTopic = (req,res) => {
    //获取表单数据
    const body = req.body;
    //使用moment包 给body获取的表单对象添加时间
    body.createdAt = moment().format(); 

    //将数据添加到数据库中 操作数据库
    m_topic.addTopic(body,(err,data) => {
        //操作数据库返回的结果
        if(err) {
            return res.send({
                code : 500,
                msg: '服务器错误'
            })
        }
        res.send({
            code:200,
            msg:'发布新话题成功'
        })
    })
}
//导出
exports.showTopic = showTopic;
exports.createTopic = createTopic;
exports.handleCreateTopic = handleCreateTopic;