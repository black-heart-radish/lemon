const message = 'hello c'
function subtracter (a, b) {
  return a - b
}

// 也可以这样导出
module.exports = {
  message, 
  subtracter
}