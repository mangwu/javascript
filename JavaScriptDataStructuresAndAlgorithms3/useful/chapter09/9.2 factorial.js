/*
 * @Author: mangwu                                                             *
 * @File: 9.2 .js                                                              *
 * @Date: 2023-07-24 14:54:49                                                  *
 * @LastModifiedDate: 2023-07-24 16:38:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function factorialIterative(n) {
  let res = 1;
  for (; n >= 1; n--) {
    res *= n;
  }
  return res;
}
console.log(factorialIterative(10));
function factorialRecursion(n) {
  if (n === 1) return 1;
  return n * factorialRecursion(n - 1);
}
console.log(factorialRecursion(10));

