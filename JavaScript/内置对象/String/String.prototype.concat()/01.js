let str = 'hello';
let arr = [' ', 'world,', ' ', 'hello vue'];
// console.log(str.concat(' world')); // hello world
// console.log(str.concat(' world', ',', 'hello vue')); // hello world,hello vue
// console.log(str.concat(...arr)); // hello world, hello vue
let newStr1 = str + ' world';
let newStr2 = str + ' world' + ',' + ' hello vue';
console.log(newStr1); // hello world
console.log(newStr2); // hello world, hello vue