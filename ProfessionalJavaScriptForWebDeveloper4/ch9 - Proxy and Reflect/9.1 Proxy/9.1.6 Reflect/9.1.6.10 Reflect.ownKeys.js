/*
 * @Author: mangwu                                                             *
 * @File: 9.1.6.10 .js                                                         *
 * @Date: 2022-09-24 22:39:17                                                  *
 * @LastModifiedDate: 2022-09-24 22:42:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 获取对象的所有自有属性

const obj = {
  [1]: 2,
  [Symbol("123")]: "123",
  name: "obj",
  x_: "x_",
  get x() {
    return this.x_;
  },
  0: 2,
  8: 7,
  set x(val) {
    this.x_ = val;
  },
};

console.log(Reflect.ownKeys(obj));
