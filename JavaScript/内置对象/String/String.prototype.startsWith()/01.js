let str = 'To be, or not to be, that is the question.';  // str.length = 42
let str1 = 'undefined'
console.log(str.startsWith()); // false
console.log(str1.startsWith()); // true
console.log(str.startsWith('To be', -6)); // true
console.log(str.startsWith('To be', NaN)); // true
console.log(str.startsWith('To be')); // true
console.log(str.startsWith('To be', 1)); // false
console.log(str.startsWith('to be')); // false
console.log(str.startsWith('to be', 14)); // true