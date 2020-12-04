// String.prototype.startsWith()方法 判断当前字符串是否以另一字符串开头
//   根据判断结果返回 true 或 false
//     语法： stringObject.startsWith(searchString, position)
//       searchString: 要搜索的子字符串
//       position： 开始搜索的位置索引，默认为 0


let str = "To be, or not to be, that is the question.";

console.log(str.startsWith("To be"));   // true
console.log(str.startsWith("not to be"));   // false
console.log(str.startsWith("not to be", 10));   // true
