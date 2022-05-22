/*
 * @Author: mangwu                                                             *
 * @File: 15-@@toStringTag.js                                                  *
 * @Date: 2022-05-22 22:14:29                                                  *
 * @LastModifiedDate: 2022-05-22 22:20:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// toStringTag
class Bar {
  toString() {
    // 覆写
    return "bar";
  }
}
class Foo {
  // 未覆写
}
const bar = new Bar();
const foo = new Foo();
console.log(bar.toString());
console.log(foo.toString());

class Baz extends Bar {
  [Symbol.toStringTag] = "Baz";
}
class Foz extends Foo {
  [Symbol.toStringTag] = "Foz";
}
const baz = new Baz();
const foz = new Foz();
console.log(baz.toString());
console.log(foz.toString());

const toString = Object.prototype.toString;

console.log(toString.call(bar));
console.log(toString.call(foo));
console.log(toString.call(baz));
console.log(toString.call(foz));
