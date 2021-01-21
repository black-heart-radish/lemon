// 1. 结合fs 发送文件中的数据
// 2. Content-type
//    https://tool.oschina.net/commons
//    不同的资源对应的 Content-type 是不一样的
//    图片不需要指定编码
//    一般只有字符数据才指定编码

const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {
  // url : 统一资源定位符
  // 一个 url 最终是要定位到一个资源的
  const url = req.url
  if (url === '/') {
    fs.readFile('./012index.html', (err, data) => {
      if (err) {
        res.setHeader('Content-type', 'text/plain; charset=utf-8')
        res.end('文件读取失败, 请稍后再试')
      } else {
        // data 默认是二进制数据, 可以通过 .toString 转为咱们能识别的字符串
        // res.end() 支持两种数据类型, 一种是二进制, 一种是字符串
        res.setHeader('Content-type', 'text/html; charset=utf-8')
        res.end(data)
      }
    })
  } else if (url === '/jpg') {
    fs.readFile('./012main.jpg', (err, data) => {
      if (err) {
        res.setHeader('Content-type', 'text/plain; charset=utf-8')
        res.end('图片读取失败, 请稍后再试')
      } else {
        // 图片就不需要指定编码了, 因为我们常说的编码指的是字符编码
        res.setHeader('Content-type', 'image/jpeg')
        res.end(data)
      }
    })
  }
})

server.listen(3000, () => {
  console.log('Server is runing...');
})