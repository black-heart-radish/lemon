// EcamScript 6 对数组新增了很多方法
// find
// findIndex

// find 接收一个方法作为参数, 方法内部返回一个条件
// find 会遍历所有的元素, 执行你给定的带有条件返回指的函数
// 符合该条件的元素会作为 find 方法的返回值
// 如果遍历结束还没有符合该条件的元素, 则返回 undefined

Array.prototype.myFind = function (conditionFunc) {
  for (let i = 0; i < this.length; i++) {
    if (conditionFunc(this[i])) {
      return this[i]
    }
  }
}

let ret = [1, 2, 3, 4].myFind((item) => {
  return item === 4
})

console.log(ret);