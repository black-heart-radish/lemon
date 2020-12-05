// parseFloat()方法 解析一个字符串转化为浮点数
//     语法： parseFloat(string)
//       参数首位和末尾的空白符会被省略
//       它只认得 ' + ', ' - ', ' . ', ' e / E'(科学计数法) 这些符号
//       遇见第二个 ' . ' 会停止扫描
//       转化失败返回 NaN

let num1 = '.12'
let num2 = '12.12.12'
let num3 = '-.12'
let num4 = ' 12 '
let num5 = 's12'
let num6 = 'e2'
let num7 = '314e-2'
console.log(parseFloat(num1)); // 0.12
console.log(parseFloat(num2)); // 12.12
console.log(parseFloat(num3)); // -0.12
console.log(parseFloat(num4)); // 12
console.log(parseFloat(num5)); // NaN
console.log(parseFloat(num6)); // NaN
console.log(parseFloat(num7)); // 3.14