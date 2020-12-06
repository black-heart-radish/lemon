// Error 通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出
//     语法 new Error(message, fileName, lineNumber) 参数都为可选
//       message 人类可阅读的错误描述信息
//       fileName 默认是调用Error构造器代码所在的文件的名字
//       lineNumber 默认是调用Error构造器代码所在的文件的行号

try {
  throw new Error("Whoops!");
} catch (e) {
  console.log(e.name + ": " + e.message); // Error: Whoops!
}