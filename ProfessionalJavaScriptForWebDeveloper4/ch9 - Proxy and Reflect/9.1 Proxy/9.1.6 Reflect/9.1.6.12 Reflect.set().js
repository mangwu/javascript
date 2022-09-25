/*
 * @Author: mangwu                                                             *
 * @File: 9.1.6.12 Reflect.set().js                                            *
 * @Date: 2022-09-24 23:25:07                                                  *
 * @LastModifiedDate: 2022-09-25 19:49:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 可以设置对象的键值对

const target = {
  x_: 2,
  y_: 3,
  get x() {
    return this.x_;
  },
  set x(val) {
    this.x_ = val;
  },
  get y() {
    return this.y_;
  },
};
Object.defineProperty(target, "prop", {
  value: "hello",
  writable: false,
  configurable: true,
  enumerable: true,
});
const receiver = {
  x_: 87,
  get x() {
    return this.x_;
  },
};
Object.defineProperty(receiver, "prop", {
  value: "world",
  writable: true,
  configurable: false,
  enumerable: true,
});
Reflect.set(target, "a", "a", receiver);
Reflect.set(target, "x", "x", receiver);
Reflect.set(target, "y", "y", receiver);
Reflect.set(target, "prop", "hello", receiver);
console.log(receiver);
console.log(target);
console.log(Object.getOwnPropertyDescriptors(receiver));
