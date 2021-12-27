/**
 * @description String.prototype.match()
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-24 09:13:18
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const str = "JavaScript";

// 使用g和不使用g的区别，以及无匹配值和有匹配值的区别
let a = str.match(/a/);
console.log(a); //['a', index: 1, input: 'JavaScript', groups: undefined]
let b = str.match(/a/g);
console.log(b); // ['a', 'a']
let c = str.match(/k/g);
console.log(c); //null
let d = str.match(/k/);
console.log(d); // null

// 使用小括号的分组匹配
const strb = "JavaScript is a single-threaded language";
let reg = /a (single-threaded) language/;
console.log(strb.match(reg));

// 匹配非正则对象
var str1 =
    "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
  str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
  str3 = "The contract was declared null and void.";
let m1 = str1.match("number"); // "number" 是字符串。返回["number"]
let m2 =str1.match(NaN); // NaN的类型是number。返回["NaN"]
let m3 =str1.match(Infinity); // Infinity的类型是number。返回["Infinity"]
let m4 =str1.match(+Infinity); // 返回["Infinity"]
let m5 =str1.match(-Infinity); // 返回["-Infinity"]
let m6 =str2.match(65); // 返回["65"]
let m7 =str2.match(+65); // 有正号的number。返回["65"]
let m8 =str3.match(null); // 返回["null"]

console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);
console.log(m6);
console.log(m7);
console.log(m8);
