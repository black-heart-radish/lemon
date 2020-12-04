// String.prototype.concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
//     语法： stringObject.concat(str1, str2, ...)

// 强烈建议使用赋值操作符（+, +=）代替 concat 方法。

let hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.

let greetList = ['Hello', ' ', 'Venkat', '!']
"".concat(...greetList)  // "Hello Venkat!"

"".concat({})    // [object Object]
"".concat([])    // ""
"".concat(null)  // "null"
"".concat(true)  // "true"
"".concat(4, 5)  // "45"