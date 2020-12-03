// 移除字符串的空格

let names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";
let regExp = /\s*(?:;|$)\s*/
let nameArr = names.split(regExp)
console.log(nameArr);
// [
//   'Harry Trump',
//   'Fred Barney',
//   'Helen Rigby',
//   'Bill Abel',
//   'Chris Hand',
//   ''
// ]