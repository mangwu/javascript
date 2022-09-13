/*
 * @Author: mangwu                                                             *
 * @File: 8.2.3.1 basic grammar.js                                             *
 * @Date: 2022-09-13 16:00:43                                                  *
 * @LastModifiedDate: 2022-09-13 16:41:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 构造函数模式
function Person(age, name, job) {
  this.age = age;
  this.name = name;
  this.job = job;
  this.sayName = function () {
    console.log(this.name);
  };
}
Person.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`);
};
const person1 = new Person(23, "mangwu", "Software Engineer");
const person2 = new Person(22, "wumang", "Software Engineer");

console.log(person1.constructor === Person);
console.log(person2.constructor === Person);

console.log(person1 instanceof Person);
console.log(person1 instanceof Object);

let Cat = function (name = "cat") {
  this.name = name;
  this.age = 2;
  this.sayMiao = function () {
    console.log("喵喵，喵！");
  };
};
const cat = new Cat;
console.log(cat);
cat.sayMiao()
