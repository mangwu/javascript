/**
 * @description 正向声明量词
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-24 18:22:43
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 正向声明量词用于匹配符合条件的字符
var s = "one : 1; two= 2";
var r = /\w*(?==)/; //使用正前向声明，指定执行匹配必须满足的条件
var a = s.match(r); //返回数组["two"]
console.log(a);

// 返回最后一个指定字符索引
function lastCharIndex(str, c) {
  const reg = new RegExp(`${c}(?=[^${c}]*)$`);
  return str.match(reg).index;
}
var str = "JavaScript is a great language";
console.log(lastCharIndex(str, "a"));
