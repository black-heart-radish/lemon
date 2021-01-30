const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test')

const {Schema} = mongoose

const mySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    default: '123'
  }
})

const User = mongoose.model('User', mySchema)

// let admin = new User({
//   name: 'jk'
// })

// admin.save().then((ret) => {
//   console.log('插入成功', ret);
// })

// User.find((err, data) => {
//   if (err) {
//     console.log('查询失败', err);
//   }
//   console.log('查询成功', data);
// })

// User.updateOne({
//   name: 'jk'
// }, {name: 'llt'}, (err, ret) => {
//   if (err) {
//     console.log('更新失败');
//   }
//   console.log('更新成功', ret);
// })

// User.remove({
//   name: 'llt'
// }, (err) => {
//   if (err) {
//     return console.log('删除失败', err);
//   }
//   console.log('删除成功');
// })