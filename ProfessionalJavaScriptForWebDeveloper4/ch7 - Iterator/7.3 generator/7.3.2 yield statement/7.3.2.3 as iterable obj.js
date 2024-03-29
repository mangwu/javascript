/*
 * @Author: mangwu                                                             *
 * @File: 7.3.2.3 as iterable obj.js                                           *
 * @Date: 2022-09-06 11:18:55                                                  *
 * @LastModifiedDate: 2022-09-06 13:40:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 生成器作为可迭代对象
function* generatorFn() {
  yield 1;
  yield 2;
  yield 4;
  yield 3;
  return 5;
}
for (const item of generatorFn()) {
  console.log(item);
}

// 指定循环次数的生成器函数
function* nGeneratorFn(n) {
  // 循环n次
  while (n--) {
    yield;
  }
}
for (const _ of nGeneratorFn(3)) {
  console.log("foo");
}
