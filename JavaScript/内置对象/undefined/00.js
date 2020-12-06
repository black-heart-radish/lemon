// undefined 全局对象的一个属性，初始值为原始数据类型的 undefined
//     如果声明一个变量时没有初始化，那么默认值为 undefined 
//     如果一个语句没有 return 语句返回值，则默认返回 undefined
//     用到 undefined 作等价比较时，要用全等符号 === ,因为 null == undefined 为 true, null === undefined 为false

let a;
function b () {
  console.log(a); // undefined
}
console.log(b()); // undefined
console.log(null == undefined); // true
console.log(null === undefined); // false