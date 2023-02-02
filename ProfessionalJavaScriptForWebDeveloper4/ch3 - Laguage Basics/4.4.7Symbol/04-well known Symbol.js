/**
 * @description  04-well known Symbol.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-02-28 22:36:07
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 常用内置符号

// 用于对象属性被重新定义，改变对象的原生结构

const a = {
  b: 2,
};
// for in可以遍历对象的属性（不包括符号属性）
for (let key in a) {
  console.log(key);
}
// for of却不可以，但是通过定义对象的迭代符号属性就可以使用for of遍历了
a[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
for (let v of a) {
  console.log(v);
}

// 使用 @@代表 Symbol

// a[@@iterator] = function* () {
//   yield 4;
//   yield 5;
//   yield 36;
// };
// for (let v of a) {
//   console.log(v);
// }
