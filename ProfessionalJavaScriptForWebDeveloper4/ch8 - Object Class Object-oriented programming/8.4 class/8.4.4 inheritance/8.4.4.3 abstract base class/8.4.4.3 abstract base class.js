/*
 * @Author: mangwu                                                             *
 * @File: 8.4.4.3 abstract base class.js                                       *
 * @Date: 2022-09-22 10:29:37                                                  *
 * @LastModifiedDate: 2022-09-22 10:40:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 抽象基类

class Vehicle {
  constructor() {
    console.log(new.target);
    if (new.target === Vehicle) {
      throw new Error("抽象基类 Vehicle不能被实例化");
    }
  }
}
class Bus extends Vehicle {
  constructor() {
    super();
  }
}

const b = new Bus();
try {
  new Vehicle();
} catch (error) {
  console.log(error.toString());
}

class A {
  constructor() {
    if (new.target === A) {
      throw new Error("抽象基类A不能被实例化");
    }
    if (new.target === B) {
      if (!this.foo) {
        throw new Error("派生类B必须定义foo()");
      }
    }
    if (new.target === C) {
      if (!this.bar) {
        throw new Error("派生类C必须定义bar()");
      }
    }
  }
}
class B extends A {}
class C extends A {}

try {
  new B();
} catch (error) {
  console.log(error.message);
}
try {
  new C();
} catch (error) {
  console.log(error.message);
}
