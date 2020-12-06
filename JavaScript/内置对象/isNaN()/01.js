let test1 = 'test';
let test2 = NaN;
console.log(isNaN(test1)); // true
console.log(isNaN(test2)); // true
console.log(Number.isNaN(test1)); // false
console.log(Number.isNaN(test2)); // true