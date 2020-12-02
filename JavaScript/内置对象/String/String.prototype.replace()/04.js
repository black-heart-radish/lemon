// 使用行内函数和正则来避免循环

// 比如要判断某一字符串xxyymmnn，需要逐一解析，当为x要干嘛干嘛,y要干嘛干嘛
// 正常的思路是通过字符串的长度length进行循环，然后操作
// 但是可以使用行内函数和正则来避免循环

// 问题不好说，直接看代码噢，宝儿，很容易看懂的
var str = 'x-x_';
var retArr = [];
str.replace(/(x_*)|(-)/g, function(match, p1, p2) {
  if (p1) { retArr.push({ on: true, length: p1.length }); }
  if (p2) { retArr.push({ on: false, length: 1 }); }
});
console.log(retArr);
// [
//   { on: true, length: 1 },
//   { on: false, length: 1 },
//   { on: true, length: 2 }
// ]