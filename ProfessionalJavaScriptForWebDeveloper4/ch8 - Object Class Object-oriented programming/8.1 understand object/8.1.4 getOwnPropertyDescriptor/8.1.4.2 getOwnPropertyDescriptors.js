/*
 * @Author: mangwu                                                             *
 * @File: 8.1.4.1 getOwnPropertyDescriptors.js                                 *
 * @Date: 2022-09-08 00:00:13                                                  *
 * @LastModifiedDate: 2022-09-08 00:06:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const arr = [1, 2, 3];
console.log(Object.getOwnPropertyDescriptors(arr));
const set = new Set().add(0).add(1);
console.log(Object.getOwnPropertyDescriptors(set));

class Book {
  #year; // 私有成员
  constructor(year) {
    this.#year = year;
    this.edition = 1;
  }
  getYear() {
    return this.#year;
  }
  setYear(value) {
    let sub = value - this.#year;
    if (this.edition + sub > 0) {
      this.edition += sub;
      this.#year = value;
    }
  }
}
const book = new Book(2015);
// 使用定义属性的方法让其拥有一个访问器属性year
Object.defineProperty(book, "year", {
  configurable: true,
  enumerable: true,
  set(value) {
    this.setYear(value);
  },
  get() {
    return this.getYear();
  },
});
console.log(Object.getOwnPropertyDescriptors(book));
