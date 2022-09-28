/*
 * @Author: mangwu                                                             *
 * @File: 9.2.10 isExtensible().js                                             *
 * @Date: 2022-09-28 14:33:44                                                  *
 * @LastModifiedDate: 2022-09-28 14:39:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 判断对象是否可扩展的捕获器
const target = {};
const proxy = new Proxy(target, {
  isExtensible(target) {
    console.log("isExtensible");
    return !Reflect.isExtensible(target);
  },
});

try {
  console.log(Object.isExtensible(proxy));
} catch (error) {
  console.log(error.toString());
}
Object.preventExtensions(target);
try {
  console.log(Object.isExtensible(proxy));
} catch (error) {
  console.log(error.toString());
}
