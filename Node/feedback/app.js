const http = require('http')
const fs = require('fs')
const url = require('url')
const template = require('art-template')

let comments = [
  {
    name: '张三',
    message: '举杯望明月',
    dateTime: '2021-1-21'
  },
  {
    name: '李四',
    message: '低头思故乡',
    dateTime: '2021-1-21'
  },
  {
    name: '王五',
    message: '行路难, 多歧路, 今安在',
    dateTime: '2021-1-21'
  },
  {
    name: '孙六',
    message: '长风破浪会有时',
    dateTime: '2021-1-21'
  },
]

http.createServer((req, res) => {
  const urlObj = new URL(req.url, 'http://127.0.0.1:3000')
  const pathname = urlObj.pathname
  if (pathname === '/') {
    fs.readFile('./views/index.html', (err, data) => {
      if (err) {
        return res.end('404 Not Found')
      }
      const htmlStr = template.render(data.toString(), {comments})
      res.end(htmlStr)
    })
  } else if (pathname.indexOf('/public/') === 0) {
    fs.readFile('.' + pathname, (err, data) => {
      if (err) {
        return res.end('404 Not Found')
      }
      res.end(data)
    })
  } else if (pathname === '/post') {
    fs.readFile('./views/post.html', (err, data) => {
      if (err) {
        return res.end('404 Not Found')
      }
      res.end(data)
    })
  } else if (pathname === '/pinglun') {
    let comment = Object.create(null)
    for (let [key, value] of urlObj.searchParams) {
      comment[key] = value
    }
    comment.dateTime = '2021-1-31'
    comments.unshift(comment)
    res.writeHead(302, {
      'Location': '/'
    })
    res.end()
  }
}).listen(3000, () => {
  console.log('Server is runing...');
})