// String.prototype.slice()方法用于 
//   提取某个字符串的一部分，
//   返回一个新的字符串，
//   不会改变原字符串
//   包括beginIndex,不包括endIndex
//     语法： stringObject,slice(beginIndex, endIndex)
//       beginIndex 开始截取的索引，
//         如果值为负数，会被当做str.length + beginIndex 看待，可以理解为倒数第几个
//       endIndex 结束截取的索引，是可选的
//         如果不填，默认截取至末尾
//         如果该参数为负数，会被当做 str.length + endIndex 看待，可以理解为倒数第几个

let str = 'The morning is upon us.' // str 的长度 length 是 23
let str1 = str.slice(),
    str2 = str.slice(1, 1),
    str3 = str.slice(1, 6),
    str4 = str.slice(6, 1),
    str5 = str.slice(-6),
    str6 = str.slice(1, -6),
    str7 = str.slice(1),
    str8 = str.slice(23),
    str9 = str.slice(NaN,6);
console.log(str1); // The morning is upon us.
console.log(str2); // ""
console.log(str3); // he mo
console.log(str4); // ""
console.log(str5); // on us.
console.log(str6); // he morning is up       
console.log(str7); // he morning is upon us.
console.log(str8); // ""
console.log(str9); // The mo
