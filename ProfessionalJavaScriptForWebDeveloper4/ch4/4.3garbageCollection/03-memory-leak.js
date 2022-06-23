/*
 * @Author: mangwu                                                             *
 * @File: 03-memory-leak.js                                                    *
 * @Date: 2022-06-23 21:46:52                                                  *
 * @LastModifiedDate: 2022-06-23 22:12:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 内存泄漏

// 意外声明全局变量

function setName() {
  n = "jake";
}
// n 为全局变量，是意外声明的

// 异步定时器回调函数引用外部变量，外部变量不会被清理
let hello = "hello, world";
setInterval(() => {
  console.log(hello);
}, 500);

// 闭包，使用函数返回函数，调用 返回函数中引用外部函数的变量不会被清理
function foo() {
  let k = 1;
  return function bar() {
    return k;
  };
}
let m = foo();

// 只要m一直存在，k就一直存在
