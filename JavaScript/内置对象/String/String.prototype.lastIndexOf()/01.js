let str = 'emm,hello world,hello vue' // str.length = 25
let str1 = 'emm,undefined'
console.log(str.lastIndexOf()); // -1
console.log(str1.lastIndexOf()); // 4 
console.log(str.lastIndexOf('hello')); // 16
console.log(str.lastIndexOf('hello',15)); // 4 
console.log(str.lastIndexOf('hello',-1)); // -1
console.log(str.lastIndexOf('hello',NaN)); // 16
console.log(str.lastIndexOf('hello',28));  // 16
console.log(str.lastIndexOf('',-1)); // 0
console.log(str.lastIndexOf('',NaN)); // 25
console.log(str.lastIndexOf('',28)); // 25