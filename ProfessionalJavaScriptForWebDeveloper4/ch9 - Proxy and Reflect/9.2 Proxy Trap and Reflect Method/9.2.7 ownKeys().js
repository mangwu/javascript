/*
 * @Author: mangwu                                                             *
 * @File: 9.2.7 ownKeys().js                                                   *
 * @Date: 2022-09-28 11:11:46                                                  *
 * @LastModifiedDate: 2022-09-28 11:26:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const target = {};
Object.defineProperties(target, {
  a: {
    value: "a",
    enumerable: true,
    configurable: false,
  },
});
const proxy = new Proxy(target, {
  ownKeys(target) {
    return ["c"];
  },
});
try {
  Reflect.ownKeys(proxy);
} catch (error) {
  console.log("必须包含不可配置自有属性", error.toString());
}
Reflect.preventExtensions(target);

const proxy2 = new Proxy(target, {
  ownKeys(target) {
    return ["a", "c"];
  },
});
try {
  Reflect.ownKeys(proxy2);
} catch (error) {
  console.log("必须准确包含自有属性键值", error.toString());
}
