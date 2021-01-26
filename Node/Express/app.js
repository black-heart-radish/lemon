// 0. 安装
// 1. 引包
const express = require('express')

// 2. 创建你的服务器应用程序
//    也就是原来的 http.createServer
const app = express()

// 在 Express 中开放资源就是一个 API 的事儿
// 提供静态资源服务, 公开指定目录
app.use('/public/', express.static('./public/'))
// 只要这样做了, 你就可以直接通过 /public/xx 的方式访问 public 目录中的所有资源了

// 模板引擎在 Express 中也是一个 API 的事儿


// 当服务器收到 get 请求 / 的时候, 执行回调处理函数
app.get('/', function(req, res) {
  res.send('hello express!')
})

// 他会自动给你解决中文乱码的问题
app.get('/about', (req, res) => {
  res.send('关于我')
})

// 相当于 server.listen
app.listen(3000, function () {
  console.log('Express app is runing at port 3000');
})