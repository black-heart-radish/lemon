const mongoose = require('mongoose')

const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/test')

const mySchema = new Schema({
  username: {
    type: String,
    required: true
  },
  gender: {
    default: '男',
    type: String
  },
  age: {
    type: Number,
    min: 1,
    max: 130
  }
})

const User = mongoose.model('User', mySchema)

const ww = new User({
  username: 'ww',
  age: 29
})
// const sl = new User({
//   username: 'sl',
//   gender: '女',
//   age: 18
// })

ww.save().then(ret => {
  console.log('保存成功', ret);
  User.find((err, ret) => {
    if (err) {
      return console.log('查询失败', err);
    }
    console.log('查询成功', ret);
  })
})

// User.find((err, ret) => {
//   if (err) {
//     return console.log('查询失败', err);
//   }
//   console.log('查询成功', ret);
// })



