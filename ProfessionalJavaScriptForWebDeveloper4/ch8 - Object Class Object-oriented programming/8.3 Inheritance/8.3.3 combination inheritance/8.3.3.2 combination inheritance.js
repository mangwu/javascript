/*
 * @Author: mangwu                                                             *
 * @File: 8.3.3.2 combination inheritance.js                                   *
 * @Date: 2022-09-18 17:18:54                                                  *
 * @LastModifiedDate: 2022-09-18 17:28:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 实现组合继承
// 结合盗用构造函数和原型链

function SuperType(name) {
  this.colors = ["red", "green", "blue"];
  this.name = name;
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

SubType.prototype = new SuperType();

SubType.prototype.sayAge = function () {
  console.log(this.age);
};

const subInstance = new SubType("mangwu", 22);
console.log(subInstance);
subInstance.colors.push("black");
console.log(subInstance.colors);
subInstance.sayName();
subInstance.sayAge();

const subInstance2 = new SubType("wumang", 23);
console.log(subInstance2.colors);
subInstance2.sayAge();
subInstance2.sayName();
