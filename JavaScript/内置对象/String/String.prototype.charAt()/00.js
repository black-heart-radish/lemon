// String.prototype.charAt()方法 从一个字符串中返回指定的字符
//     语法： stringObject.charAt(index)
//         index 一个介于 0 和 str.length - 1 之间的整数
//           如果index不在这个范围，返回一个空字符串

let anyString = "Brave new world";

console.log("The character at index 0   is '" + anyString.charAt(0)   + "'"); // The character at index 0   is 'B'
console.log("The character at index 1   is '" + anyString.charAt(1)   + "'"); // The character at index 1   is 'r'
console.log("The character at index 2   is '" + anyString.charAt(2)   + "'"); // The character at index 2   is 'a'
console.log("The character at index 3   is '" + anyString.charAt(3)   + "'"); // The character at index 3   is 'v'
console.log("The character at index 4   is '" + anyString.charAt(4)   + "'"); // The character at index 4   is 'e'
console.log("The character at index 999 is '" + anyString.charAt(999) + "'"); // The character at index 999 is ''

