const fs = require('fs')

function pReadFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return reject(err)
      }
      resolve(data)
    })
  })
}

pReadFile('./003写文件.md')
  .then(data => {
    console.log(data);
    return pReadFile('./002读取文件.txt')
  })
  .then(data => {
    console.log(data);
  })


