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
                // console.log(data)
                //把正确的用户信息保存起来 使用包 express-session 就可以使用req.session
                    //动态添加一条数据 保存session文件
                    req.session.user = data[0]
                    //将信息持久化储存app.js中使用express-mysql-session

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
//处理退出按钮
const handleSignout = (req, res) => {
    //清除session中的信息
    delete req.session.user  //上面39行是保存的用户登录的信息
    //重定向到登录页
    res.redirect('/signin')
}
//导出

exports.showSignin = showSignin;
exports.handleSignin = handleSignin;
exports.handleSignout = handleSignout;