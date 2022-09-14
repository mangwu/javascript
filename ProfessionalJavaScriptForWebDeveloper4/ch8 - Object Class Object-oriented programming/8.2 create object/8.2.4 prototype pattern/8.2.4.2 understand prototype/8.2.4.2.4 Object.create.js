/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.2.4 Object.create.js                                           *
 * @Date: 2022-09-14 15:51:59                                                  *
 * @LastModifiedDate: 2022-09-14 15:56:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 基于原型创建新对象
function Person(age, name) {
  this.age = age;
  this.name = name;
}
Person.prototype.sayName = function () {
  console.log(this.name);
};
const person = new Person(22, "mangwu");

// 基于person创建新对象
const student = Object.create(person);
student.university = "wh university";
console.log(person);
console.log(student);
console.log(Object.getPrototypeOf(student) === person); // true
console.log(person.isPrototypeOf(student)); // true
