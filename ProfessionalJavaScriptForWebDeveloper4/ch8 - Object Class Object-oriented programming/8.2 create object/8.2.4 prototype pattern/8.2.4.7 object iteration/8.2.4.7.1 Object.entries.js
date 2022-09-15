/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.7.1 Object.entries.js                                          *
 * @Date: 2022-09-15 22:56:51                                                  *
 * @LastModifiedDate: 2022-09-15 23:00:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 对象迭代 entries方法
const obj = {
  a: 1,
  e: 3,
  2: 2,
  1: 1,
};
Object.defineProperties(obj, {
  [Symbol("123")]: {
    value: 123,
    enumerable: true,
    configurable: true,
  },
  18: {
    enumerable: false,
    value: 18,
  },
});
console.log(Object.entries(obj));
