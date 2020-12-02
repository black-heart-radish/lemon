// 将华氏温度转换为对等的摄氏温度
//    思想和02.js一样，如果复习用法，建议看02.js

// 如果用匹配项的一部分，建议括起来，然后用p1, p2, p3

// 这里就直接进行封装了

// 声明：f: 华氏温度，t: 转换，c: 摄氏度，ftc: 华氏温度转摄氏度
function ftc(f) {
  function convert(match, p1) {
    return ((p1 - 32) * 5 / 9) + '℃';
  }
  let regExp = /(\d+(?:\.\d*)?)F\b/g;
  // let str = String(f);
  // return str.replace(regExp, convert);
  return f.replace(regExp, convert);
}
let f = '212F';
console.log(ftc(f));