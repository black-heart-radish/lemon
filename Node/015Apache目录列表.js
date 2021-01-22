const http = require('http')
const fs = require('fs')

const server = http.createServer()

const wwwDir = 'E:/lemon/Node/www'
server.on('request', (req, res) => {
  const url = req.url
  let filePath = ''
  if (url !== '/') {
    filePath = wwwDir + url
  }
  fs.readFile('./015Apache目录列表.html', (err, data) => {
    if (err) {
      return res.end('404 is Not Found')
    }

    // 1. 如何得到 WwwDir 目录列表中的文件名和目录名    fs.readdir
    // 2. 如何将得到的文件名和目录名替换到 html 中
    //    模板引擎
    //    2.1 在 html 中需要替换位置预留一个特殊的标记
    //    2.2 根据 files 生成需要的 html 内容
    // 只要你做了这两件事, 那这个问题就解决了

    fs.readdir(wwwDir, (err, files) => {
      if (err) {
        return res.end('Can not find www dir')
      }
      let content = ''
      files.forEach((item) => {
        content += `
          <tr>
            <td data-value="appserv/"><a class="icon dir" href="/D:/AppServ/www/appserv/">${item}/</a></td>
            <td class="detailsColumn" data-value="0"></td>
            <td class="detailsColumn" data-value="1599863665">2020/9/12 上午6:34:25</td>
          </tr>
        `
      })
      data = data.toString().replace('^_^', content)
      res.end(data)
    })
  })
})

server.listen(3000, () => {
  console.log('Server is runing...');
})