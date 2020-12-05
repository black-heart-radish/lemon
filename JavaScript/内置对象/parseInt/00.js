// parseInt()方法 可解析字符串将其转化为 指定进制的整数
//     语法： parseInt(string, radix)
//         string: 要被解析的字符串，如果不是字符串，会用toString()方法将其抽象为字符串
//           字符串开头的空白符会被省略
//         radix: 表示解析的进制数，从 2 ~ 36，注意 10 不是默认值
//     省略空格后，他会从头开始解析，直至遇见不是数字的字符，他只认识 ' + ' 和 ' - '这两个符号
//       如果 首个字符 不是数字，则返回 NaN
//       虽然 radix 是可选的，但一定要加上，因为开头如果是
//         ---     0x : 代表 16 进制  ---
//         ---     0 ： 代表 8 进制   ---
//         ECMAScript 5 规范不再允许parseInt函数的实现环境把以0字符开始的字符串作为八进制数值
//       但是现在改了，所以乱七八糟的，不过也要兼容旧版本，反正加上 radix

let num1 = '16.16'
let num2 = '0x16.16'
let num3 = '021'
let num4 = '-16.16'
let num5 = 'y16.16'
let num6 = '21'
console.log(parseInt(num1)); // 16
console.log(parseInt(num2)); // 22
console.log(parseInt(num3)); // 21
console.log(parseInt(num4)); // -16
console.log(parseInt(num5)); // NaN
console.log(parseInt(num6, 8)); // 17