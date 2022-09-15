/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.5.1 Object.keys.js                                             *
 * @Date: 2022-09-15 14:58:30                                                  *
 * @LastModifiedDate: 2022-09-15 15:10:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 获取对象的自有可枚举非符号属性
let sym = Symbol("123");
function Person(age, name) {
  this.age = age;
  this.name = name;
  this[1] = 3;
  this[sym] = "123";
  this.sayName = function () {
    console.log(this.name);
  };
}
Person.prototype.sayName = function () {
  console.log(this.name);
};

const person = new Person(22, "mangwu");
Object.defineProperties(Object.prototype, {
  constructor: {
    enumerable: true,
    configurable: true,
  },
  hasOwnProperty: {
    enumerable: true,
    configurable: true,
  },
});
console.log(sym in person);
for (const key of Object.keys(person)) {
  console.log(key);
}
console.log(Object.keys(sym));
console.log(Object.keys("123"));
console.log(Object.keys(123));
