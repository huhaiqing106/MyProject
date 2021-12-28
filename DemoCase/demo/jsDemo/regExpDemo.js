// https://www.jb51.net/article/184336.htm

const reg = new RegExp(/^\b(http|tmast|https)\b:\/\/{1}[^\s]*/g);
let value1 = 'http://tencent.com';
let value2 = 'http://www.baidu.com';
let value3 = 'http://www.baidu.com';

console.log(reg.test(value1));
console.log(reg.test(value2));
console.log(reg.test(value3));
