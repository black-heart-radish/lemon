const express = require('express')

const app = express()

// 路由其实就是一张表
// 表里头有具体的映射关系

// 当你以 get 方法请求 / 的时候,
// 执行对应的回调函数
app.get('/', (req, res) => {
  // res.write('hello')
  // res.write(' world')
  // res.end()

  res.send('hello Node.js')
})

// 当你以 post 方法请求 / 的时候,
// 执行对应的回调函数
app.post('/about', (req, res) => {
  res.send('hello express')
})

// 当以 /public 开头的时候, 去 ./public 目录中寻找对应的资源
// app.use('/public', express.static('./public'))
// 通过 http://127.0.0.1:3000/public/img/1.jpg 访问

// 这个开头也可以换成其他的, 比如 /a
app.use('/a', express.static('./public'))
// 通过 http://127.0.0.1:3000/a/img/1.jpg 访问

// 当省略第一个参数的时候, 则可以通过省略 /public的方式来访问, 加上反而不行
// app.use(express.static('./public'))
// 通过 http://127.0.0.1:3000/img/1.jpg 访问

app.listen(3000, () => {
  console.log('Express Server is runing...');
})