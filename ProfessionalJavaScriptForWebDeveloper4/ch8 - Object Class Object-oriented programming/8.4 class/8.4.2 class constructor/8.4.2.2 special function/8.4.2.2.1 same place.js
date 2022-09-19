/*
 * @Author: mangwu                                                             *
 * @File: 8.4.2.2.1 same.js                                                    *
 * @Date: 2022-09-19 20:43:59                                                  *
 * @LastModifiedDate: 2022-09-19 20:54:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 类与构造函数相同的地方
// 1. 类也具有prototype属性，并且这个原型也有一个constructor指向自身
class Person {}
console.log(Person.prototype); // {} 原型的属性是不可枚举的
console.log(Person === Person.prototype.constructor); // true

// 2. 与普通构造函数一样可以使用instanceof 检查构造函数的原型是否存在于实例原型链中
let p = new Person();
console.log(p instanceof Person);

// 3. 类本身与普通构造函数具有一样的行为，使用new调用类时类就会被当作构造函数
console.log(p.constructor === Person);
console.log(p.__proto__ === Person.prototype);
console.log(p.__proto__.constructor === Person.prototype.constructor);

// 4. 类在和其他函数一样，可以使用类表达式声明后立即调用
let foo = new (class Bar {
  constructor(str) {
    console.log(str);
    this.str = str;
  }
})("bar");
console.log(foo);