// String.prototype.search()方法 返回第一个匹配项的索引index，如果不存在返回 -1
//     语法：stringObject.search(regExp)
//         regExp是一个正则表达式对象
//         如果传入的是一个非正则表达式对象，则会使用 new RegExp(obj) 隐式将其转化为正则表达式对象
//     如果匹配成功，search()方法返回首次在字符串中出现的regExp的索引
//       与是否全局搜索 g 无关
//       就算 g 也是返回首次出现的regExp的索引
//     如果匹配失败，search()方法返回 -1
//     如果只是想确定字符串中是否存在某个pattern(模式),则可使用search()
//     如果要获取字符串中有关某个pattern(模式)的详细信息,使用match()

let str = 'hello WorlD'
let regExp = /[A-Z]/g
let regExp1 = /[.]/g
console.log(str.search()); // 0
console.log(str.search(regExp)); // 6
console.log(str.search(regExp1)); // -1