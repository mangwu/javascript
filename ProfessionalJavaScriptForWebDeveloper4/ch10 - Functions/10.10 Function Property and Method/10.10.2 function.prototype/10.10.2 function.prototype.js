/*
 * @Author: mangwu                                                             *
 * @File: 10.10.2 function.prototype.js                                        *
 * @Date: 2022-10-09 16:30:41                                                  *
 * @LastModifiedDate: 2022-10-09 17:16:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function g(n) {
  console.log(g.arguments);
  console.log(arguments);
  console.log(n);
  arguments[0] = "2";
  g.arguments[0] = "3";
  console.log(g.arguments);
  console.log(arguments);
  console.log(n);
  console.log(Object.getOwnPropertyDescriptors(g));
  console.log(arguments === g.arguments);
}
g(1, 2);

console.log(Function.prototype === Function.__proto__);
console.log(function () {}.__proto__ === Function.prototype);
console.log(function () {}.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
console.log(Object.__proto__ === Function.prototype);
console.log(Object.__proto__.__proto__ === Object.prototype);
