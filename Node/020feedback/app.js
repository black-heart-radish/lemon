// app application 应用程序
// 把当前模块所有的依赖项都声明在文件模块的最上面
// 为了让目录结构保持统一清晰, 所有我们约定, 把所有的 HTML 文件都放到 views 目录中
// 我们为了方便的统一处理这些静态资源, 所以我们约定把所有的静态资源都存放在 public 目录中
// 哪些资源能被用户访问, 哪些资源不能被用户访问, 可以通过代码来进行非常灵活的控制
// /views/index.html
// /public  整个 public 目录中的资源都允许访问

const http = require('http')
const fs = require('fs')
const url = require('url')
const template = require('art-template')

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

// /pinglun?name=常思&message=何处合成愁%2C+离人心上秋
// 对于这种表单提交的请求路径, 由于其中具有用户动态填写的内容
// 所以你不可能通过去判断完整的 url 路径来处理这个请求
// 
// 结论：对于我们来讲, 其实只需要判定, 如果你的请求路径是 /plugin 的时候, 那我就认为你提交表单的请求过来了

// 简写方式
http
  .createServer(function (req, res) {
    // const url = req.url
    const parseObj = url.parse(req.url, true)
    const pathname = parseObj.pathname
    if (pathname === '/') {
      fs.readFile('./views/index.html', (err, data) => {
        if (err) {
          return res.end('404 Not Found')
        }
        const htmlStr = template.render(data.toString(), {
          comments
        })
        res.end(htmlStr)
      })
    } else if (pathname === '/post') {
      fs.readFile('./views/post.html', (err, data) => {
        if (err) {
          return res.end('404 Not Found')
        }
        res.end(data)
      })
    } else if (pathname === '/pinglun') {
      // 注意 : 这个时候无论 /plugin?xxx 之后是什么, 我都不用担心了, 因为我的 pathname 都是一样的
      // console.log('收到表单请求了', parseObj.query);
      // 一次请求对应一次响应, 响应结束这次请求也就结束了
      // res.end(JSON.stringify(parseObj.query))
      // 1. 我们已经使用 url 模块的 parse 方法把请求路径中的查询字符串给解析成一个对象了
      // 所以接下来要做的就是：
      //    1. 获取表单提交的数据
      //    2. 生成日期到数据对象中, 然后存储到数组中
      //    3. 让用户重定向跳转到首页 / 
      //       当用户重新请求 / 的时候, 我数组中的数据已经发生变化了, 所以用户看到的页面也就变化了
      let comment = parseObj.query
      comment.dateTime = '2021-01-12 17:11:22'
      comments.unshift(comment)
      // 服务端这个时候已经把数据存储好了, 接下来就是让用户重新请求 / 首页, 就可以看到最新的留言内容了

      // 如何通过服务器让客户端重定向
      //    1. 状态码设置为 302 临时重定向
      //        statusCode
      //    2. 在响应头中通过 Location 告诉客户端往哪重定向
      //        setHeader
      // 如果客户端发现服务器响应的状态码是 302 就会去响应头中找 Location 发起新的请求
      // 所以你就能看到客户端自动跳转了

      res.statusCode = 302
      res.setHeader('Location', '/')
      res.end()
    } else if (pathname.indexOf('/public/') === 0) {
      // public/css/main.css
      // public/js/main.js
      // public/lib/Jquery.js
      // 统一处理 :
      //    如果请求路径是以 /public 开头的, 则我认为你要获取 public 中的某个资源
      //    所以我们就直接可以把请求路径当做文件路径来直接进行读取
      fs.readFile('.' + pathname, (err, data) => {
        if (err) {
          return res.end('404 Not Found')
        }
        res.end(data)
      })
    } else {
      // 其他的都处理成 404 
      fs.readFile('./views/404.html', (err, data) => {
        if (err) {
          return res.end('404 Not Found')
        }
        res.end(data)
      })
    }
  })
  .listen(3000, () => {
    console.log('Server is runing');
  })

  // 1. /index.html
  // 2. 开放 public 目录的静态资源
  //    当请求 /public/xxx 的时候, 读取响应 public 目录中的具体资源
  // 3. /post post.html
  // 4. /pinglun
  //    接收表单提交数据
  //    存储表单提交的数据
  //    让表单重定向到 /   statusCode  setHeader