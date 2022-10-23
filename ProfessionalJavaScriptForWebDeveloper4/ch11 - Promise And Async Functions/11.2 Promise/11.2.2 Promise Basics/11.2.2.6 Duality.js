/*
 * @Author: mangwu                                                             *
 * @File: 11.2.2.6 Duality.js                                                  *
 * @Date: 2022-10-22 01:01:32                                                  *
 * @LastModifiedDate: 2022-10-22 01:02:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 同步执行与异步执行的二元性
try {
  throw new Error("foo");
} catch (error) {
  console.log(error.toString());
}
try {
  Promise.reject(new Error("bar"));
} catch (error) {
  console.log(error.toString());
}
