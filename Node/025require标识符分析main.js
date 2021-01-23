// require('模块标识')
   
// 路径形式的模块
//    不可省略
//    ./
//    ../
//    /xxx    几乎不用
//    d:/a/foo.js   几乎不用
//    首位的 / 表示的是当前文件模块所属的磁盘根路径
// require('./025require标识符分析foo')

// 如果是非路径形式的模块标识
// 核心模块
// 核心模块的本质也是文件
// 核心模块文件已经编译到二进制文件中了, 我们只需要按照名字来加载就可以了
// require('fs')
// require('http')

// 第三方模块
// 凡是第三方模块都必须通过 npm 来下载
// 使用的时候就可以通过 require('包名') 的方式来进行加载才能使用
// 不可能有任何一个第三方包和核心模块的名字是一样的
// 既不是核心模块, 也不是路径形式的模块
//    先找到当前文件所处目录中的 node_modules 目录
//    node_modules/art-template
//    node_modules/art-template/package.json 文件
//    node_modules/art-template/package.json 文件 中的 main 属性
//    main 属性中就记录了 art-template 的入口模块
//    然后加载使用这个第三方包
//    实际上最终加载的还是文件
// 
//    如果 package.json 文件不存在或者 main 指定的入口模块也没有
//    则 node 会自动找该目录下的 index.js
//    也就是说 index.js 会作为一个默认备选项
// 
//    如果以上的任何一个条件都不成立, 则会进入上一级目录中的 node_modules 目录查找
//    规则一样
//    如果上一级还没有, 则会继续往上上一级查找
//    ...
//    如果直到当前磁盘根目录还找不到, 最后报错：Cannot find module xxx
// 
//    注意: 我们一个项目有且只有一个 node_modules
//    不会出现有多个 node_modules, 放在项目根目录中, 这样的话项目中的所有子目录都能加载的到
// const template = require('art-template')


// 自己再 node_modules 里创建了一个 a 的文件夹
// 里边配置了 package.json 的 main
// const a = require('a')
// console.log(a(3, 4));

// index.js 是默认备选项
require('aa')