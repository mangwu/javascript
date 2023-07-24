/*
 * @Author: mangwu                                                             *
 * @File: 9.4 fibonacci.js                                                     *
 * @Date: 2023-07-24 15:53:25                                                  *
 * @LastModifiedDate: 2023-07-24 16:46:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function fibonacciIterative(n) {
  if (n <= 2) return n - 1;
  let pre1 = 0;
  let pre2 = 1;
  for (let i = 3; i <= n; i++) {
    let cur = pre1 + pre2;
    pre1 = pre2;
    pre2 = cur;
  }
  return pre2;
}

function fibonacciRecursion(n) {
  if (n <= 2) return n - 1;
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}
console.log(fibonacciIterative(10));
console.log(fibonacciRecursion(20));

function factorialMemoization(n) {
  const memo = [0, 0, 1];
  const fibonacci = (n) => {
    if (memo[n]) return memo[n];
    memo[n - 1] = fibonacci(n - 1);
    return memo[n - 1] + memo[n - 2];
  };
  return fibonacci(n);
}
console.log(factorialMemoization(20));
