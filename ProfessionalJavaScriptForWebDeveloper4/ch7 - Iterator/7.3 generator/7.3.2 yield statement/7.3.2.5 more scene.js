/*
 * @Author: mangwu                                                             *
 * @File: 7.3.2.5 more scene.js                                                *
 * @Date: 2022-09-06 14:36:36                                                  *
 * @LastModifiedDate: 2022-09-06 14:49:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 1. 无穷计数
function* generatorFn() {
  for (let i = 0; ; i++) {
    yield i;
  }
}
for (const item of generatorFn()) {
  console.log(item);
  if (item == 100) {
    break;
  }
}
// 2. range
function* range(start = 0, end = 0, step = 1) {
  while (start < end) {
    yield start;
    start += step;
  }
}

for (const item of range(5, 9)) {
  console.log(item);
}
for (const item of range(7, 17, 3)) {
  console.log(item);
}

// 3. zeros

function* zeros(n = 0) {
  while (n--) {
    yield 0;
  }
}
console.log(Array.from(zeros(5)));
