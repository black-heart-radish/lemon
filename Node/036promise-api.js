const fs = require('fs')

// 在 EcmaScript 6 中新增了一个 API Promise
// Promise 是一个构造函数

// 创建 Promise 容器
// 1. 给别人一个承诺  I Promise you
//    Promise 容器一旦创建, 就开始执行里面的代码
let p1 = new Promise((resolve, reject) => {
  fs.readFile('./002读取文件.txt', 'utf8', (err, data) => {
    if (err) {
      // 把容器的 Pending 状态变为 Rejected
      return reject(err)
    }
    // 也就是说这里调用的 resolve 方法实际上就是 then 方法传递的那个 function
    resolve(data)
  })
})

let p2 = new Promise((resolve, reject) => {
  fs.readFile('./003写文件.md', 'utf8', (err, data) => {
    if (err) {
      // 把容器的 Pending 状态变为 Rejected
      return reject(err)
    }
    // 也就是说这里调用的 resolve 方法实际上就是 then 方法传递的那个 function
    resolve(data)
  })
})

// p1 就是那个承诺
// 当 p1 成功了, 然后 then 做指定的操作
// then 方法接收的 function 就是容器中的 resolve 函数
p1
  .then(data => {
    console.log(data);
    // 当前函数中的 return 的结果就可以在后面的 then 中 function 接收到
    // 当你 return 123 后面就接收 123
    // 当你 return 'hello' 后面就接收到 'hello'
    // 上面那些 return 的数据没什么卵用
    // 真正有用的是：我们可以 return 一个 Promise 对象
    // 当 return 一个 Promise 对象的时候, 后续的 then 中的方法的第一个参数会作为 p2 的 resolve
    return p2
  }, (err) => {
    console.log(err);
  })
  .then((data) => {
    console.log(data);
  })