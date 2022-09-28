/*
 * @Author: mangwu                                                             *
 * @File: 9.2.8 getPrototypeOf().js                                            *
 * @Date: 2022-09-28 13:41:36                                                  *
 * @LastModifiedDate: 2022-09-28 13:52:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 获取对象的原型的捕获器
const prototype = { a: "a" };

const target = {};
Object.setPrototypeOf(target, prototype);

const proxy = new Proxy(target, {
  getPrototypeOf(target) {
    console.log("getPrototypeOf");
    // 返回固定原型对象
    return Function.prototype;
  },
  get() {
    console.log("get");
    return Reflect.get(...arguments);
    // return arguments[0].__proto__
  },
});

console.log(Object.getPrototypeOf(proxy));
console.log(Reflect.getPrototypeOf(proxy));
console.log(proxy.__proto__ === target.__proto__);
console.log(prototype.isPrototypeOf(proxy));
console.log(proxy instanceof Function);

Reflect.preventExtensions(target);

try {
  Object.getPrototypeOf(proxy);
} catch (error) {
  console.log(error.toString());
}
