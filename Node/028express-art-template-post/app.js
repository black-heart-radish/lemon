const express = require('express')
const bodyParser = require('body-parser')
const date = require('./public/js/date')

const app = express()

app.engine('html', require('express-art-template'))

let comments = [
  {
    name: '张三',
    message: '我与春风皆过客, 你携秋水揽星河',
    dateTime: '2020-10-20'
  },
  {
    name: '李四',
    message: '无端坠入凡尘梦, 惹却三千烦恼丝',
    dateTime: '2020-10-20'
  },
  {
    name: '王五',
    message: '身是红尘雨中客, 愿有执伞并肩人',
    dateTime: '2020-10-20'
  },
  {
    name: '刘二',
    message: '错把陈醋当成墨, 写尽半生纸上酸',
    dateTime: '2020-10-20'
  }
]

app.use('/public', express.static('./public'))

// 配置 body-parser 中间件(插件, 专门用来解析 POST 表单请求体)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app
  .get('/', (req, res) => {
    res.render('index.html', {
      comments
    })
  })
  .get('/post', (req, res) => {
    res.render('post.html')
  })
  // .get('/pinglun', (req, res) => {
  //   // res.query 只能拿 GET 请求参数
  //   let comment = req.query
  //   comment.dateTime = date
  //   comments.unshift(comment)
  //   res.redirect('/')
  // })

// 当以 POST 请求 /post 的时候, 执行指定的处理函数
// 这样的话我们就可以利用不同的请求方式让一个请求路径请求多次
app.post('/post', (req, res) => {
  // 1. 获取表单 POST 请求体数据
  // 2. 处理
  // 3. 发送响应
  // console.log(req.body);

  let comment = req.body
  comment.dateTime = date
  comments.unshift(comment)
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('Server is runing...');
})

// res.send()
// res.redirect()
// 这些方法 Express 会自动结束响应