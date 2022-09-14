/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.3.2 .js                                                        *
 * @Date: 2022-09-14 16:35:14                                                  *
 * @LastModifiedDate: 2022-09-14 17:22:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 遮蔽原型属性
function Person(age, name) {
  this.age = age;
  this.name = name;
}
Person.prototype.sayName = function () {
  console.log(this.name);
};

const person1 = new Person(22, "mangwu");
const person2 = new Person(23, "wumang");
person1.sayName();
person2.sayName();

person1.__proto__.sayName = function () {
  console.log(`I'${this.name} and I'm ${this.age} years old.`);
};

person1.sayName();
person2.sayName();
console.log("---------");
// 遮蔽
person1.constructor = Object;
console.log(person2.constructor);
console.log(person1.constructor);
console.log(person1);
console.log(person2);

delete person1.constructor;
console.log(person1);
console.log(person1.constructor);

// 删除第一个原型对象上的constructor
delete person1.__proto__.constructor;
console.log(person1);
console.log(person1.constructor);
console.log(person1 instanceof Person);
