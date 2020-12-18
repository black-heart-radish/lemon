// 可以接收 1 至 任何个参数
// 如果没有给参数，则返回 Infinity
// 如果参数里有不能转化为数字的，则返回 NaN
let arr = [5, -1, 7, 3, 6, 0, 4]
console.log(Math.min(5, -1, 7, 3, 6, 0, 4)); // -1      
console.log(Math.min(...arr)); // -1      
console.log(Math.min()); // Infinity
console.log(Math.min('a', 5, 7)); // NaN