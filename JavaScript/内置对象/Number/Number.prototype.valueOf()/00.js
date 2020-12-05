// Number.prototype.valueOf() 返回基础类型的 Number
//     语法： numObject.valueOf()

let num1 = new Number(123)
let num2 = num1.valueOf()
console.log(typeof(num1)); // object
console.log(typeof(num2)); // number