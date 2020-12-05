// Number.isInteger() 判断一个值是否为 整数
//     语法： Number.isInteger(value)
//     是 返回 true
//     不是 返回 false
//     注意全局并没有这个方法噢

let num1 = 123
let num2 = 123.123
let num3 = '123'
console.log(Number.isInteger(num1)); // true 
console.log(Number.isInteger(num2)); // false
console.log(Number.isInteger(num3)); // false
