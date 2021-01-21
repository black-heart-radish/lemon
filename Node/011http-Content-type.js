// require
// 端口号

const http = require('http')

const server = http.createServer()

server.on('request', function (req, res) {
  // 在服务器端默认发送的数据, 其实是 utf8 编码的内容
  // 但是浏览器不知道你是 utf8 编码内容
  // 浏览器在不知道服务器响应内容的编码情况下会按照当前操作系统的默认编码去解析
  // 中文操作系统默认是 gbk
  // 解决方法就是正确的告诉浏览器我给你发送的内容是什么编码的
  // 在 http 协议中, Content-type 就是用来告知对方我给你发送的数据内容是什么类型
  // res.setHeader('Content-type', 'text/plain; charset=utf-8')
  // res.writeHead(200, {
  //   'Content-type': 'text/plain; charset=utf-8'
  // })
  const url = req.url
  if (url === '/plain') {
    res.setHeader('Content-type', 'text/plain; charset=utf-8')
    res.end('你好, plain')
  } else if (url === '/html') {
    // 如果你发送的是 html 格式的字符串, 则也要告诉浏览器我给你发送的 html 格式的文本
    res.setHeader('Content-type', 'text/html; charset=utf-8')
    res.end('<h1>你好, html</h1>')
  } else {
    res.end('hello world')
  }
})

server.listen(3000, () => {
  console.log('服务启动成功');
})