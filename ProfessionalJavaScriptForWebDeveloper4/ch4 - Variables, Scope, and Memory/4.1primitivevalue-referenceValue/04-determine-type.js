/*
 * @Author: mangwu                                                             *
 * @File: 04-.js                                                               *
 * @Date: 2022-06-12 18:30:37                                                  *
 * @LastModifiedDate: 2022-06-12 20:05:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 确定类型
console.log(null instanceof Object);
console.log(undefined instanceof Object);

class Bar {}
class Foo {
  call() {
    console.log("123");
  }
}
const bar = new Bar();
const foo = new Foo();

// instanceof 只对对象有效，原始类型统一返回false
console.log(bar instanceof Bar);
console.log(foo instanceof Foo);
console.log(/1/ instanceof RegExp);

function test() {
  console.log("object");
}
console.log(test instanceof Function); // true
console.log(test instanceof Object);
