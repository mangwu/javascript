/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.8.1 rewrite prototype.js                                       *
 * @Date: 2022-09-16 10:29:47                                                  *
 * @LastModifiedDate: 2022-09-16 10:57:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 重写原型
function Person() {}
console.log(Person.prototype);
Person.prototype = {
  name: "mangwu",
  age: 123,
  job: "Software Engineer",
  sayName: function () {
    console.log(this.name);
  },
};
console.log(Person.prototype);
console.log(Person.prototype.constructor === Person);
console.log(Person.prototype.constructor === Object);
const person = new Person();
console.log(person instanceof Person);

Person.prototype = {
  constructor: Person,
  name: "mangwu",
  age: 123,
  job: "Software Engineer",
  sayName: function () {
    console.log(this.name);
  },
};
const person2 = new Person();
console.log(Person.prototype.constructor === Person);
console.log(Person.prototype.constructor === Object);
console.log(person instanceof Person);
console.log(person2 instanceof Person);

Person.prototype = {
  name: "mangwu",
  age: 123,
  job: "Software Engineer",
  sayName: function () {
    console.log(this.name);
  },
};
// 恢复constructor
Object.defineProperty(Person.prototype, "constrcutor", {
  value: Person,
  enumerable: false,
  writable: true,
  configurable: true,
});
