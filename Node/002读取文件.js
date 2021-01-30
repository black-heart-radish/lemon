// 浏览器中的 JavaScript 是没有文件操作的能力的
// 但是 Node 中的 JavaScript 具有文件操作的能力

// fs 是 file-system 的简写，就是文件系统的意思
// 在 Node 中如果想要进行文件操作， 就必须引入 fs 这个核心模块
// 在 fs 这个核心模块中, 就提供了所有的文件操作相关的 API
// 例如： fs.readFile 就是用来读取文件的

// 1. 使用 require 方法加载 fs 核心模块
const fs = require('fs')
// 2. 读取文件
//    第一个参数是要读取的文件路径
//    第二个参数是一个回调函数, 接收两个参数(error, data)
//      - 成功 : data 数据  error null
//      - 失败 : data undefined  error 错误对象
//    注意：./002读取文件.txt 不是相对于当前文件路径
//          而是相对于执行 node 命令所处的终端路径
//          这不是错误, Node就是这样设计的
//          就是说, 文件操作路径中, 相对路径设计的就是相对于执行 node 命令所处的路径
fs.readFile('./002读取文件.txt', function (error, data) {
  // console.log(data);
  // <Buffer 68 65 6c 6c 6f 20 4e 6f 64 65>
  // 文件中存储的其实都是二进制数据 0 1 
  // 这里看到的不是 0 1, 是因为二进制转为了 16 进制
  // 但我们可以通过 toString 方法把其转化为我们能认识的字符
  console.log(data.toString());
})