//导入数据库模块
const m_user = require('../models/m_user')
// const body = require('body-parser')
//渲染的请求
const showSignin = (req,res) => {
    res.render('signin.html')
}
//登录的请求
const handleSignin = (req, res) => {
    //获取表单数据
    const body = req.body
    // console.log(body)
    //第一个参数是获取到的页面上的email的值
    m_user.checkEmail(body.email, (err,data) => {
        if(err) {
                    return res.send({
                        //返回给前端的是一个对象
                        code : 500,
                        msg: '服务器错误'
                    })
                }
                //判断如果邮箱不存在
                if(!data[0]) {
                    return res.send({
                        code : 1,
                        msg: '邮箱不存在'
                    })
                }
                //邮箱存在 验证密码
                if(body.password != data[0].password) {
                    return res.send({
                        code:3,
                        msg : '密码错误'
                    })
                } 
                //如果账号和密码都正确重定向到指定页面
                //后端将正确的数字传给前端后，前端放入页面执行跳转
                 res.send({
                     code : 200,
                     msg : '跳转'
                 })        
    })
    // const sqlstr = 'select * from `users` where email = ?'
    // connection.query(sqlstr,body.email,(err,data) => {
    //     if(err) {
    //         return res.send(err)
    //     }
    //     //判断如果邮箱不存在
    //     if(!data[0]) {
    //         return res.send('邮箱不存在')
    //     }
    //     //邮箱存在 验证密码
    //     if(body.password != data[0].password) {
    //         return res.send('密码错误')
    //     } 
    //     //如果账号和密码都正确重定向到指定页面
    //      res.redirect('/')
    // })
}
//导出
exports.showSignin = showSignin;
exports.handleSignin = handleSignin;