/*
 * @Author: mangwu                                                             *
 * @File: 9.2.11 preventExtensions().js                                        *
 * @Date: 2022-09-28 14:53:30                                                  *
 * @LastModifiedDate: 2022-09-28 14:58:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 将对象设置为不可扩展对象的捕获器

const target = {};
const proxy = new Proxy(target, {
  preventExtensions(target) {
    Reflect.preventExtensions(target);
    return false;
  },
});

try {
  console.log(Object.preventExtensions(proxy));
} catch (error) {
  console.log(error.toString());
}
Object.preventExtensions(target);
try {
  console.log(Object.preventExtensions(proxy));
} catch (error) {
  console.log(error.toString());
}
