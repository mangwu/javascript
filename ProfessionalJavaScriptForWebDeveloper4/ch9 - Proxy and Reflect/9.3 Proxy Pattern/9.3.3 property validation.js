/*
 * @Author: mangwu                                                             *
 * @File: 9.3.3 property valitation.js                                         *
 * @Date: 2022-09-28 16:26:14                                                  *
 * @LastModifiedDate: 2022-09-28 16:31:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 属性验证 通过属性值决定是否赋值

const person = {
  age: 22,
};
const proxy = new Proxy(person, {
  set() {
    if (typeof arguments[2] !== "number") {
      return false;
    }
    if (arguments[2] < 0 || arguments[2] > 100) {
      return false;
    }
    return Reflect.set(...arguments);
  },
});
console.log(Reflect.set(proxy, "age", "23", proxy)); // 赋值失败
console.log(Reflect.set(proxy, "age", 123, proxy)); // 赋值失败
console.log(Reflect.set(proxy, "age", -1, proxy)); // 赋值失败
console.log(Reflect.set(proxy, "age", 23, proxy)); // 赋值成功
