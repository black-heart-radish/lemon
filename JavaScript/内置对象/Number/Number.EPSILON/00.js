// Number.EPSILON  表示机器精度 
//   大于 1 的最小的浮点数 减去 1 得到的数
//   0.1 + 0.2 != 0.3 最好永远不要去测试浮点数，但如果真的要
//   ( 0.3 - ( 0.1 + 0.2) ) < Number.EPSILON   用这个去判断

console.log(0.1 + 0.2 == 0.3); // false
console.log(( 0.3 - ( 0.1 + 0.2) ) < Number.EPSILON); // true 
