# String.prototype.replaceAll()

## replaceAll()，node里边不支持，浏览器里边有用

## String.prototype.replaceAll() 与 String.prototype.replace() 大体相同，都是替换字符串

## 不同的地方

  - 当pattern为字符串时，会全局搜索，相当于replace()方法的正则用了g，而不是像replace()只替换第一个匹配项

  - 当pattern为正则表达式时，必须设置全局 g 标志，否则，将引发TypeError错误


- 01.html : pattern为字符串

- 02.html : pattern为正则表达式

### 如果忘记基础语法，回去看replace()