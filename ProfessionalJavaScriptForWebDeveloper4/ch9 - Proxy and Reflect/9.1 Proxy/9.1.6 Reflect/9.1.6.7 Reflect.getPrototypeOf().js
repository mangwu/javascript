/*
 * @Author: mangwu                                                             *
 * @File: 9.1.6.7 Reflect.getPrototypeOf().js                                  *
 * @Date: 2022-09-24 21:11:21                                                  *
 * @LastModifiedDate: 2022-09-24 21:42:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 不进行强制类型转换

try {
  Reflect.getPrototypeOf("foo");
} catch (error) {
  console.log(error.message);
}
console.log(Object.getPrototypeOf("foo"));
