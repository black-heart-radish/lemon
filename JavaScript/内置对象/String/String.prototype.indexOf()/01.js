// 使用 indexOf 统计一个字符串中某个字母出现的次数

// 翻译：生存还是毁灭？这是个问题。（莎士比亚《哈姆雷特》）
let str = 'To be, or not to be, that is the question.';
let count = 0;
let pos = str.indexOf('e')
while (pos != -1) {
  count++;
  pos = str.indexOf('e', pos + 1)
}
console.log(count);  // 4