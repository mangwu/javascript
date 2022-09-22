/*
 * @Author: mangwu                                                             *
 * @File: 8.4.4.3.0 new target.js                                              *
 * @Date: 2022-09-22 11:03:54                                                  *
 * @LastModifiedDate: 2022-09-22 11:17:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function SuperType(name) {
  console.log(new.target);
  if (new.target === SuperType) {
    throw new Error("抽象构造函数SuperType不能实例化");
  }
  this.name = name;
}

function SubType(name, age) {
  // 盗用构造函数
  SuperType.call(this, name);
  this.age = age;
}
function parasiticInheritance(SubType, SuperType) {
  const prototype = Object.create(SuperType.prototype);
  prototype.constructor = SubType;
  SubType.prototype = prototype;
}
parasiticInheritance(SubType, SuperType);

const sub = new SubType("mangwu", 22); // new.target是undefined
console.log(sub);

// 类不同的表示
class A {
  constructor() {
    console.log(new.target);
  }
}
class B extends A {}

new B();
new A();
