/*
 * @Author: mangwu                                                             *
 * @File: 8.4.1.2.1 class composition.js                                       *
 * @Date: 2022-09-19 10:05:55                                                  *
 * @LastModifiedDate: 2022-09-19 10:10:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 类的构成
// 空类
class Foo {}
// 包含构造函数
class Bar {
  constructor() {}
}
// 包含获取函数
class Baz {
  get myBaz() {}
}
// 包含静态方法
class Qux {
  static myQux() {}
}

console.log(Foo.prototype);
console.log(Bar.prototype);
console.log(Baz.prototype);
console.log(Qux.prototype);

const foo = new Foo();
const bar = new Bar();
const baz = new Baz();
const qux = new Qux();

console.log(foo);
console.log(bar);
console.log(baz);
console.log(qux);
