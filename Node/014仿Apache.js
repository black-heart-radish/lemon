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
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.end('404 is Not Found')
    }
    res.end(data)
  })
})

server.listen(3000, () => {
  console.log('Server is runing...');
})