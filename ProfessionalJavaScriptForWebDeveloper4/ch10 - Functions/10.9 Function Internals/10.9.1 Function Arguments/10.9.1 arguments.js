/*
 * @Author: mangwu                                                             *
 * @File: 10.9.1 arguments.js                                                  *
 * @Date: 2022-10-07 21:28:57                                                  *
 * @LastModifiedDate: 2022-10-08 06:08:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 能在函数内部直接使用的对象之一
// arguments对象
// 除了箭头函数都有
const func = new Function("console.log(arguments)");
func(1, 2);

// arguments.callee

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// 匿名函数表达式和箭头函数的问题
let factorial2 = function (num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial2(num - 1);
};
let k = factorial2;
factorial2 = "123";
try {
  k(3);
} catch (error) {
  console.log(error.toString());
}
let factorial3 = (num) => {
  if (num <= 1) {
    return 1;
  }
  return num * factorial3(num - 1);
};
let g = factorial3;
factorial3 = "123";
try {
  console.log(g(3));
} catch (error) {
  console.log(error.toString());
}

// 解耦
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * arguments.callee(num - 1);
}
let h = factorial;
factorial = "123";
console.log(h(10));

// 其他方案
const f = (num) => {
  if (num <= 1) {
    return 1;
  }
  return num * f(num - 1);
};
console.log(f(10));
let a = function myFunc(num) {
  if (num <= 1) {
    return 1;
  }
  return num * myFunc(num - 1);
};
console.log(a(10));
let b = a;
a = "123";
console.log(b(10));
