// 默认得到的是对象
// 使用对象中的成员必须 . 点儿某个成员来进行访问
// 有时候, 对于一个模块, 仅仅只希望导出一个方法
const fooExports = require('./022node中的模块系统foo')

// ReferenceError: foo is not defined
// console.log(foo);

console.log(fooExports);