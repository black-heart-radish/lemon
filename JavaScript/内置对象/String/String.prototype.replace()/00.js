// 1. replace()方法返回一个 由替换值(replacement) 替换部分或所有的模式(pattern)的匹配项 后得到的新字符串
// 2. 原字符串 不会 被改变
// 3. pattern 可以是一个 字符串 或者一个 RegExp (正则表达式)
//     但如果pattern是一个字符串，仅替换第一个匹配项
//     就算是正则表达式，没有声明全局(g)，也仅会替换第一个匹配项
// 4. replacement 可以是一个 字符串 或者一个每次匹配都要调用的回调函数
//     如果是字符串可以插入一些特殊的变量名
//         变量名                    代表的值
//         $$                        插入一个$
//         $&                        插入所匹配的匹配项
//         $`                        插入匹配项左边儿的内容
//         $'                        插入匹配项右边儿的内容
//         $n                        插入第n个括号匹配的字符串，索引是从 1 开始 (pattern必须是RegExp : /()()()/)
//         $<Name>  (不重要)          Name为分组名称，如果要用看MDN
//     如果是回调函数
//         当匹配执行后，该函数就会执行。
//         回调函数的 返回值 作为 替换字符串
//         如果pattern是正则表达式的全局模式，每次匹配都会调用
//             变量名                    代表的值
//             match                     匹配的匹配项(相当于上面的$&)
//             p1, p2, ....              第n个括号匹配的字符串(相当于$n)
//             offset                    匹配项在原字符串中的偏移量（比如，如果原字符串是 'abcd'，匹配到的子字符串是 'bc'，那么这个参数将会是 1）
//             string                    被匹配的原字符串
//             NameCaptureGroup          命名捕获组匹配的对象
//         精确的参数个数依赖于 replace() 的pattern是否是一个RegExp对象
//         以及这个RegExp对象指定了多少个括号子串
//         如果RegExp对象使用了命名捕获，还会添加一个命名捕获的对象
// 5. 语法 StringObject.replace(pattern, replacement)
//         StringObject.replace(regexp|subStr, newSubStr|function)

console.log('-------------------------------------示例1-------------------------------------');
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
const regex = /dog/gi;
console.log(p.replace(regex, 'ferret'));
// "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
console.log(p.replace('dog', 'monkey'));
// "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

console.log('-------------------------------------示例2-------------------------------------');
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...

console.log('-------------------------------------示例3-------------------------------------');
var re = /apples/gi;
var str1 = "Apples are round, and apples are juicy.";
var newstr1 = str1.replace(re, "oranges");
// oranges are round, and oranges are juicy.
console.log(newstr1);