/*
 * @Author: mangwu                                                             *
 * @File: 8.4.4.4 inherit build-in Object.js                                   *
 * @Date: 2022-09-22 11:21:35                                                  *
 * @LastModifiedDate: 2022-09-22 14:21:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 继承内置引用类型

class SuperArray extends Array {
  shuffle() {
    for (let i = 0; i < this.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
  }
}
const a = SuperArray.from([1, 2, 3, 4, 5, 6, 7]);
console.log(a);
a.shuffle();
console.log(a);
console.log(a instanceof Array);
console.log(a instanceof SuperArray);

const filterA = a.filter((v) => v % 2);
console.log(filterA);
console.log(filterA instanceof SuperArray);

class XArray extends Array {
  shuffle() {
    for (let i = 0; i < this.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
  }
  static get [Symbol.species]() {
    return Array;
  }
}

const xarr = new XArray(1, 2, 3, 4, 5, 6, 7);
console.log(xarr);
xarr.shuffle();
const filterX = xarr.filter((v) => v % 2 == 0);
console.log(filterX);
console.log(filterX instanceof XArray);

