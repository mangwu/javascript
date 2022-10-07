/*
 * @Author: mangwu                                                             *
 * @File: 10.9.1 arguments.js                                                  *
 * @Date: 2022-10-07 21:28:57                                                  *
 * @LastModifiedDate: 2022-10-07 21:41:00                                      *
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

