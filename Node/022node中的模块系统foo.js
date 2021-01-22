const foo = 'bar'

function add (x, y) {
  return x + y
}

// 只能得到我想要给你的成员
// 这样做的目的是为了解决变量命名冲突的问题
// exports.add = add

// exports 是一个对象
// 我们可以通过多次为这个对象添加成员实现对外导出多个成员

// exports.str = 'hello'

// 现在我有一个需求：
// 希望加载得到的直接就是一个： 
//    方法
//    字符串
//    数字
//    数组 


// 这样是不行的
// exports = add
// 你可以认为在每个模块的最后 return exports

// 正确的做法
module.exports = add
// 如果一个模块需要直接导出一个成员, 而不是通过挂载的方式
// 需要用 module.exports