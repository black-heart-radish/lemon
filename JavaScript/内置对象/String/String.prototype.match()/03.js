// 一个非正则表达式对象作为参数

let str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
    str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
    str3 = "The contract was declared null and void.";
let matchArr1 = str1.match("number");   // "number" 是字符串。返回["number"]
let matchArr2 = str1.match(NaN);        // NaN的类型是number。返回["NaN"]
let matchArr3 = str1.match(Infinity);   // Infinity的类型是number。返回["Infinity"]
let matchArr4 = str1.match(+Infinity);  // 返回["Infinity"]
let matchArr5 = str1.match(-Infinity);  // 返回["-Infinity"]
let matchArr6 = str2.match(65);         // 返回["65"]
let matchArr7 = str2.match(+65);        // 有正号的number。返回["65"]
let matchArr8 = str3.match(null);       // 返回["null"]
console.log(matchArr1);
console.log(matchArr2);
console.log(matchArr3);
console.log(matchArr4);
console.log(matchArr5);
console.log(matchArr6);
console.log(matchArr7);
console.log(matchArr8);
// [
//   'number',
//   index: 16,
//   input: 'NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.',
//   groups: undefined
// ]
// [
//   'NaN',
//   index: 0,
//   input: 'NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.',
//   groups: undefined
// ]
// [
//   'Infinity',
//   index: 24,
//   input: 'NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.',
//   groups: undefined
// ]
// [
//   'Infinity',
//   index: 24,
//   input: 'NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.',
//   groups: undefined
// ]
// [
//   '-Infinity',
//   index: 42,
//   input: 'NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.',
//   groups: undefined
// ]
// [
//   '65',
//   index: 18,
//   input: 'My grandfather is 65 years old and My grandmother is 63 years old.',
//   groups: undefined
// ]
// [
//   '65',
//   index: 18,
//   input: 'My grandfather is 65 years old and My grandmother is 63 years old.',
//   groups: undefined
// ]
// [
//   'null',
//   index: 26,
//   input: 'The contract was declared null and void.',
//   groups: undefined
// ]