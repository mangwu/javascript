/*
 * @Author: mangwu                                                             *
 * @File: 9.1.6.5 Reflect.get().js                                             *
 * @Date: 2022-09-24 19:48:54                                                  *
 * @LastModifiedDate: 2022-09-24 20:01:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const a = {
  x_: 1,
  get x() {
    console.log("a");
    return this.x_;
  },
  set x(val) {
    this.x_ = val;
  },
};
const b = {
  x_: 2,
  get x() {
    console.log("b");
    return this.x_;
  },
  set x(val) {
    this.x_ = val;
  },
};
console.log(Reflect.get(a, "x", b));

const obj1 = {
  message: "hello",
};

const obj2 = {
  message: "world",
};

const proxy = new Proxy(obj1, {
  get(target, prop, receiver) {
    return target[prop] + ", " + receiver[prop];
  },
});

console.log(Reflect.get(proxy, "message", obj2));

