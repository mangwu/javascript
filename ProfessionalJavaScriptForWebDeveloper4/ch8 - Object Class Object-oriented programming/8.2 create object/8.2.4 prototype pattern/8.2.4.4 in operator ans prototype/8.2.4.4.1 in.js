/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.4.1 in.js                                                      *
 * @Date: 2022-09-14 21:09:15                                                  *
 * @LastModifiedDate: 2022-09-14 23:51:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const obj = {
  name_: "mangwu",
  get name() {
    return this.name_;
  },
  set name(val) {
    this.name_ = val;
  },
};
Object.defineProperties(obj, {
  // 不可枚举，不可配置
  age_: {
    value: 22,
  },
  // 不可枚举不可配置的访问器属性
  age: {
    get() {
      return this.age_;
    },
  },
});
// 可配置可枚举的数据属性
Object.prototype.sayName = function () {
  console.log(this.name);
};

Object.defineProperties(obj.__proto__, {
  // 不可配置可枚举的原型链上的访问器属性
  constructor_: {
    get() {
      return this.constructor;
    },
    enumerable: true,
    configurable: true,
  },
});

console.log("name_" in obj);
console.log("age_" in obj);
console.log("name" in obj);
console.log("age" in obj);
console.log("age" in obj);
console.log("constructor_" in obj);
console.log("constructor" in obj);

function hasPrototypeProperty(obj, prop) {
  return !obj.hasOwnProperty(prop) && prop in obj;
}

console.log(hasPrototypeProperty(obj, "constructor_"));
console.log(hasPrototypeProperty(obj, "name"));
console.log(hasPrototypeProperty(obj, "age"));
console.log(hasPrototypeProperty(obj, "hasOwnProperty"));
