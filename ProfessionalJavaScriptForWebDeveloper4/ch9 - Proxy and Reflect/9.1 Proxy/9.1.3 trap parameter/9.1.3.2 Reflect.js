/*
 * @Author: mangwu                                                             *
 * @File: 9.1.3.2 Reflect.js                                                   *
 * @Date: 2022-09-23 15:54:23                                                  *
 * @LastModifiedDate: 2022-09-23 16:34:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const target = {
  foo: "bar",
};
const handler = {
  get() {
    return Reflect.get(...arguments);
  },
};
const proxy = new Proxy(target, handler);
console.log(proxy.foo); // bar
console.log(target.foo); // bar

const handler2 = {
  get: Reflect.get,
};
const proxy2 = new Proxy(target, handler2);
console.log(proxy2.foo);
console.log(target.foo);

const proxy3 = new Proxy(target, Reflect);
console.log(proxy3.foo);
console.log(target.foo);

const target2 = {
  message1: "hello",
  message2: "world",
};
const proxy4 = new Proxy(target2, {
  get(target, prop, receiver) {
    let decoration = "";
    if (prop === "message1") {
      decoration = ", world";
    }
    return Reflect.get(...arguments) + decoration;
  },
});

console.log(proxy4.message1);
console.log(target2.message1);
