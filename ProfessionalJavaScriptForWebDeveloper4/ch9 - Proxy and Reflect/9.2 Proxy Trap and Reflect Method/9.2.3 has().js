/*
 * @Author: mangwu                                                             *
 * @File: 9.2.3 has().js                                                       *
 * @Date: 2022-09-27 21:40:59                                                  *
 * @LastModifiedDate: 2022-09-27 21:42:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// has() 属性是否存在于对象上

const target = { foo: "bar" };
const proxy = new Proxy(target, {
  has() {
    return true;
  },
});
Reflect.preventExtensions(target); // 不可扩展
console.log("foo" in proxy);
console.log("bar" in proxy);

