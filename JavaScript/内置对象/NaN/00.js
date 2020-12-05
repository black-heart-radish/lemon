// NaN (Not a Number) 表示不是数字
//     特别注意 ： NaN如果通过 == 、 != 、 === 、以及 !==与其他任何值比较都将不相等
//     包括与其他 NaN 值进行比较
//     必须使用 Number.isNaN() 或 isNaN() 函数
//     在执行自比较之中：NaN，也只有NaN，比较之中不等于它自己

let NaN1 = NaN
let NaN2 = NaN
console.log(NaN1 == NaN2); // false
console.log(isNaN(NaN1)); // true
