/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.4.2 for...in .js                                               *
 * @Date: 2022-09-14 23:58:33                                                  *
 * @LastModifiedDate: 2022-09-15 14:52:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// for in 获取对象上可枚举的属性，可以获取原型链上的可枚举属性

function Person(age, name) {
  this.age = age;
  this.name = name;
  this[1] = 3;
}
Person.prototype.sayName = function () {
  console.log(this.name);
};

const person = new Person(22, "mangwu");
let sym = Symbol("123");
Object.defineProperties(Object.prototype, {
  constructor: {
    enumerable: true,
    configurable: true,
  },
  [sym]: {
    value: "123",
    enumerable: true,
    configurable: true,
  },
  hasOwnProperty: {
    enumerable: true,
    configurable: true,
  },
});
console.log(sym in person);
for (const key in person) {
  console.log(key,typeof key);
  if (key === "hasOwnProperty") {
    console.log(person[key]("name"));
  }
}

Person.prototype.hasOwnProperty = function () {
  return false;
};
for (const key in person) {
  console.log(key);
  if (key === "hasOwnProperty") {
    console.log(person[key]("name"));
  }
}
console.log("-----------");
for (const key of Object.keys(person)) {
  console.log(key);
}
