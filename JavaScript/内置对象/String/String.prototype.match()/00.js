// String.prototype.match()方法 通过检索 返回一个匹配其正则表达式 的 Array数组
//     语法： stringObject.match(regExp)
//         regExp 是一个正则表达式对象
//         如果传入一个非正则表达式对象，则会隐式的使用 new RegExp(obj) 将其转化为一个RegExp
//              都是转化为String类型， + 会被忽略
//         如果没有给任何参数并直接使用match()方法，将返回一个包含空字符串的Array [""]
//         如果没找到任何匹配项返回null
//     如果不使用 g 标志，仅返回第一个完整匹配项及其相关捕获组，相当于RegExp的exec()方法，
//       在这种情况下，会返回 [第一个匹配项，匹配子项1，匹配子项n, index, input]
//       index为第一个匹配项的下标
//       input为被检测的完整字符串
//     如果使用 g 标志，则返回所有匹配项，但是不会返回捕获组，
//       返回 [匹配项1, 匹配项2, ... , 匹配项n]
//       就和exec()有很大区别了
//       但是matchAll()会和exec()一样

// 不使用 g
let str = 'Hello world, hello Vue, hello React'
let regExp = /h(el)(l)o/i
let matchArr = str.match(regExp);
console.log(matchArr);
// [
//   'Hello',
//   'el',
//   'l',
//   index: 0,
//   input: 'Hello world, hello Vue, hello React',
//   groups: undefined
// ]