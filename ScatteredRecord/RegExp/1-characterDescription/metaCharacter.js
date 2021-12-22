/**
 * @description 描述字符的方式有普通字符和元字符，元字符拥有特定功能，能让正则匹配更方便高效
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-22 10:58:58
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const str = "java script";

// 利用ASCII编码的十六进制的元字符构成正则表达式
let reg = /\x61/;
let matchArr = str.match(reg);
console.log(matchArr);

// 匹配下划线和大写字母，将下划线命名转化为驼峰命名
/**
 * @description 下划线转大驼峰命名
 * @param {String} str 下划线命名名称变量
 * @returns {String}
 */
var underlineToBigHump3 = (str) => {
  // 使用正则表达式
  let ans = str.replace(
    /(_)(\w)/g,
    (_match, _$1, $2) => `${$2.toLocaleUpperCase()}`
  );
  return ans;
};
underlineToBigHump3("this_is_a_underline_var");

let str2 = "javascript\njavascript";
// 通过构造函数的字符串参数，使用元字符需要使用双斜杠 元字符中的转义字符额外添加与不添加没有关系
let reg2 = new RegExp("\u0061"); // 使用单斜杠一样有效
let reg3 = new RegExp("\\w");
let reg4 = new RegExp("\\s");
let reg5 = new RegExp("\s");
let reg6 = new RegExp("\n");
let reg7 = new RegExp("\\n");
console.log(str.match(reg2)); // a
console.log(str.match(reg3)); // J
console.log(str.match(reg4)); // 空格
console.log(str.match(reg5)); // null
console.log(str2.match(reg6)); // \n
console.log(str2.match(reg7)); // \n

