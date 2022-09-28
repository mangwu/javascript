/*
 * @Author: mangwu                                                             *
 * @File: 9.2.6 deleteProperty().js                                            *
 * @Date: 2022-09-28 10:52:01                                                  *
 * @LastModifiedDate: 2022-09-28 10:59:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 删除对象属性的捕获器

const target = {};

Object.defineProperties(target, {
  foo: {
    value: "foo",
    enumerable: true,
    writable: true,
    configurable: false,
  },
  bar: {
    value: "bar",
    enumerable: true,
    writable: true,
    configurable: true,
  },
});

const proxy = new Proxy(target, {
  deleteProperty(target, prop) {
    if (prop == "foo") {
      // 肯定是删除失败的因为不可配置
      delete target[prop];
      return false;
    }
    if (prop == "bar") {
      // 肯定能删除成功
      delete target[prop];
      // 但是返回false
      return false;
    }
    // 删除其它没有的属性返回true
    return true;
  },
});

try {
  delete proxy.foo;
} catch (error) {
  console.log("删除不可配置属性foo返回false，结果报错?", error.toString());
}
console.log(proxy);
try {
  delete proxy.bar;
} catch (error) {
  console.log("删除可配置属性bar返回false，结果报错?", error.toString());
}
console.log(proxy);

try {
  delete proxy.a;
} catch (error) {
  console.log("删除不存在属性返回true，结果报错?", error.toString());
}
console.log(proxy);
