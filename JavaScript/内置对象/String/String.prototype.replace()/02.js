// 使用行内函数来修改匹配到的字符
//    问题：所有出现的大写字母转换为小写，并且在匹配位置前加一个连字符

// 如果我们想在最终的替换中，进一步转变匹配结果，我们 必须 使用一个函数

// 1. 最开始的思路，不适用行内函数来实现康康行不行---不可以的噢，宝儿
let propertyName = 'borderTop';
let regExp = /[A-Z]/g;
let newPropertyName = propertyName.replace(regExp, '$&'.toLowerCase());
console.log(newPropertyName); // borderTop // won't work
// 这是因为 '$&'.toLowerCase() 会被先解析成字符串字面量，也就是字符'$&'，而不是一个模式
// 所以使用toLowerCase()方法不会有效

// 2. 那就使用一个回调函数呗
console.log('-------------------------------2----------------------------------');
let propertyName1 = 'borderTop';
let regExp1 = /[A-Z]/g;
let newPropertyName1 = propertyName1.replace(regExp, (match) => {
  return '-' + match.toLowerCase();
})
console.log(newPropertyName1);
// 这里使用了箭头函数，是可以的，但是我们做东西，最好有封装的思想

// 3. 把这个功能封装起来
console.log('-------------------------------3----------------------------------');
function styleHyphenFormat(propertyName2) {
  function upperToHyphenLower(match) {
    return '-' + match.toLowerCase();
  }
  return propertyName2.replace(/[A-Z]/g, upperToHyphenLower);
}
let propertyName2 = 'borderTop';
console.log(styleHyphenFormat(propertyName2));