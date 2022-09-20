/*
 * @Author: mangwu                                                             *
 * @File: 8.4.3.3 static method.js                                             *
 * @Date: 2022-09-20 22:20:03                                                  *
 * @LastModifiedDate: 2022-09-20 22:46:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 静态方法
class Person {
  constructor() {
    this.locate = () => {
      console.log("instance", this);
    };
  }
  locate() {
    console.log("prototype", this);
  }
  static locate() {
    console.log("class", this);
  }
}
const person = new Person();
person.locate();
person.__proto__.locate();
Person.locate();

// 静态类方法作为工厂函数

class Person2 {
  constructor(age) {
    this.age = age;
  }
  static createPerson() {
    return new Person2(Math.floor(Math.random() * 100));
  }
}
const p1 = Person2.createPerson();
const p2 = Person2.createPerson();
console.log(p1);
console.log(p2);

