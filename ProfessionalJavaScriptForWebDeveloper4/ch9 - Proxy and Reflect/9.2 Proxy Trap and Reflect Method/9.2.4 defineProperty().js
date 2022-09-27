/*
 * @Author: mangwu                                                             *
 * @File: 9.2.4 defineProperty().js                                            *
 * @Date: 2022-09-27 22:07:56                                                  *
 * @LastModifiedDate: 2022-09-27 22:26:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 定义属性

const target = {};
Object.defineProperties(target, {
  foo: {
    configurable: false,
    value: "foo",
    writable: true,
    enumerable: true,
  },
  bar: {
    configurable: true,
    value: "bar",
    writable: true,
    enumerable: true,
  },
});
const proxy = new Proxy(target, {
  defineProperty(target, prop, value) {
    if (prop == "b") {
      target[prop] = value.value;
      return false;
    }
    if (prop == "foo") {
      Reflect.defineProperty(target, prop, value);
      return true;
    }
    if (prop == "bar") {
      Reflect.defineProperty(target, prop, value);
      return false;
    }
  },
});

try {
  Object.defineProperty(proxy, "b", {
    value: 2,
  });
} catch (error) {
  console.log("添加了新属性但是返回false必然报错：", error.message);
}

console.log(proxy);

try {
  Object.defineProperty(proxy, "foo", {
    configurable: true,
    value: "foo2",
    writable: true,
    enumerable: true,
  });
} catch (error) {
  console.log(
    "为不可配置属性添加同名可配置属性(返回true，false都会报错)",
    error.message
  );
}
console.log(proxy);

try {
  Object.defineProperty(proxy, "bar", {
    configurable: false,
    value: "bar2",
    writable: true,
    enumerable: true,
  });
} catch (error) {
  console.log(
    "为可配置属性添加同名不可配置属性（返回false才报错）",
    error.message
  );
}
console.log(proxy);
