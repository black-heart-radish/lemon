// match()，不传参数
let str = 'Hello world'
let matchArr = str.match()
console.log(matchArr);
// [ '', index: 0, input: 'Hello world', groups: undefined ]

console.log('------------------------2-------------------------');
// match(), 匹配失败
let str1 = 'Hello world'
let regExp1 = /Hi/g
let matchArr1 = str1.match(regExp1)
console.log(matchArr1); // null