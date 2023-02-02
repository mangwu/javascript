/*
 * @Author: mangwu                                                             *
 * @File: 12-@@species.js                                                      *
 * @Date: 2022-03-10 23:42:35                                                  *
 * @LastModifiedDate: 2022-05-18 17:02:01                                      *
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
console.log(bar instanceof Bar, bar);
console.log(bar instanceof Array);
bar = bar.concat("bar");
console.log(bar instanceof Bar, bar);
console.log(bar instanceof Array);
// 覆盖了Array的父类实例
let baz = new Baz();
console.log(baz instanceof Baz, baz);
console.log(baz instanceof Array);
baz = baz.concat("baz");
console.log(baz instanceof Baz, baz);
console.log(baz instanceof Array);
