// [min, max) 之间的随机数
function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}

// [min, max) 之间的随机整数
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// [min, max] 之间的随机整数
function getRandomIntInclusive (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomArbitrary(1, 2)); // 1.0721495223544841
console.log(getRandomInt(1, 2)); // 1
console.log(getRandomIntInclusive(1, 2)); // 2