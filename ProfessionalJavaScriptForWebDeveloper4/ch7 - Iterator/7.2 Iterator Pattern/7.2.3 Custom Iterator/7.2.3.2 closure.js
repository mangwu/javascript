/*
 * @Author: mangwu                                                             *
 * @File: 7.2.3.2 clouse.js                                                    *
 * @Date: 2022-09-05 13:45:08                                                  *
 * @LastModifiedDate: 2022-09-05 14:09:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class Counter {
  constructor(limit) {
    this.limit = limit;
  }
  [Symbol.iterator]() {
    let limit = this.limit;
    let count = 0;
    return {
      next() {
        if (count < limit) {
          return { done: false, value: count++ };
        }
        return { done: true, value: undefined };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  }
}
const counter = new Counter(5);
for (const item of counter) {
  console.log(item);
}
for (const item of counter) {
  console.log(item);
}

const iter = counter[Symbol.iterator]();
const iter2 = iter[Symbol.iterator]();
const iter3 = iter2[Symbol.iterator]();
console.log(iter === iter2);
console.log(iter2);

const arr = [1, 5, 2, 3];
const iterarr1 = arr.values();
const iterarr2 = iterarr1[Symbol.iterator]();
const iterarr3 = iterarr2[Symbol.iterator]();

console.log(iterarr1 === iterarr2 && iterarr1 === iterarr3);

console.log(iterarr1.next());
console.log(iterarr2.next());
console.log(iterarr3.next());
