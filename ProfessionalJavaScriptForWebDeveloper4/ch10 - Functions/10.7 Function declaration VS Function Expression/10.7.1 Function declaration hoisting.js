/*
 * @Author: mangwu                                                             *
 * @File: 10.7.1 Function declaration hositing.js                              *
 * @Date: 2022-10-07 14:55:56                                                  *
 * @LastModifiedDate: 2022-10-07 17:57:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 函数声明的提升
console.log(sum(10, 12));

function sum(num1, num2) {
  return num1 + num2;
}

// 函数表达式
try {
  console.log(sum2);
} catch (error) {
  console.log(error.toString());
}
let sum2 = function (num1, num2) {
  return num1 + num2;
};
console.log(sum3);
try {
  sum3(1, 2);
} catch (error) {
  console.log(error.toString());
}
var sum3 = function (num1, num2) {
  return num1 + num2;
};

