/*
 * @Author: mangwu                                                             *
 * @File: 8.2.5 8.2.5 problem of constructor function.js                       *
 * @Date: 2022-09-13 17:33:48                                                  *
 * @LastModifiedDate: 2022-09-13 20:15:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 构造函数的问题
function Person(age, name) {
  this.age = age;
  this.name = name;
  this.sayName = new Function("console.log(this.name)");
}
const person = new Person(23, "mangwu");
const person2 = new Person(12, " am");
console.log(person.sayName === person2.sayName); // 在下面的方法定义之前会返回false
console.log(person);
person.sayName();

// 将方法转移到对象外部
function sayName() {
  console.log(this.name);
}
function Person(age, name) {
  this.age = age;
  this.name = name;
  this.sayName = sayName;
}
const p2 = new Person(23, "mangwu");
const p3 = new Person(22, "wumang");
console.log(p2.sayName === p3.sayName);

p2.sayName();
p3.sayName();
