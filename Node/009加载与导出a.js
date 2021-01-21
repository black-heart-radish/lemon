// require 方法有两个作用
//     1. 加载文件模块并执行里边的代码
//     2. 拿到被加载文件模块导出的接口对象
// 在每个文件模块中都提供了一个对象：exports
//     exports 默认是一个空对象
//     你要做的就是把所有需要被外部访问的成员挂载到这个 exports 对象中
const b = require('./009加载与导出b')
const c = require('./009加载与导出c')
console.log(b.foo);
console.log(b.add(10, 30));
console.log(c.message);
console.log(c.subtracter(40, 10));