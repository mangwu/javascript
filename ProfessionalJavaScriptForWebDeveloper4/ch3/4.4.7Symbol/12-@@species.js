/*
 * @Author: mangwu                                                             *
 * @File: 12-@@species.js                                                      *
 * @Date: 2022-03-10 23:42:35                                                  *
 * @LastModifiedDate: 2022-03-10 23:47:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class Bar extends Array {}
class Baz extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

// 未覆盖Array的父类实例
let bar = new Bar();
console.log(bar instanceof Bar);
console.log(bar instanceof Array);
console.log(bar instanceof Bar);
console.log(bar instanceof Array);
bar = bar.concat('bar')
// 覆盖了Array的父类实例
let baz = new Baz();
console.log(baz instanceof Baz);
console.log(baz instanceof Array);
baz = baz.concat('baz')
console.log(baz instanceof Baz);
console.log(baz instanceof Array);

