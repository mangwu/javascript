/*
 * @Author: mangwu                                                             *
 * @File: 10.10.1 function.length.js                                           *
 * @Date: 2022-10-09 16:15:45                                                  *
 * @LastModifiedDate: 2022-10-09 16:31:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 方法的length属性

function sayName(name) {
  console.log(name);
}
function sum(num1, num2) {
  return num1 + num2;
}
function sayHi() {
  console.log("Hi");
}
console.log(sayName.length);
console.log(sum.length);
console.log(sayHi.length);

