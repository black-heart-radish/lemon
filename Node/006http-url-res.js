// 三步
const http = require('http')

const server = http.createServer()

server.on('request', (request, response) => {
  // Node.js 解决中文乱码
  response.writeHead(200, {
    "Content-Type": "text/html;charset=utf-8"
  });

  console.log(request.url);

  // 请求我的 IP 地址
  console.log('请求我的客户端的 ip 地址是: ', request.socket.remoteAddress);
  // 请求我的客户端的端口号
  console.log('请求我的客户端的端口号是: ', request.socket.remotePort);

  if(request.url === '/') {
    response.end('首页')
  } else if (request.url === '/login') {
    response.end('登录')
  }else if (request.url === '/register') {
    response.end('注册')
  }else if (request.url === '/haha') {
    response.end('哈哈')
  }else if (request.url === '/products') {
    let products = [
      {
        name: '苹果',
        price: 8999
      },
      {
        name: '菠萝',
        price: 4999
      },
      {
        name: '小辣椒',
        price: 1999
      }
    ]
    // 响应内容只能是二进制数据或者字符串
    response.end(JSON.stringify(products))
  }else {
    response.end('服务器里没有这个路径的资源')
  }


})

server.listen(3000, () => {
  console.log('服务器启动成功');
})