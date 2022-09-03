/*
 * @Author: mangwu                                                             *
 * @File: 7.2.2.1.5 .js                                                        *
 * @Date: 2022-09-03 02:02:56                                                  *
 * @LastModifiedDate: 2022-09-03 02:25:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 可迭代协议实现接口可以继承
class FooArray extends Array {}
const foo = new FooArray([1, 2, 3]);
console.log(foo[Symbol.iterator]);
for (const item of foo) {
  console.log(item);
}

const iterator = foo.values();