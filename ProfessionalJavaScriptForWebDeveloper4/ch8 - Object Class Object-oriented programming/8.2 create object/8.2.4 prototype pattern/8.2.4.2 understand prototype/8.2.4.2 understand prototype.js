/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.2 understand prototype.js                                      *
 * @Date: 2022-09-13 22:44:14                                                  *
 * @LastModifiedDate: 2022-09-13 22:59:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 理解原型
function Person() {}
// 声明构造函数后，就有了与之关联的原型对象
console.log(typeof Person.prototype);
console.log(Person.prototype);

// Person关联的原型对象本身具有constructor属性引用构造函数，二者循环引用
console.log(Person.prototype.constructor === Person);
// 和Person一样，内置的Object对象也有关联的原型对象，且二者也循环引用
console.log(Object.prototype.constructor === Object);

// Person关联的原型对象的[[Prototype]]特性指针指向Object关联的原型对象
// 所有正常的原型链都会终止于Object构造函数关联的原型对象，因为它是基类
// 而Object 原型对象的[[Prototype]]是null
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Person.prototype.__proto__.constructor === Object);
console.log(Person.prototype.__proto__.__proto__ === null);

let person1 = new Person();
// 构造函数，实例，原型对象是三个完全不同的对象，实例通过[[Prototype]]关联原型对象
console.log(person1.__proto__ === Person.prototype);
console.log(person1.__proto__.constructor === Person);

let person2 = new Person();
// 同一个构造函数的实例共享同一个原型对象
console.log(person1.__proto__ === person2.__proto__);

// instanceof通过检查实例的原型链是否包含指定构造函数的原型来判断是否是该构造函数的实例
// 通过[[Prototype]]特性获取原型对象，原型对象中的constructor属性是判断依据
console.log(person1 instanceof Person);
console.log(person1 instanceof Object);
console.log(Person.prototype instanceof Object);
