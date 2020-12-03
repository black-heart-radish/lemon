// String.prototype.includes()方法 用于判断一个字符串是否包含在另一个字符串中
//   包含返回true,不包含返回false
//     语法 stringObjcet.includes(searchString, fromIndex)
//       searchString 要搜索的字符串
//       fromIndex 开始搜索的索引下标
//     区分大小写


let str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('TO BE'));       // false