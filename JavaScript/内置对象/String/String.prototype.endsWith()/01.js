let str = 'To be, or not to be, that is the question.';  // str.length = 42
let str1 = 'undefined'
console.log(str.endsWith()); // false
console.log(str1.endsWith()); // true
console.log(str.endsWith('question.', -6)); // false
console.log(str.endsWith('question.', NaN)); // false
console.log(str.endsWith('question.')); // true
console.log(str.endsWith('question.', str.length - 1)); // false
console.log(str.endsWith('to be')); // false
console.log(str.endsWith('to be', 19)); // true