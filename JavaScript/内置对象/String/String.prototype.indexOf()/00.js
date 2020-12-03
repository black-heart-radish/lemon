// String.prototype.indexOf()方法 返回调用它的String对象 第一次 出现的 索引值
//   从fromIndex开始搜索，如果未找到该值，则返回 -1
//   indexOf()是区分大小写的
//   0 不会当成 true, -1 也不会当成 false
//     语法：stringObject.indexOf(searchValue, fromIndex)
//         searchValue 要被查找的字符串值
//           如果没有确切的提供字符串，searchValue会被强制设置成 'undefined',然后在当前字符串查找这个值
//         fromIndex 数字表示开始查找的位置，可以是任意整数，默认为0
//           如果fromIndex的值 小于0 ，会从 0 开始查找
//           如果fromIndex的值 大于str.length , 会从 str.length开始查找，由于已经是结尾了，直接返回 -1
//         若被查找的字符串是一个空字符串，则返回查找开始的位置

console.log('hello world'.indexOf('')); // 0
console.log('hello world'.indexOf('', 0)); // 0
console.log('hello world'.indexOf('', 3)); // 3
console.log('hello world'.indexOf('', 8)); // 8
console.log('hello world'.indexOf('', 11)); // 11
console.log('hello world'.indexOf('', 13)); // 11
console.log('hello world'.indexOf('', 22)); // 11
console.log("Blue Whale".indexOf("Blue")); // 0
console.log("Blue Whale".indexOf("Blute")); // -1
console.log("Blue Whale".indexOf("Whale", 0)); // 5
console.log("Blue Whale".indexOf("Whale", 5)); // 5
console.log("Blue Whale".indexOf("", -1)); // 0
console.log("Blue Whale".indexOf("", 9)); // 9
console.log("Blue Whale".indexOf("", 10)); // 10
console.log("Blue Whale".indexOf("", 11)); // 10
console.log("Blue Whale".indexOf("blue")); // -1
console.log('Blue Whale'.indexOf('Blue') !== -1); // true
console.log('Blue Whale'.indexOf('Bloe') !== -1); // false
console.log(('Blue Whale'.indexOf('Bloe'))); // -1


   
