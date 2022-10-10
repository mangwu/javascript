/*
 * @Author: mangwu                                                             *
 * @File: 10.13.3 斐波那契.js                                                      *
 * @Date: 2022-10-10 14:30:49                                                  *
 * @LastModifiedDate: 2022-10-10 15:20:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

"use strict";
// 0 1 1 2 3 5 ...
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
let date = new Date();
console.log(fibonacci(40));
console.log(Date.now() - date);

const hash = new Map([
  [1, 1],
  [0, 0],
]);
const fib = (n) => {
  if (n < 2) {
    return n;
  }
  if (hash.has(n)) {
    return hash.get(n);
  }
  let pre1 = -1;
  let pre2 = -1;
  if (hash.has(n - 1)) {
    pre1 = hash.get(n - 1);
  }
  if (hash.has(n - 2)) {
    pre2 = hash.get(n - 2);
  }

  if (pre1 == -1) {
    pre1 = fib(n - 1);
  }
  if (pre2 == -1) {
    pre2 = fib(n - 2);
  }
  hash.set(n, pre1 + pre2);
  return pre1 + pre2;
};
date = new Date();
console.log(fib(40));
console.log(Date.now() - date);

const fib2 = (n) => {
  if (n < 2) {
    return n;
  }
  let a = 1;
  let b = 1;
  let temp;
  for (let i = 2; i < n; i++) {
    temp = b;
    b = b + a;
    a = temp;
  }
  return b;
};
date = new Date();
console.log(fib2(40));
console.log(Date.now() - date);

// 基础框架
function fibouter(n) {
  return fibImpl(0, 1, n);
}
// 执行递归
function fibImpl(a, b, n) {
  if (n == 0) {
    return a;
  }
  return fibImpl(b, a + b, n - 1);
}
date = new Date();
console.log(fibouter(40));
console.log(Date.now() - date);