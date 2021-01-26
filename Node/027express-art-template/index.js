const express = require('express')
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

app
  .get('/', (req, res) => {
    res.render('index.html', {comments})
  })
  .get('/post', (req, res) => {
    res.render('post.html')
  })
  .get('/pinglun', (req, res) => {
    // req.query 直接就能拿到参数
    let comment = req.query
    comment.dateTime = date
    comments.unshift(comment)

    // 以前的做法, 现在不用这么麻烦
    // res.statusCode = 302
    // res.setHeader('Location', '/')
    // res.send()

    res.redirect('/')
  })

app.listen(3000, () => {
  console.log('Server is runing...');
})