/*
 * @Author: mangwu                                                             *
 * @File: 10.12 Function Recursion.js                                          *
 * @Date: 2022-10-10 00:31:14                                                  *
 * @LastModifiedDate: 2022-10-10 00:53:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

let anoterFactorial = factorial;
factorial = null;
try {
  anoterFactorial(4);
} catch (error) {
  console.log(error.toString());
}

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * arguments.callee(num - 1);
}
const fac = function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

const f = (num) => {
  if (num <= 1) {
    return 1;
  }
  return num * f(num - 1);
};
