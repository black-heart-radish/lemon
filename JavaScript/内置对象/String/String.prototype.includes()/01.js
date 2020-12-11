let str = 'To be, or not to be, that is the question.';  // str.length = 42
let str1 = 'undefined'
console.log(str.includes()); // false
console.log(str1.includes()); // true
console.log(str.includes('To be', -6)); // true
console.log(str.includes('To be', NaN)); // true
console.log(str.includes('To be')); // true
console.log(str.includes('To be', 1)); // false