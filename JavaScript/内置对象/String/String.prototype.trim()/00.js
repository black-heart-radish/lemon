// String.prototype.trim() 方法会 删除字符串两端所有的空白字符
//   trim() 方法返回一个从两头去掉空白字符的字符串，
//   并不影响原字符串本身
//   空白字符包括(space, tab, no-break space等)以及所有行终止符字符（如 LF，CR等）
//     语法 stringObject.trim()

let orig1 = '   foo  ';
console.log(orig1.trim()); // 'foo'

// 另一个 .trim() 例子，只从一边删除

let orig2 = 'foo    ';
console.log(orig2.trim()); // 'foo'
