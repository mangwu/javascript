/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4 constructor function is a function.js                          *
 * @Date: 2022-09-13 16:46:24                                                  *
 * @LastModifiedDate: 2022-09-13 17:25:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 构造函数本身也是一个函数
function Person(age, name) {
  this.age = age;
  this.name = name;
  this.sayName = function () {
    console.log(this.name);
  };
}
const person = new Person(22, "mangwu");
Person(22, "mangwu");
console.log(global);
global.sayName();

const obj = {};
Person.call(obj, 24, "wumang");
console.log(obj);
obj.sayName()