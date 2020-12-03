// String.prototype.slice()方法用于 
//   提取某个字符串的一部分，
//   返回一个新的字符串，
//   不会改变原字符串
//     语法： stringObject,slice(beginIndex, endIndex)
//       beginIndex 开始截取的索引，
//         如果值为负数，会被当做str.length + beginIndex 看待，可以理解为倒数第几个
//       endIndex 结束截取的索引，是可选的
//         如果不填，默认截取至末尾
//         如果该参数为负数，会被当做 str.length + endIndex 看待，可以理解为倒数第几个

let str1 = 'The morning is upon us.', // str1 的长度 length 是 23。
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2); // 输出：he morn
console.log(str3); // 输出：morning is upon u
console.log(str4); // 输出：is upon us.
console.log(str5); // 输出：""
