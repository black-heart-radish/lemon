let str = 'The morning is upon us.' // str 的长度 length 是 23
let str1 = str.substring(),
    str2 = str.substring(1, 1),
    str3 = str.substring(1, 6),
    str4 = str.substring(6, 1),
    str5 = str.substring(-6),
    str6 = str.substring(1, -6),
    str7 = str.substring(-1,25),
    str8 = str.substring(25, -1),
    str9 = str.substring(NaN, 6),
    str10 = str.substring(25);
console.log(str1); // The morning is upon us.
console.log(str2); // ""
console.log(str3); // he mo
console.log(str4); // he mo
console.log(str5); // The morning is upon us.
console.log(str6); // T
console.log(str7); // The morning is upon us.
console.log(str8); // The morning is upon us.
console.log(str9); // The mo
console.log(str10); // ""