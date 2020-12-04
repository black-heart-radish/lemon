// String.prototype.endsWith()方法 用来判断当前字符串是否以另外一个字符串结尾
//   根据结果返回 true 或 false
//     语法 ： stringObject.endsWith(searchString, length)
//       searchString: 要搜索的子字符串
//       length: 规定字符串str的长度


let str = "To be, or not to be, that is the question.";
console.log(str.endsWith("question.")); // true 
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true
