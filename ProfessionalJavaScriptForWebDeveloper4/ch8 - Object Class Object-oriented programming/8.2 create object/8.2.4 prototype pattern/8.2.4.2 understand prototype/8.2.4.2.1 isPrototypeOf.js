/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.2.1 isPrototypeOf.js                                           *
 * @Date: 2022-09-14 09:43:13                                                  *
 * @LastModifiedDate: 2022-09-14 09:49:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 检查对象是否存在于另一个对象的原项链上
function Person() {}

class Student extends Person {}

const person = new Person();
const student = new Student();
console.log(person.__proto__.isPrototypeOf(student));
console.log(Person.prototype.isPrototypeOf(student));
console.log(Student.prototype.isPrototypeOf(student));
console.log(student.__proto__.isPrototypeOf(person));
console.log(Student.prototype.__proto__.isPrototypeOf(person));
console.log(Person.prototype.isPrototypeOf(Student.prototype));
