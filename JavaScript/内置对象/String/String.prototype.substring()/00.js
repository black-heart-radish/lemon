// String.prototype.substring()方法 返回一个从开始索引（包括）到结束索引（不包括）字符串
//     语法 stringObject.substring(indexStart, indexEnd)
//       indexStart: 需要截取的第一个字符串的索引（包括）
//       indexEnd: 需要截取的第一个字符串的索引（不包括）
//     如果 indexStart = indexEnd 返回空字符串
//     如果 index(包括indexStart, indexEnd) 为负数或为NaN，则被当做 0
//     如果 index > str.length ，则被当做str.length
//     如果 indexStart > indexEnd ，则会调换位置
//     如果省略了indexEnd ,截取至最后一个字符

let anyString = "Mozilla";

// 输出 "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));
console.log(anyString.substring(3,-3));
console.log(anyString.substring(3,NaN));
console.log(anyString.substring(-2,3));
console.log(anyString.substring(NaN,3));

// 输出 "lla"
console.log(anyString.substring(4,7));
console.log(anyString.substring(7,4));

// 输出 ""
console.log(anyString.substring(4,4));

// 输出 "Mozill"
console.log(anyString.substring(0,6));

// 输出 "Mozilla"
console.log(anyString.substring(0,7));
console.log(anyString.substring(0,10));