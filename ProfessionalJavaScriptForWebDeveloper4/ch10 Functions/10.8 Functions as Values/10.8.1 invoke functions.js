/*
 * @Author: mangwu                                                             *
 * @File: 10.8.1 .js                                                           *
 * @Date: 2022-10-07 18:42:54                                                  *
 * @LastModifiedDate: 2022-10-07 18:53:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 调用函数功能的模板函数
function callSomeFunction(someFunction, ...someArgument) {
  return someFunction(...someArgument);
}

function sum(num1, num2) {
  return num1 + num2;
}

function sayHello(name) {
  console.log(`Hi, ${name}`);
}
console.log(callSomeFunction(sum, 1, 2));
callSomeFunction(sayHello, "mangwu");
