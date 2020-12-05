// Number.isFinite() 判断一个值是否有穷

let num1 = Number.MAX_SAFE_INTEGER
let num2 = Number.POSITIVE_INFINITY
console.log(Number.isFinite(num1)); // true 
console.log(Number.isFinite(num2)); // false
console.log(Number.isFinite(1 / 0)); // false
console.log(Number.isFinite(0 / 0)); // false