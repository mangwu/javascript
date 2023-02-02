/*
 * @Author: mangwu                                                             *
 * @File: 10.9.4 new.target.js                                                 *
 * @Date: 2022-10-08 22:45:14                                                  *
 * @LastModifiedDate: 2022-10-08 22:58:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// new.target伪属性引用通过new调用的函数本身

// 类的构造函数中的new.target引用类本身

// 创建抽象类
function Person(name, age) {
  if (new.target === Person) {
    throw new Error("抽象类不能被new操作符进行调用");
  }
  this.name = name;
  this.age = age;
}

function King(name, age, generation) {
  if (!new.target) {
    throw new Error("必须使用new操作符实例化King构造函数");
  }
  Person.call(this, name, age);
  this.generation = generation;
}

// 寄生式组合继承
function parasiticCompositeInheritance(subType, superType) {
  const prototype = Object.create(superType.prototype);
  prototype.sayName = function () {
    console.log(`${this.name} ${this.generation}`);
  };
  prototype.constructor = subType;
  subType.prototype = prototype;
}
parasiticCompositeInheritance(King, Person);
const king = new King("Henry", 26, "III");
king.sayName();

try {
  King("Henry", 26, "III");
} catch (error) {
  console.log(error.toString());
}

try {
  new Person("Henry", 26);
} catch (error) {
  console.log(error.toString());
}
