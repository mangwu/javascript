/*
 * @Author: mangwu                                                             *
 * @File: 6.3-for-statement.js                                                 *
 * @Date: 2022-06-07 15:06:26                                                  *
 * @LastModifiedDate: 2022-06-07 16:20:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// for语句
// 基础for语句
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// for-in 遍历可枚举对象中的继承，可枚举的非符号属性
const arr = new Array(5).fill(0).map((_v, i) => i);
arr[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log(arr);
for (const i of arr) {
  console.log(i);
}
for (const i in arr) {
  console.log(i);
}

// 无序的属性
for (const item in global) {
  console.log(item);
}

// for-of遍历可迭代对象的元素
let a = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};
try {
  for (const item of a) {
    console.log(item);
  }
} catch (error) {
  console.log("不可迭代对象");
}
