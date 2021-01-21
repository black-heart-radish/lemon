const fs = require('fs')

// 1. 写文件 writeFile, 接收三个参数
//    - 第一个参数 : 文件路径
//    - 第二个参数 : 文件内容
//    - 第三个参数 : 回调函数, 只有一个参数 error
//                        - 文件写入成功 ：error null
//                        - 文件写入失败 ：error 错误对象
fs.writeFile('./003写文件.md', 'I am Node.js!', function (error) {
  error ? console.log(error) : console.log('文件写入成功')
})