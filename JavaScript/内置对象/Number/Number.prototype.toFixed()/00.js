// Number.prototype.toFixed() 方法 返回给定的小数位数的数字 字符串 ，注意是 字符串
//     语法： numObject.toFixed(digits)
//       digits 想要返回的小数位数，介于 0 ~ 20 之间，默认为 0
//     会四舍五入喔

let num1 = 12;
let num2 = 12.121212;
let num3 = 12.126512;
console.log(num1.toFixed(2)); // 12.00
console.log(num2.toFixed(2)); // 12.12
console.log(num3.toFixed(2)); // 12.13
