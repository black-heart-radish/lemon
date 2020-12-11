// Number.prototype.toExponential() 返回指定 小数位数 的 科学记数 的 字符串
//     语法： numObject.toExponential(fractionDigits)
//       fractionDigits 小数的位数 0 ~ 20
//     也会四舍五入

let num1 = 121212121212;
let num2 = 0.121212121212;
console.log(num1.toExponential(5)); // 1.21212e+11
console.log(num2.toExponential(5)); // 1.21212e-1
console.log(num2.toExponential());