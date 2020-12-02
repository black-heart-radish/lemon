// match() 使用全局（global）
let str = 'AbCdEFgHijkLmnopqRstUVWXYzabCDeFGhIJKLMNOPQrSTuvwxyZ'
var regExp = /[A-E]/gi
let matchArr = str.match(regExp)
console.log(matchArr);
// [
//   'A', 'b', 'C', 'd',
//   'E', 'a', 'b', 'C',
//   'D', 'e'
// ]