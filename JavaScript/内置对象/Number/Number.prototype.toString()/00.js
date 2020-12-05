// Number.prototype.toString() 返回 Number对象的字符串表达形式
//     语法： numObject.toString(radix)
//         radix: 进制 2 ~ 36
//         如果 radix 没有在这个范围，会抛出 RangeError

let num = 128
console.log(num.toString()); // 128
console.log(num.toString(8)); // 200
console.log(num.toString(16)); // 80
