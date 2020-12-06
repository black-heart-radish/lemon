// null 字面量，不是全局对象的属性，表示基本数据类型的 null, 表示没有类型和值
//     可简单理解为一个特殊的对象，代表没有类型和值
//     注意与 undefined 的比较

let a = null;
let b = undefined;
console.log(typeof(a)); // object
console.log(typeof(b)); // undefined
console.log(a == b); // true
console.log(a === b); // false