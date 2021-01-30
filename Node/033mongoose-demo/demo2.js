const mongoose = require('mongoose')

// 结构
const {Schema} = mongoose

// 1. 连接数据库
// 指定连接的数据库不需要存在, 当你插入第一条数据之后就会被自动创建出来
mongoose.connect('mongodb://localhost:27017/test');

// 2. 设计文档结构(表结构)
// 字段名称就是表结构中的属性名称
// 约束目的就是为了保证数据的完整性, 不要有脏数据
const userSchema = new Schema({
  username: {
    type: String,
    required: true // 必须有
  },
  password: {
    type: String,
    required: true
  },
  email: String
});

// 3. 将文档结构发布为模型
//    mongoose.model 方法就是用来将一个架构发布为 model
//    第一个参数 ： 传入一个大写名词单数字符串用来表示你的集合名称
//                 mongoose 会自动将大写名字的字符串生成 小写复数 的集合名称
//                 例如这里的 User 最终会变为 users 集合名称
//    第二个参数 ： 架构 Schema
//    返回值 ： 模型构造函数
const User = mongoose.model('User', userSchema)

// 4. 当我们有了模型构造函数之后, 就可以使用这个构造函数对 User 集合中的数据为所欲为了

// 4.1 增加数据
// let admin = new User({
//   username: 'zs',
//   password: '123456',
//   email: 'admin@admin.com'
// })
// 插入, (持久化)
// admin.save((err, ret) => {
//   if (err) {
//     return console.log('保存失败', err);
//   }
//   console.log('保存成功', ret);
// })

// 4.2 查询
// User.find((err, data) => {
//   if (err) {
//     return console.log('查询失败', err);
//   }
//   console.log('查询成功', data);
// })

// 4.2.2 按条件查询
// User.find({
//   username: 'zs'
// }, (err, data) => {
//   if (err) {
//     return console.log('查询失败', err);
//   }
//   console.log('查询成功', data);
// })

// User.find() 返回的始终是一个数组

// 4.2.3
// 如果没有条件就返回第一个, 查不到就是 null
// User.findOne({
//   username: 'zs'
// }, (err, data) => {
//   if (err) {
//     return console.log('查询失败', err);
//   }
//   console.log('查询成功', data);
// })

// 4.3 删除数据
// User.remove({
//   username: 'zs'
// }, (err, ret) => {
//   if (err) {
//     return console.log('删除失败', err);
//   }
//   console.log('删除成功');
// })

// 4.4 更新数据
User.findByIdAndUpdate('5fcdee5f90e68033e85907a3', {
  password: 123456
}, (err, ret) => {
  if (err) {
    console.log('更新失败', err);
  }
  console.log('更新成功');
})