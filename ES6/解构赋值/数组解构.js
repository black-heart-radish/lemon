// 未使用解构，需要把数组中的值赋值给各个变量
let  arr1 = [1, 2, 3];
let a = arr1[0];
let b = arr1[1];
let c = arr1[2];
console.log(a);   // 1
console.log(b);   // 2
console.log(c);   // 3


// --------------------------------------------------------------------------------
// 使用数组解构，且          
// 变量数量与数组值的数量正好相等*****************************************************
let arr2 = [4, 5, 6];
let [e, f, g] = arr2;
console.log(e);   // 4
console.log(f);   // 5
console.log(g);   // 6


// --------------------------------------------------------------------------------
// 使用数组解构，且          
// 变量数量 多于 数组值的数量*********************************************************
// 解构不成功就赋值undefined*********************************************************
let arr3 = [7, 8, 9];
let [h , i, j, k] = arr3;
console.log(h);   // 7
console.log(i);   // 8
console.log(j);   // 9
console.log(k);   // undefined



// --------------------------------------------------------------------------------
// 使用数组解构，且          
// 变量数量 少于 数组值的数量（不完全解构）********************************************
// 按照前面顺序一个一个来就行，不影响解构**********************************************
let arr4 = [10, 11, 12];
let [o, m] = arr4;
console.log(o);   // 10 
console.log(m);   // 11


// ---------------------------------------------------------------------
// 使用数组解构**********************************************************
// 可以在解构的同时赋默认值，如果index不存在或为undefined，就会使用默认值*****
let arr5 = [13, undefined, null];
let [n = 'lemon',l = '柠檬',p = '维他命',r = '氨基酸'] = arr5;
console.log(n);
console.log(l);
console.log(p);
console.log(r);


// ---------------------------------------------------------------------
// 使用数组解构**********************************************************
// 如果不想要数组前面的值，解构的时候为空就行*******************************
let arr6 = [14, 15, 16];
let [ , , s] = arr6;
console.log(s);


// ---------------------------------------------------------------------
// 使用数组解构**********************************************************
// 等号的右边不是数组****************************************************
// 严格地说，不是可遍历的结构*********************************************
// let [s1] = 1;    // TypeError: 1 is not iterable
// let [s2] = false;   // TypeError: false is not iterable
// let [s3] = undefined;  // TypeError: undefined is not iterable
// let [s4] = null;  // TypeError: null is not iterable
// let [s5] = NaN;   // TypeError: NaN is not iterable
// let [s6] = {};  // TypeError: {} is not iterable