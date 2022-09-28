/*
 * @Author: mangwu                                                             *
 * @File: 9.2.9 setPrototypeOf().js                                            *
 * @Date: 2022-09-28 14:13:33                                                  *
 * @LastModifiedDate: 2022-09-28 14:22:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const target = {};
const proxy = new Proxy(target, {
  setPrototypeOf(target, prototype) {
    console.log("setPrototypeOf");
    return Reflect.setPrototypeOf(...arguments);
  },
});
Object.setPrototypeOf(proxy, Function.prototype);
Reflect.setPrototypeOf(proxy, Object.prototype);
proxy.__proto__ = Function.prototype;
console.log(proxy.__proto__ === Object.prototype);

Reflect.preventExtensions(target);

try {
  Reflect.setPrototypeOf(proxy, null);
} catch (error) {
  console.log(error.message);
}
console.log(proxy.__proto__);
