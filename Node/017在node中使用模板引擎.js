// art-template
// art-template  不仅可以在浏览器使用, 也可以在 node 中使用

// 安装 :  npm install art-template
// 该命令在哪执行就会把包下载到哪里, 默认会下载到 node_modules 目录中
// node_modules 目录不要改, 也不支持改

// 在 node 中使用 art-template 模板引擎
// 模板引擎最早就是诞生于服务器领域, 后来才发展到了前端

// 1. 安装 :  npm install art-template
// 2. 在需要使用的文件模块中加载 art-template
//    只需要使用 require 方法加载就可以了 : require('art-template')
//    参数中的 art-template 就是你下载的包的名字
// 3. 查文档, 使用模板引擎的 API

const template = require('art-template')
const fs = require('fs')

// template.render('模板字符串', {替换的对象})

fs.readFile('./017tpl.html', (err, data) => {
  if (err) {
    return console.log('文件读取失败');
  }
  const result = template.render(data.toString(), {
    name: 'Jack',
    age: 18,
    province: '北京市',
    hobbies: [
      '打游戏',
      '听歌',
      '看电影'
    ]
  })
  console.log(result);
})

