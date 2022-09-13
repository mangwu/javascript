/*
 * @Author: mangwu                                                             *
 * @File: 8.2.3.1.js                                                           *
 * @Date: 2022-09-13 20:37:52                                                  *
 * @LastModifiedDate: 2022-09-13 20:45:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 每个函数都有一个prototype属性
// 这个属性时函数的原型
// 在原型上定义的属性和方法可以被对象实例共享
function Person() {}
Person.prototype.age = 22;
Person.prototype.name = "mangwu";
Person.prototype.sayName = function () {
  console.log(this.name);
};
const p = new Person();
console.log(p, p.__proto__);
p.sayName()
