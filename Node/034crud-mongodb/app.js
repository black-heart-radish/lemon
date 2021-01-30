const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')

const app = express()

// app.js 入口模块
// 职责 ：
//    1. 创建服务
//    2. 做一些服务相关配置
//        模板引擎
//        body-parser 解析表单 post 请求体
//        提供静态资源服务
//    3. 挂载路由
//    4. 监听端口, 启动服务

// 配置模板引擎和 body-parser 一定要在 app.use(router) 挂载路由之前
app.engine('html', require('express-art-template'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/node_modules', express.static('./node_modules'))
app.use('/public', express.static('./public'))

// 把路由容器挂载到 app 服务中
app.use(router)

// app.get('/', (req, res) => {
//   // readFile 的第二个参数是可选的, 传入 utf8 就是告诉它把读取到的文件直接按照 utf8 编码转成我们能认识的字符
//   // 除了这样来转换之外, 也可以通过 data.toString()的方式
//   fs.readFile('./db.json', (err, data) => {
//     if (err) {
//       return res.status(500).send('Server error...')
//     }
//     res.render('index.html', {
//       fruits: [
//         {
//           name: '橘子',
//           about: 'orange',
//           img: '/public/img/1.jpg'
//         },
//         {
//           name: '香蕉',
//           about: 'banana',
//           img: '/public/img/2.jpg'
//         },
//         {
//           name: '芒果',
//           about: 'mango',
//           img: '/public/img/3.jpg'
//         },
//         {
//           name: '草莓',
//           about: 'strawberry',
//           img: '/public/img/4.jpg'
//         },
//       ],
//       students: JSON.parse(data).students // 从文件中读取到的数据除了二进制一定是字符串, 所以要转化
//     })
//   })
// })

app.listen(3000, () => {
  console.log('Server is runing...');
})