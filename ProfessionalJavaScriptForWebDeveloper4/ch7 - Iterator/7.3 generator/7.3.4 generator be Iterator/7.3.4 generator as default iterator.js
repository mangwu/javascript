/*
 * @Author: mangwu                                                             *
 * @File: 7.3.3.4 .js                                                          *
 * @Date: 2022-09-06 17:16:34                                                  *
 * @LastModifiedDate: 2022-09-06 17:28:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class Foo {
  constructor(values) {
    this.values = new Set(values);
  }
  add(val) {
    this.values.add(val);
    return this;
  }
  *[Symbol.iterator]() {
    yield* this.values;
  }
}
const foo = new Foo([1, 2, 3]).add(4).add(8);
for (const item of foo) {
  console.log(item);
}
