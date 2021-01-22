const fs = require('fs')

// 注意 dir 是小写
fs.readdir('E:/lemon/Node/www', (err, files) => {
  if (err) {
    return console.log(目录不存在);
  }
  console.log(files);
})