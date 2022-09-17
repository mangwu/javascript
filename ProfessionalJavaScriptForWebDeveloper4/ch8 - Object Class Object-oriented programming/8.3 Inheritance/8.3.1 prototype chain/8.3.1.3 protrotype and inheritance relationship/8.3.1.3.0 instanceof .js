/*
 * @Author: mangwu                                                             *
 * @File: 8.3.1.3.0 instanceof .js                                             *
 * @Date: 2022-09-17 16:21:20                                                  *
 * @LastModifiedDate: 2022-09-17 17:28:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// instanceof
function A() {}
function B() {}
function C() {}

const a1 = new A();
console.log(a1 instanceof A); // true
const b = new B();
A.prototype = b;
console.log(a1 instanceof A); // false
console.log(a1 instanceof B); // false

const a2 = new A();
console.log(a2 instanceof A); // true
console.log(a2 instanceof B); // true

Object.setPrototypeOf(b, C.prototype);
console.log(a2 instanceof A); // true
console.log(a2 instanceof B); // false
console.log(a2 instanceof C); // true

class Forgeable {
  static isInstanceFlag = Symbol("isInstanceFlag");
  static [Symbol.hasInstance](obj) {
    // 如果对象中有指定的符号属性就方法true
    return Forgeable.isInstanceFlag in obj;
  }
}
// 构造一个包括符号属性的普通对象和一个Forgeable实例
const normal = { [Forgeable.isInstanceFlag]: true };
const forgeable = new Forgeable();
console.log(normal instanceof Forgeable); // true
console.log(forgeable instanceof Forgeable); // false

// bound function

class Base {}

const BoundBase = Base.bind(null, 1, 2, 3);
console.log(new Base() instanceof BoundBase); // true

// 纯净对象
console.log(null instanceof Object);
console.log(Object.create(null) instanceof Object);
