const fs = require('fs')

// 在模块加载中, 相对路径的 ./ 不能省略
require('./025require标识符分析foo')

// 文件操作中的相对路径可以省略 ./
fs.readFile('012index.html', (err, data) => {
  if (err) {
    return console.log('文件读取失败');
  }
  console.log(data.toString());
})

// 咱们所使用的的所有的文件的操作的 API 都是异步的
// 就像你的 AJAX 请求一样