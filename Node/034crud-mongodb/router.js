// Express 提供了一种更好地方式
// 专门用来包装路由的
const express = require('express')
const Students = require('./students')
const fs = require('fs')

// Students.updateById({
//   id: 1,
//   name: '张三'
// }, (err) => {
//   if (err) {
//     return console.log('修改失败');
//   }
//   console.log('修改成功');
// })

// 1. 创建一个路由容器
const router = express.Router()

// 2. 把路由都挂载到 router 路由容器中
router.get('/students', (req, res) => {
  // fs.readFile('./db.json', (err, data) => {
  //   if (err) {
  //     return res.status(500).send('Server error...')
  //   }
  //   res.render('index.html', {
  //     fruits: [
  //       {
  //         name: '橘子',
  //         about: 'orange',
  //         img: '/public/img/1.jpg'
  //       },
  //       {
  //         name: '香蕉',
  //         about: 'banana',
  //         img: '/public/img/2.jpg'
  //       },
  //       {
  //         name: '芒果',
  //         about: 'mango',
  //         img: '/public/img/3.jpg'
  //       },
  //       {
  //         name: '草莓',
  //         about: 'strawberry',
  //         img: '/public/img/4.jpg'
  //       },
  //     ],
  //     students: JSON.parse(data).students // 从文件中读取到的数据除了二进制一定是字符串, 所以要转化
  //   })
  // })

  Students.find((err, data) => {
    if (err) {
      return res.status(500).send('Server error...')
    }
    res.render('index.html', {
      fruits: [
        {
          name: '橘子',
          about: 'orange',
          img: '/public/img/1.jpg'
        },
        {
          name: '香蕉',
          about: 'banana',
          img: '/public/img/2.jpg'
        },
        {
          name: '芒果',
          about: 'mango',
          img: '/public/img/3.jpg'
        },
        {
          name: '草莓',
          about: 'strawberry',
          img: '/public/img/4.jpg'
        },
      ],
      students: data // 从文件中读取到的数据除了二进制一定是字符串, 所以要转化
    })
  })
})

router.get('/students/new', (req, res) => {
  res.render('new.html')
})

router.post('/students/new', (req, res) => {
  // 1. 获取表单数据
  // 2. 处理
  //    将数据保存到 db.json 文件中用以持久化
  //    1. 先将 db.json 读取出来
  //    2. 然后再往对象中 push 数据
  //    3. 然后把对象转为字符串
  //    4. 然后再把字符串写入文件
  // 3. 发送响应
  // console.log(req.body);
  new Students(req.body).save((err) => {
    if (err) {
      return res.status(500).send('Server error...')
    }
    res.redirect('/students')
  })
})

// 渲染编辑学生页面
router.get('/students/edit', (req, res) => {
  // 1. 在客户端的列表页中处理链接问题(需要有 id 参数)
  // 2. 获取要编辑的学生 id
  // 3. 渲染编辑页面
  //    1. 根据 id 把学生信息查出来
  //    2. 使用模板引擎渲染页面
  // console.log(req.query.id);
  Students.findById(req.query.id.replace(/"/g, ''), function (err, student) {
    if (err) {
      return res.status(500).send('Server error...')
    }
    // console.log(student);
    res.render('edit.html', {student})
  })
})

// 处理编辑学生
router.post('/students/edit', (req, res) => {
  // 1. 获取表单数据
  // 2. 更新
  // 3. 发送响应
  // console.log(req.body);
  Students.findByIdAndUpdate(req.body.id.replace(/"/g, ''), req.body, (err) => {
    if (err) {
      return res.status(500).send('Server error...')
    }
    res.redirect('/students')
  })
})

// 处理删除学生
router.get('/students/delete', (req, res) => {
  // 1. 获取要删除的 id 
  // 2. 根据 id 执行删除操作
  // 3. 根据操作结果发送响应数据
  Students.findByIdAndRemove(req.query.id.replace(/"/g, ''), (err) => {
    if (err) {
      return res.status(500).send('Server error...')
    }
    res.redirect('/students')
  })
})

// 3. 把 router 导出
module.exports = router



// 这样也不方便
// module.exports = function (app) {
//   app.get('/students', (req, res) => {

//   })
  
//   app.get('/students/new', (req, res) => {
    
//   })
  
//   app.get('/students', (req, res) => {
    
//   })
// }