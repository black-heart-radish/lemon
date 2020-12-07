# NaN

## 全局属性 NaN 的值表示不是一个数字（Not-A-Number）

## 这玩意与 Number.NaN 一毛一样

## NaN如果通过 == 、 != 、 === 、以及 !==与其他任何值比较都将不相等 -- 包括与其他 NAN值进行比较。必须使用 Number.isNaN() 或 isNaN() 函数。在执行自比较之中：NaN，也只有NaN，比较之中不等于它自己。

## 最好用Number.isNaN()