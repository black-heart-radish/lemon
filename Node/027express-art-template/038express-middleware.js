const express = require('express')

const app = express()

// 中间件 ： 处理请求的, 本质就是一个函数

// 在 Express 中, 对中间件有几种分类
// 
// 当请求进来, 会从第一个中间件开始匹配
//    如果匹配, 则进来
//        如果请求进入中间件之后, 没有调用 next, 则代码会停在当前中间件
//        如果调用了 next, 则继续向后找到第一个匹配的中间件
//    如果不匹配, 则继续匹配下一个中间件

// 1. 不关心请求路径和请求方法的中间件
// 也就是说任何请求都会进入这个中间件
// 中间件本身是一个方法, 该方法接收三个参数
//    Request 请求对象
//    Response 响应对象
//    next 下一个中间件
// 当一个请求进入中间件后, 如果不调用 next 则会停留在当前中间件
// 所以 next 是一个方法, 用来调用下一个中间件的
// next 方法也是要匹配的, 不是调用紧挨着的那一个

app.use((req, res, next) => {
  console.log('请求 1 进来了');
  next()
})

app.use((req, res) => {
  console.log('请求 2 进来了');
})


// 2. 以 /xxx 开头的中间件
app.use('/a', (req, res, next) => {
  console.log(req.url);
})

// 3. 除了以上中间件外, 还有一种最常用的
//    严格匹配请求方法和请求路径的中间件
// app.get
// app.post

// 4. 如果没有匹配的中间件, 则 Express 会默认输出： Can not GET 请求路径

app.listen(3000, () => {
  console.log('Server is runing...');
})
