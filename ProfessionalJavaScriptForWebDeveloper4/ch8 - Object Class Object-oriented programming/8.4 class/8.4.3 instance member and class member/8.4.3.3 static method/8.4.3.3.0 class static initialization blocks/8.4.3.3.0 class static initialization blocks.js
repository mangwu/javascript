/*
 * @Author: mangwu                                                             *
 * @File: 8.4.3.3.0 class static initialization blocks.js                      *
 * @Date: 2022-09-21 16:04:35                                                  *
 * @LastModifiedDate: 2022-09-21 17:25:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 类静态初始化块

class ClassWithStaticInitalBlock {
  static {
    this.staticP1 = "property1";
    this.staticP2 = "property2";
    this.method = () => console.log(this.staticP1);
  }
}

console.log(ClassWithStaticInitalBlock.staticP2);
console.log(ClassWithStaticInitalBlock.staticP1);
ClassWithStaticInitalBlock.method();

// 执行顺序

class Test {
  constructor() {}
  static method1() {
    console.log("method1");
  }
  static property1 = "property1";
  method() {
    console.log("method");
  }
  static {
    this.property2 = this.property1;
    this.method2 = () => console.log(this.property2);
  }
  static {
    this.property3 = this.property3;
  }
}

// 局部作用域
var a = 2;
var b = 3;
class Test2 {
  static {
    a = 4;
    b = 4;
    var a = 3; // 静态块的局部变量
  }
}
console.log(a, b); // 2 4

// this和super
class A {
  static fieldA = "A field";
}
class B extends A {
  static method() {
    console.log("B method");
  }
  static {
    console.log(super.fieldA);
    this.method();
  }
}

let getDPrivateField;

class D {
  #privateField;
  constructor(v) {
    this.#privateField = v;
  }
  static {
    getDPrivateField = (d) => d.#privateField;
  }
}
console.log(getDPrivateField(new D("private")));

class E {
  #privateField;
  constructor(v) {
    this.#privateField = v;
  }
  static getDPrivateField(d) {
    return d.#privateField;
  }
}
console.log(E.getDPrivateField(new E("private")));

// ES13前的静态初始化
class F {
  static createStaticProperty() {
    this.staticProperty1 = "property1";
    this.staticProperty2 = "property2";
    this.staticProperty3 = "property3";
  }
}
F.createStaticProperty()
