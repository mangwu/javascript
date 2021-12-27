/**
 * @description 反向声明
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-25 15:24:31
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 反向声明匹配不符合条件的匹配模式
const reg = /\w+(?!=)/g;
const str = "one: 1; two=2";

console.log([...str.matchAll(reg)]);

// 反向匹配 返回指定字符串的指定字符的最后一个

function lastCharIndex(str, c) {
  const reg = new RegExp(`${c}(?![^${c}]*${c}[^${c}]*)`);
  // console.log([...str.matchAll(reg)]);
  // console.log(str.match(reg));
  return str.match(reg).index;
}

lastCharIndex("JavaScript JavaScript", "a")