// 小数点
console.log(parseFloat('.123')); // 0.123

// 转型 布尔值
console.log(parseFloat(true));  // NaN
console.log(parseFloat(false));  // NaN

// 转型 null
console.log(parseFloat(null));  // NaN

// 转型 undefined
console.log(parseFloat(undefined));  // NaN

// 数值直接返回
console.log(parseFloat(123));  // 123

// 转型 字符串！！！！！！！！！！！！！！！！！！！！！！
// 转型 空字符串
console.log(parseFloat(''));  // NaN

// 识别不了八进制
console.log(parseFloat('0o123'));  // 0

// 可以识别十六进制
console.log(parseFloat('0x123'));  // 0

// 不能识别科学记数法
console.log(parseFloat('123e-1'));  // 12.3


console.log(parseFloat('123a'));  // 123

// 开头空格会被忽略
console.log(parseFloat('  123'));  // 123


console.log(parseFloat('   123   '));  // 123


console.log(parseFloat('   123   1'));  // 123