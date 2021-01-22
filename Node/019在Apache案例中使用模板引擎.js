const http = require('http')
const fs = require('fs')
const template = require('art-template')

const server = http.createServer()

const wwwDir = 'E:/lemon/Node/www'
server.on('request', (req, res) => {
  const url = req.url
  let filePath = ''
  if (url !== '/') {
    filePath = wwwDir + url
  }
  fs.readFile('./019在Apache案例中使用模板引擎.html', (err, data) => {
    if (err) {
      return res.end('404 is Not Found')
    }
    fs.readdir(wwwDir, (err, files) => {
      if (err) {
        return res.end('Can not find www dir')
      }
      
      // 这里只需要使用模板引擎解析替换 data 中的模板字符串就可以了
      // 数据就是 files
      // 然后去你的 template.html 文件中编写你的模板语法就可以了
      const htmlStr = template.render(data.toString(), {
        title: '模板引擎',
        files
      })

      res.end(htmlStr)
    })
  })
})

server.listen(3000, () => {
  console.log('Server is runing...');
})