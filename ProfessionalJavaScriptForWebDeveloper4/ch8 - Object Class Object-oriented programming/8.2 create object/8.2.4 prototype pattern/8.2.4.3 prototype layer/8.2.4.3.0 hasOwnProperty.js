/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.3.0 hasOwnProperty.js                                          *
 * @Date: 2022-09-14 20:38:43                                                  *
 * @LastModifiedDate: 2022-09-14 21:03:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 检查对象是否存在自有属性
// in会检查原型链中的属性

const obj = {};
Object.defineProperties(obj, {
  name: {
    value: "mangwu",
    enumerable: true,
  },
  id: {
    value: 1,
  },
});
console.log("name" in obj);
console.log("id" in obj);
console.log("hasOwnProperty" in obj);
console.log(obj.hasOwnProperty("name"));
console.log(obj.hasOwnProperty("id"));
console.log(obj.hasOwnProperty("hasOwnProperty"));
console.log(Object.getOwnPropertyDescriptors(obj.__proto__));
Object.defineProperties(obj.__proto__, {
  toLocaleString: {
    writable: true,
    enumerable: true,
    configurable: true,
  },
  toString: {
    writable: true,
    enumerable: true,
    configurable: true,
  },
  isPrototypeOf: {
    writable: true,
    enumerable: true,
    configurable: true,
  },
  constructor: {
    writable: true,
    enumerable: true,
    configurable: true,
  },
});
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`${key}是自有的可枚举属性`);
  } else {
    console.log(`${key}是原型链上的可枚举属性`);
  }
}
console.log(obj.hasOwnProperty("name"));
Object.defineProperty(obj, "hasOwnProperty", {
  value: function () {
    return false;
  },
  enumerable: true,
  configurable: true,
  writable: false,
});
console.log(obj);
console.log(obj.hasOwnProperty("name"));
console.log(Object.hasOwn(obj, "name"));

const obj2 = Object.create(null, {
  name: {
    value: "mangwu",
    enumerable: true,
  },
});
console.log(obj2);
try {
  obj2.hasOwnProperty("name");
} catch (error) {
  console.log(error.message);
}
console.log(Object.hasOwn(obj2, "name"));
