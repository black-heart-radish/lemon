const a = require('./024require加载规则a')
// 优先从缓存中加载
// 由于 b.js 在 a.js 里面加载了, 在这里就不会重复加载
// 这里的 b 只是能拿到 b.js 里抛出的 module.exports 对象, 但是不会在执行里边的代码
// 可以拿到接口对象, 但是不会执行里面的代码
// 这样做的目的是为了避免重复加载, 提高效率
const b = require('./024require加载规则b')
// 执行结果
// a.js 被加载
// b.js 被加载了