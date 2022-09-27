/*
 * @Author: mangwu                                                             *
 * @File: 9.2.5 .js                                                            *
 * @Date: 2022-09-27 22:43:38                                                  *
 * @LastModifiedDate: 2022-09-27 22:58:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 获取属性的属性描述符的捕获器

const target = {};
Object.defineProperties(target, {
  foo: {
    value: "foo",
    configurable: false,
    enumerable: true,
    writable: true,
  },
  bar: {
    value: "bar",
    configurable: true,
    enumerable: true,
    writable: true,
  },
  a: {
    value: "a",
    configurable: true,
    enumerable: true,
    writable: true,
  },
});
const proxy = new Proxy(target, {
  getOwnPropertyDescriptor(target, prop) {
    if (prop == "foo") {
      return undefined;
    }
    if (prop == "bar") {
      return {
        value: "bar",
        configurable: false,
        enumerable: true,
        writable: true,
      };
    }
    if (prop == "a") {
      return undefined;
    }
    if (prop == "b") {
      return {
        value: "bar",
        configurable: false,
        enumerable: true,
        writable: true,
      };
    }
    if (prop == "c") {
      return {
        value: "bar",
        configurable: false,
        enumerable: true,
        writable: true,
      };
    }
  },
});
try {
  Object.getOwnPropertyDescriptor(proxy, "foo");
} catch (error) {
  console.log("存在不可配置，必须返回存在的对象,结果返回undefined");
}

try {
  Object.getOwnPropertyDescriptor(proxy, "bar");
} catch (error) {
  console.log("存在可配置，必须返回可配置的对象，结果返回不可配置对象");
}
try {
  Object.getOwnPropertyDescriptor(proxy, "c");
} catch (error) {
  console.log("不存在target，不能返回可配置对象，结果返回不可配置对象");
}
Object.preventExtensions(target);

try {
  Object.getOwnPropertyDescriptor(proxy, "a");
} catch (error) {
  console.log("存在target不可扩展，必须返回存在的对象，结果返回undefined");
}

try {
  Object.getOwnPropertyDescriptor(proxy, "b");
} catch (error) {
  console.log("不存在target不可扩展，必须返回undefined，结果返回存在对象");
}
