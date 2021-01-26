// function fn() {
//   setTimeout(function () {
//     let data = 'hello'
//   }, 1000)
// }
// 需求 ： 调用 fn, 得到内部的 data 
// fn()


// 如果需要获取一个函数中异步操作的结果, 则必须通过回调函数来获取
// 回调函数 : 获取异步操作的结果
function fn(callback) {
  setTimeout(function () {
    let data = 'hello'
    callback(data)
  }, 1000)
}
fn(function (data) {
  console.log(data);
})