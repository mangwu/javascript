/*
 * @Author: mangwu                                                             *
 * @File: 8.1.3 definePropertes.js                                             *
 * @Date: 2022-09-07 22:01:01                                                  *
 * @LastModifiedDate: 2022-09-07 22:12:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 修改或添加多个属性
const book = {};
Object.defineProperties(book, {
  edition: {
    configurable: true,
    enumerable: true,
    value: 1,
  },
  _year: {
    configurable: true,
    value: 2017,
  },
  year: {
    configurable: true,
    enumerable: true,
    get() {
      return this._year;
    },
    set(value) {
      const sub = value - this._year;
      if (sub + this.edition > 0) {
        Object.defineProperties(book, {
          edition: {
            value: this.edition + sub,
          },
          _year: {
            value,
          },
        });
      }
    },
  },
});
console.log(book.year, book);
book.year = 2019;
console.log(book.year, book);
book.edition = 5; // 无效
book._year = 2022; // 无效
console.log(book.year, book);
