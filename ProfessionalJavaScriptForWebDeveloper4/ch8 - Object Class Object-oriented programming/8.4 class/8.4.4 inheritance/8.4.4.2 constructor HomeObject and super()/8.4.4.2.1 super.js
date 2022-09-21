/*
 * @Author: mangwu                                                             *
 * @File: 8.4.4.2 super.js                                                     *
 * @Date: 2022-09-21 14:36:47                                                  *
 * @LastModifiedDate: 2022-09-21 23:53:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class Vehicle {
  constructor() {
    this.hasEngine = true;
  }
}
Vehicle.prototype.speed = 0;

class Bus extends Vehicle {
  constructor() {
    super(); // 相当于super.constructor
    console.log(this);
  }
  static logSuper() {
    console.log(super.constructor === Vehicle.constructor);
    console.log(super.prototype === Vehicle.prototype);
  }
}
Bus.logSuper();
const bus = new Bus();

// 作为父类的函数被调用
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.height * this.width;
  }
  sayName() {
    console.log(this.name);
  }
}
Rectangle.prototype.name = "Rectangle";

class Square extends Rectangle {
  constructor(length) {
    console.log("super必须在this访问前被调用");
    super(length, length); // 必须在使用this前被调用
    this.length = length;
  }
}
Square.prototype.name = "Square";

const square = new Square(6);
square.sayName();
console.log(square.area);

// 在子类的静态方法中调用超累的静态方法

class Triangle {
  static logSides() {
    return "我有三条边";
  }
}
class EquilateralTriangle extends Triangle {
  static logDescription() {
    console.log(`${super.logSides()}, 并且它们都相等`);
  }
}
EquilateralTriangle.logDescription();

// 在字段初始化时进行访问
class Base {
  static staticField = 100;
  instancePrototypeMethod() {
    return 1000;
  }
}
Base.prototype.instancePropertypeProperty = 999;
class Extended extends Base {
  extendedField = super.instancePrototypeMethod();
  constructor() {
    super();
    this.ownProperty = super.instancePropertypeProperty;
  }
  static extendedStaticField = super.staticField;
  static staticMethod() {
    console.log(super.staticField);
  }
}

console.log(Extended.extendedStaticField);
Extended.staticMethod();

const extened = new Extended();
console.log(extened);

// 不能删除super的属性
class Base2 {
  foo() {}
}

class Derved extends Base2 {
  delete() {
    delete super.foo;
  }
}
try {
  new Derved().delete();
} catch (error) {
  console.log(error.toString());
}

// 用在对象字面量中
const obj1 = {
  method1() {
    console.log("method1");
  },
};

const obj2 = {
  method2() {
    super.method1();
  },
};
obj2.__proto__ = obj1;
obj2.method2();

// 解绑和重绑不会影响super的引用
class A {
  aGetX() {
    return 1;
  }
}
class B extends A {
  getX() {
    return super.aGetX();
  }
}

const b = new B();
console.log(b.getX());
const { getX } = b;
console.log(getX()); // 在全局作用域中调用，this就是Global

const parent1 = { prop: 1 };
const parent2 = { prop: 2 };
const child = {
  getParentProp() {
    console.log(super.prop);
  },
};
Object.setPrototypeOf(child, parent1);
child.getParentProp();

const getParentProp = child.getParentProp;
getParentProp();

const anotherChild = { __proto__: parent2, getParentProp };
anotherChild.getParentProp(); // 绑定了anotherChild且原型为parent2

class C {
  aGetX() {
    return 2;
  }
}
Object.setPrototypeOf(B.prototype, C.prototype);
console.log(getX());

Object.setPrototypeOf(child, parent2);
getParentProp();

// 设置super中属性的值

class D {}
class E extends D {
  setX(val) {
    super.x = val;
  }
}
const e = new E();
e.setX(2);
Object.defineProperties(D.prototype, {
  x: {
    enumerable: true,
    configurable: true,
    set(val) {
      this.val = val;
    },
    get() {
      return 0;
    },
  },
});
e.setX(3);
