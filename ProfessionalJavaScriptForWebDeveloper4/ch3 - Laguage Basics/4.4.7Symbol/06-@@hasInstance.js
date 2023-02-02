/*
 * @Author: mangwu                                                             *
 * @File: 06-@@hasInstance.js                                                  *
 * @Date: 2022-03-01 19:42:49                                                  *
 * @LastModifiedDate: 2022-03-01 20:31:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// instanceof 判断对象实例的原型链上是否有对应类或方法的原型
function Foo() {
  this.sum = function (x, y) {
    return x + y;
  };
}
// Foo实例
const foo = new Foo();
console.log(foo.sum(1, 2));
console.log(foo instanceof Foo); // true

class Bar {}
const bar = new Bar();
console.log(bar instanceof Bar); //true

// ES6 定义的方法和类都默认有符号属性@@hasInstance
let f = new Foo();
console.log(Foo[Symbol.hasInstance](f)); // true

let b = new Bar();
console.log(Bar[Symbol.hasInstance](b)); // true

// 重写
class MyC {
  static [Symbol.hasInstance]() {
    return false;
  }
}
const m = new MyC();
console.log(MyC[Symbol.hasInstance](m));

// 覆写静态方法 @@hasInstance
class Baz extends Bar {
  static [Symbol.hasInstance]() {
    return false;
  }
}
const baz = new Baz();
console.log(Bar[Symbol.hasInstance](baz)); // true
console.log(Baz[Symbol.hasInstance](bar)); // false
console.log(Baz[Symbol.hasInstance](baz)); // false
