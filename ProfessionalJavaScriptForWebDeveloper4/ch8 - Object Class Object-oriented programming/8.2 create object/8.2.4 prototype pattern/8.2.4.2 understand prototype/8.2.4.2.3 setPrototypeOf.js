/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.2.3 setPrototype.js                                            *
 * @Date: 2022-09-14 10:53:29                                                  *
 * @LastModifiedDate: 2022-09-14 11:22:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 设置对象的原型链
function Person(age, name) {
  this.age = age;
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

const person1 = new Person(23, "wumang");
const person2 = new Person(22, "mangwu");

console.log(person1);
console.log(person2);
Object.setPrototypeOf(person1, person2);
console.log(person1);
console.log(person2);
console.log(person2.isPrototypeOf(person1));
console.log(person1.__proto__ instanceof Person);
console.log(person1 instanceof Person);

