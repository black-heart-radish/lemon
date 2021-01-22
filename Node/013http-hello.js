const http = require('http') // 网络服务构建模块

const server = http.createServer()

// 请求 -> 处理 -> 响应
// 一个请求对应一个响应, 如果在一个请求的过程中, 已经结束响应了, 则不能重复发送响应
// 没有请求就没有响应
server.on('request', (req, res) => {
  const url = req.url
  if (url === '/') {
    res.end('hello Node.js')
  } else {
    res.end('404 is Not Found')
  }
})

server.listen(3000, () => {
  console.log('Server is runing...');
})