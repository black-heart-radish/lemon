// String.prototype.lastIndexOf()方法 返回调用的String对象最后一次出现的索引
//   在一个字符串中的指定位置fromIndex处从后向前搜索，如果没有这个特定值则返回 -1
//     语法： stringObject.lastIndexOf(searchValue, fromIndex)
//     与indexOf的相同，只不过是从后往前查找





let anyString = "Brave new world";

console.log("The index of the first w from the beginning is " + anyString.indexOf("w"));
// Displays 8
console.log("The index of the first w from the end is " + anyString.lastIndexOf("w")); 
// Displays 10

console.log("The index of 'new' from the beginning is " + anyString.indexOf("new"));   
// Displays 6
console.log("The index of 'new' from the end is " + anyString.lastIndexOf("new"));
// Displays 6