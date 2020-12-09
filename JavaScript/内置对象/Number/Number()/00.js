// 转型 布尔值
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// 转型 null
console.log(Number(null)); // 0

// 转型 undefined
console.log(Number(undefined)); // NaN

// 数值直接返回
console.log(Number(123)); // 123

// 转型 字符串！！！！！！！！！！！！！！！！！！！！！！
// 转型 空字符串
console.log(Number('')); // 0

// 转型 八进制
console.log(Number('0o123')); // 83

// 转型 十六进制
console.log(Number('0x123')); // 291

// 转型 科学记数法
console.log(Number('123e-1')); // 12.3

// 不会像 parseInt() 和 parseFloat() 会截取，只要包含其他字符，就返回 NaN
console.log(Number('123a')); // NaN

// 开头空格会被忽略
console.log(Number('  123')); // 123

// 末尾的空格只要不接东西也会被忽略
console.log(Number('   123   ')); // 123

// 末尾空格接了东西就不会忽略，返回 NaN
console.log(Number('   123   1')); // NaN