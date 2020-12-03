// 靠正则来分割使结果中包含分隔块

let myString = "Hello 1 word. Sentence number 2.";
let splits = myString.split(/(\d)/);
console.log(splits);
// [ 'Hello ', '1', ' word. Sentence number ', '2', '.' ]