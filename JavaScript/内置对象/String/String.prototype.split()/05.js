let str1 = '',
    str2 = 'hello',
    str3 = 'hello world, hello vue, hello react';
console.log(str2.split());
console.log(str2.split('hello'));
console.log(str2.split(''));
console.log(str1.split(''));
console.log(str1.split('hello'));
console.log(str3.split('hello'));
console.log(str3.split('hello', 2));
console.log(str3.split(/h(ell)o/));
console.log(str3.split(['rld',' he']));
// [ 'hello' ]
// [ '', '' ]
// [ 'h', 'e', 'l', 'l', 'o' ]
// []
// [ '' ]
// [ '', ' world, ', ' vue, ', ' react' ]
// [ '', ' world, ' ]
// [ '', 'ell', ' world, ', 'ell', ' vue, ', 'ell', ' react' ]
// [ 'hello wo', 'llo vue, hello react' ]