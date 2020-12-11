// 转型 布尔值
console.log(parseInt(true));  // NaN
console.log(parseInt(false));  // NaN

// 转型 null
console.log(parseInt(null));  // NaN

// 转型 undefined
console.log(parseInt(undefined));  // NaN

// 数值直接返回
console.log(parseInt(123));  // 123

// 转型 字符串！！！！！！！！！！！！！！！！！！！！！！
// 转型 空字符串
console.log(parseInt(''));  // NaN

// 识别不了八进制
console.log(parseInt('0o123'));  // 0

// 可以识别十六进制
console.log(parseInt('0x123'));  // 291

// 不能识别科学记数法
console.log(parseInt('123e-1'));  // 123


console.log(parseInt('123a'));  // 123

// 开头空格会被忽略
console.log(parseInt('  123'));  // 123


console.log(parseInt('   123   '));  // 123


console.log(parseInt('   123   1'));  // 123