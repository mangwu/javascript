/*
 * @Author: mangwu                                                             *
 * @File: 10.3.1.3.1 overloading.js                                            *
 * @Date: 2022-10-05 23:10:34                                                  *
 * @LastModifiedDate: 2022-10-05 23:13:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 使用arguments模拟函数重载（其他语言依靠函数签名实现）
function increase() {
  if (arguments.length == 1) {
    return arguments[0] + 10;
  } else if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  }
  throw new Error("请传递1或2个参数");
}

console.log(increase(10));
console.log(increase(30, 20));
