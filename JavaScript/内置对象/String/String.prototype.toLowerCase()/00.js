// String.prototype.toLowerCase() 将调用该方法的字符串转为小写形式并返回
//   不会改变原字符串
//   如果调用该方法的值不是字符串类型会被强制转换
//     语法: stringObject.toLowerCase()
//       在 null 和 undefined 类型上调用会返回 TypeError

let str = 'HELLO WORLD'
console.log(str.toLowerCase()); // hello world