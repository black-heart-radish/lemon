const express = require('express')

const app = express()

// 配置使用 art-template 模板引擎
// 第一个参数表示, 当渲染以 .art 结尾的文件的时候, 使用 art-template 模板引擎
// 当然这个后缀是可以 改的
// express-art-template 是专门用来在 express 中把 art-template 整合到 express 中的
// 虽然这里并不需要加载 art-template, 但是也必须安装
// 因为 express-art-template 依赖了 art-template
// app.engine('art', require('express-art-template'))
app.engine('html', require('express-art-template'))

// express 为 response 响应对象提供了一个方法 : render
// render 方法默认是不可以使用的, 但是如果配置了模板引擎就可以使用了
// res.render('html模板名称', {模板数据})
// 第一个参数不能写路径, 默认会去项目中的 views 目录查找该模板文件
// 也就是说, express 有一个约定 ：开发人员把所有的视图文件都放到了 views 目录中

// 如果想要修改默认的 views 目录, 则可以
// app.set('views', render 函数的默认路径)、
// app.set('views', './public')
// 注意 ： 第一个参数  views 千万不能写错

app.get('/', (req, res) => {
  // express 默认会去项目中的 views 目录中找 index.html
  res.render('index.html', {
    title: '有点混乱'
  })
})

app.get('/post', (req, res) => {
  res.send('post page')
})

app.listen(3000, () => {
  console.log('Server is runing...');
})