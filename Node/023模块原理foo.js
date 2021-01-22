// 在 Node 中, 每个模块的内部都有一个自己的 module 对象
// 然后在 module 对象中, 有一个成员叫 exports， 也是一个对象
// 也就是说, 如果你需要对外导出成员, 只需要把导出的成员挂载到 module.exports 中

// 我们发现每次导出成员的时候都通过 module.exports.xxx = xxx 的方式非常繁琐
// 所以, Node 为了简化我们的操作专门提供了一个变量: let exports = module.exports

// let module = {
//   exports: {

//   }
// }

// let exports = module.exports
// 两者相等, 那就说明我们可以用任意一方导出成员
// console.log(exports === module.exports);

// 谁来 require 我, 谁就得到 module.exports
// 默认在代码的最后有一句：
// return module.exports

// 所以在当一个模块需要导出单个成员的时候
// 直接给 exports 赋值是不管用的