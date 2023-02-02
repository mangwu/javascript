/*
 * @Author: mangwu                                                             *
 * @File: 10.6.1.js                                                            *
 * @Date: 2022-10-07 02:20:44                                                  *
 * @LastModifiedDate: 2022-10-07 03:14:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 扩展参数
// 使用扩展操作符扩展实际参数，以到达使用少数的实际参数传递到多数形式参数的目的
let values = [1, 2, 3, 4];

function getSum() {
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum;
}
console.log(getSum.apply(null, values)); // 10
console.log(getSum(...values)); // 10

console.log(getSum(3, 5, ...values, ...[-3, -8, 9], 2, 5));

function getProduct(a, b, c = 1) {
  return a * b * c;
}
let getThreeSum = (a, b, c = 0) => {
  return a + b + c;
};
console.log(getProduct(...[1, 2]));
console.log(getProduct(...[1, 2, 3]));
console.log(getProduct(...[1, 2, 3, 4]));

console.log(getThreeSum(...[1, 2]));
console.log(getThreeSum(...[1, 2, 3]));
console.log(getThreeSum(...[1, 2, 3, 4]));

