/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.8.2 dynamic prototye.js                                        *
 * @Date: 2022-09-16 11:08:47                                                  *
 * @LastModifiedDate: 2022-09-16 13:44:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 原型的动态性
function Person() {}
// 此时person没有从Person的原型上继承任何方法
const person = new Person();

try {
  person.sayHi();
} catch (error) {
  console.log(error.message);
}

Person.prototype.sayHi = function () {
  console.log("Hi");
};
person.sayHi();

function Person() {}
let friend = new Person();

Person.prototype = {
  constructor: Person,
  name: "mangwu",
  age: 22,
  sayName() {
    console.log(this.name);
  },
};

console.log(friend.name);
try {
  friend.sayName();
} catch (error) {
  console.log(error.message);
}
