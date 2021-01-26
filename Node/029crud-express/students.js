// 数据操作文件模块, 只处理数据, 不关心业务

const fs = require('fs')

const dbPath = './db.json'

// 获取所有学生列表
// callback 中参数
//    1. 第一个参数是 err   -> 成功 ：null, 错误 ：错误对象
//    2. 第二个参数是 结果   -> 成功 ：数组, 错误 ：undefined
// return []
exports.find = function (callback) {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data).students)
  })
}

// find(function (err, data) {

// })

// 通过 id 查找学生
exports.findById = function (id, callback) {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    let students = JSON.parse(data).students
    let ret = students.find(item => {
      return item.id === parseInt(id)
    })
    callback(null, ret)
  })
}

// 保存添加学生
exports.save = function (student, callback) {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    let students = JSON.parse(data).students
    // 处理 id 唯一的不重复
    student.id = students[students.length - 1].id + 1
    student.age = parseInt(student.age)
    student.gender = parseInt(student.gender)
    students.push(student)
    let fileData = JSON.stringify({students})
    fs.writeFile(dbPath, fileData, (err) => {
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}

// 更新学生
exports.updateById = function (student, callback) {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    let students = JSON.parse(data).students

    student.id = parseInt(student.id)
    student.gender = parseInt(student.gender)
    student.age = parseInt(student.age)
    
    // 你要修改谁, 就需要把谁找出来, 当某个遍历对象符合条件, find 会终止遍历, 同时返回遍历对象
    let stu = students.find(item => {
      return item.id === student.id
    })
    for (let key in student) {
      stu[key] = student[key]
    }
    let fileData = JSON.stringify({students})
    fs.writeFile(dbPath, fileData, (err) => {
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}

// 删除学生
exports.deleteById = function (id, callback) {
  fs.readFile(dbPath, (err, data) => {
    if (err) {
      return callback(err)
    }
    let students = JSON.parse(data).students
    const index = students.findIndex(item => {
      return item.id === parseInt(id)
    })
    students.splice(index, 1)
    const fileData = JSON.stringify({students})
    fs.writeFile(dbPath, fileData, err => {
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}