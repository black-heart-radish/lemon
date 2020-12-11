let str = 'emm,hello world,hello vue' // str.length = 25
let str1 = 'emm,undefined'
console.log(str.indexOf()); // -1
console.log(str1.indexOf()); // 4
console.log(str.indexOf('hello')); // 4 
console.log(str.indexOf('hello',1)); // 4 
console.log(str.indexOf('hello',-1)); // 4 
console.log(str.indexOf('hello',NaN)); // 4 
console.log(str.indexOf('hello',28)); // -1
console.log(str.indexOf('',-1)); // 0
console.log(str.indexOf('',NaN)); // 0
console.log(str.indexOf('',28)); // 25