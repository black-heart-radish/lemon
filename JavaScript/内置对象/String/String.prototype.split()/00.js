// String.prototype.split()方法使用 指定的分隔字符(可以是正则表达式)，将一个字符串分割成 子字符串数组，
//   可以指定子字符串数组元素的个数
//     语法：stringObject.split(['separator1', 'separator2'], limit)
//         separator 表示分隔字符，可以是字符串或正则表达式，也可以有多个噢，宝儿
//           如果没有填写这个参数，则返回一个["整个字符串"]这样的数组，其包含整个字符串
//           如果分隔符为空字符串，则返回字符串中每个字符组成的数组['a','b','c']这样的
//         limit 表示数组最多的元素个数
//     描述：会在找到分割符后，将其从字符串中删除，并将剩下的子字符串的数组返回
//       如果分隔符出现在字符串的开始或结尾，那么将分别以空字符串开头或结尾
//       因此，如果字符串仅由一个分隔符组成，将返回["",""]一个两空字符串组成的数组
//       当字符串为空时，返回[""]一个包含一个空字符串的数组
//       当字符串和分隔符都为空时，返回空数组[]
//       如果分隔符是包含捕获括号()的正则表达式，那么捕获内容也将拼接在返回的数组内

function splitString(stringToSplit, separator) {
  let arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log("The array has " + arrayOfStrings.length + " elements: ");

  for (let i=0; i < arrayOfStrings.length; i++)
    console.log(arrayOfStrings[i] + " / ");
}
let tempestString = "Oh brave new world that has such people in it.";
let monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
let space = " ";
let comma = ",";
splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
// The original string is: "Oh brave new world that has such people in it."
// The separator is: " "
// The array has 10 elements: 
// Oh /
// brave /
// new /
// world /
// that /
// has /
// such /
// people /
// in /
// it. /
// The original string is: "Oh brave new world that has such people in it."
// The separator is: "undefined"
// The array has 1 elements:
// Oh brave new world that has such people in it. /
// The original string is: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
// The separator is: ","
// The array has 12 elements:
// Jan / 
// Feb /
// Mar /
// Apr /
// May /
// Jun / 
// Jul /
// Aug /
// Sep /
// Oct /
// Nov /
// Dec / 