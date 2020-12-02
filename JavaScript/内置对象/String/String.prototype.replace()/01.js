// 交换字符串中两个单词的位置

let regExp = /(\w+)\s(\w+)/;
let str = 'Jone Smith';
let newStr = str.replace(regExp, '$2, $1');
console.log(newStr); // Smith, John