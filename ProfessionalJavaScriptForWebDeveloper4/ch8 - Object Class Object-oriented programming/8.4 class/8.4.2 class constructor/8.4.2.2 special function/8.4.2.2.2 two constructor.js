/*
 * @Author: mangwu                                                             *
 * @File: 8.4.2.2.2 two constructor.js                                         *
 * @Date: 2022-09-19 22:17:40                                                  *
 * @LastModifiedDate: 2022-09-19 22:25:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 两个constructor
// 一个是定义在类中的构造函数constructor
// 一个是定义在类的prototype属性中的constructor属性，指向类本身
class Person {}

let p1 = new Person();
console.log(p1.constructor === Person);
console.log(p1 instanceof Person);
console.log(p1 instanceof Person.constructor);

let p2 = new Person.constructor();
console.log(p2.constructor === Person);
console.log(p2 instanceof Person);
console.log(p2 instanceof Person.constructor);

console.log(p2.constructor === Person.constructor);
console.log(p2.__proto__ === Person.__proto__.constructor.prototype);
