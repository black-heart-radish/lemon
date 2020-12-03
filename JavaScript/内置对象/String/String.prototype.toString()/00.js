// String.prototype.toString()方法 返回指定对象的字符串形式
//     语法： stringObject.toString()
//     String 对象覆盖了Object 对象的 toString 方法；并没有继承 Object.toString(),[object, object]
//     对于 String 对象，
//     toString 方法返回该对象的字符串形式，和 String.prototype.valueOf() 方法返回值一样。

let x = new String("Hello world");

console.log(x.toString());     // 输出 "Hello world"