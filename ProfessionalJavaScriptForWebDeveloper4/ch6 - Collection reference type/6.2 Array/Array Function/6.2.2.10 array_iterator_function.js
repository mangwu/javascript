/*
 * @Author: mangwu                                                             *
 * @File: 6.2.2.10 array_iterator_function.js                                  *
 * @Date: 2022-07-22 14:46:22                                                  *
 * @LastModifiedDate: 2022-07-22 16:17:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 迭代方法
// every
console.log([3, 5, 8, 6, 4, 2].every((v, i) => v + i >= 3));

// filter
console.log(
  [25, 36, 62, 52, 36, 94, 52, 82, 31, 42, 86, 57, 76].filter((v) => v >= 60)
);

// forEach
const oddNums = [];
[5, 2, 3, 6, 52, 11, 23, 5, 73, 54, 21, 39, 32, 1, 87].forEach((v, i) => {
  if (v % 2 == 1 && i % 2 == 1) {
    oddNums.push(v);
  }
});
console.log(oddNums);
// map
console.log(["a", "b", "c", "d"].map((v, i) => ({ label: i, value: v })));

// some
console.log([23, 25, 35, 45, 85, 32, 43, 55, 14, 60].some((v) => v > 80));
