const http = require('http')

const server = http.createServer()
// request 请求事件处理函数, 需要接受两个参数:
//    - Request  请求对象
//        请求对象可以用来获取客户端的一些请求信息, 例如请求路径
//    - Response  响应对象
//        响应对象可以用来给客户端发送响应消息
server.on('request', function (request, response) {
  // request.url 获取到的是端口号之后的那一部分路径
  // 也就是说所有的 url 都是以 / 开头的
  console.log('收到客户端的请求了, 请求路径是: ' + request.url);
  // /
  // /abc
  // /a/b

  // response 对象有一个方法 write 可以用来给客户端发送响应数据
  // write 可以使用多次, 但是最后一定要使用 end 来结束响应, 否则客户端会一直等待
  response.write('hello')
  response.write(' node.js')
  // 告诉客户端, 我的话说完了, 你可以呈递给客户了
  // 响应内容只能是二进制数据或者字符串
  response.end()

  // 由于现在我们的服务器能力还非常的弱, 无论什么请求, 都只能响应 hello node.js
  // 思考:
  //    我们希望当请求不同的路径时响应不同的结果
  // 例如
  //    /   ->    index
  //    /login   ->    登录
  //    /register   ->    注册
  //    /haha   ->    哈哈
})

server.listen(3000, function () {
  console.log('服务器启动成功了, 可以通过 http://localhost:3000来进行访问');
})