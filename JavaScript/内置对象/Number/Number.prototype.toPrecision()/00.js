// Number.prototype.toPrecision() 返回指定精度的数值对象字符串表达形式
//   就是返回 指定位数 的 数字 的 字符串
//     语法： numObject.toPrecision(precision)
//       precision 数字的位数 1 ~ 100
//     也会四舍五入

let num = 999;
console.log(num.toPrecision(1)); // 1e+3
console.log(num.toPrecision(2)); // 1.0e+3
console.log(num.toPrecision(3)); // 999