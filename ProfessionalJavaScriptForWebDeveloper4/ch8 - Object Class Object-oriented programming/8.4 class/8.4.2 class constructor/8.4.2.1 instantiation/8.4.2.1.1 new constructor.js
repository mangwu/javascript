/*
 * @Author: mangwu                                                             *
 * @File: 8.4.2.1.js                                                           *
 * @Date: 2022-09-19 16:47:34                                                  *
 * @LastModifiedDate: 2022-09-19 16:56:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// new 类意味着new 类的构造函数

// 1. 简单例子
class Person {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
}

const person = new Person(22, "mangwu");
console.log(person.__proto__ === Person.prototype);
console.log(person.constructor === Person.prototype.constructor);
console.log(person.constructor);
