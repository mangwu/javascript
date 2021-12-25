/**
 * @description 反向引用
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-25 17:34:03
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const str = "<p></p><div><div><h2></h2>";

const reg = /<\/?(\w+)><\/?\1>/g;

console.log([...str.matchAll(reg)]);

const str2 = "javascript java script rust";
const reg2 = /((java)(script)).*\2.*\3/g;
console.log([...str2.matchAll(reg2)]);

// 通过$n获取反向引用的值
var s = "abcdefghijklmn";
var r = new RegExp(/(\w)(\w)(\w)/g);

console.log(s.replace(r, (m, $1, $2, $3) => $2 + $3 + $1));
