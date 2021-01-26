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
let admin = new User({
  username: 'admin',
  password: '123456',
  email: 'admin@admin.com'
})

// 持久化
admin.save((err, ret) => {
  if (err) {
    return console.log('保存失败', err);
  }
  console.log('保存成功', ret);
})

// 4.2 查询