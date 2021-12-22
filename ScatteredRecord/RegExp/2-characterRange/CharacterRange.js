/**
 * @description 方括号表示匹配其中的所有字符中的一个，表示字符范围
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-22 15:45:20
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const str = "(Java)[Script]\n1.1";
// 匹配任意数字和字符
var r = /[a-zA-Z0-9]+/g;
console.log(str.match(r));

// 匹配任意数字
var r2 = /[\u0030-\u0039]/g;
console.log(str.match(r2));

// 消除非数字，字母和小数点
let a = str.replace(/[^a-zA-Z0-9.]/g, "")
console.log(a);
