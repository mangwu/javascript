/*
 * @Author: mangwu                                                             *
 * @File: 8.3.6 parasitic combination inheritance.js                           *
 * @Date: 2022-09-18 22:01:37                                                  *
 * @LastModifiedDate: 2022-09-18 22:15:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 寄生式组合继承

// 基本模式
function inheritPrototype(SubType, SuperType) {
  let prototype = Object.create(SuperType.prototype); // 创建原型对象
  prototype.constructor = SubType; // 增强对象
  SubType.prototype = prototype; // 赋值对象
}

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
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function () {
  console.log(this.age);
};
