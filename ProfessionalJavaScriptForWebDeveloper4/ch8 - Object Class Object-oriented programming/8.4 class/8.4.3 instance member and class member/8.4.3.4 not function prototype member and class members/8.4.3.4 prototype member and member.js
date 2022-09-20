/*
 * @Author: mangwu                                                             *
 * @File: 8.4.3.4 prototype member and member.js                               *
 * @Date: 2022-09-20 22:50:11                                                  *
 * @LastModifiedDate: 2022-09-20 22:54:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 非函数的 类成员和原型成员

class Person {
  sayName() {
    console.log(`${Person.greeting}${this.name}`);
  }
}
const person = new Person();
person.sayName();
// 定义类成员
Person.greeting = "My name is ";

// 定义原型成员
Person.prototype.name = "mangwu";
person.sayName();
