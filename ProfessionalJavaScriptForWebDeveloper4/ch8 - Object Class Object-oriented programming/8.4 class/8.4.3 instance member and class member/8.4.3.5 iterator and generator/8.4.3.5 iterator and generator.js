/*
 * @Author: mangwu                                                             *
 * @File: 8.4.3.5 iterator and generator.js                                    *
 * @Date: 2022-09-20 23:10:12                                                  *
 * @LastModifiedDate: 2022-09-20 23:14:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 类和原型的生成器和迭代器

class Person {
  static *[Symbol.iterator]() {
    yield* ["化学组成", "血液", "肌肉", "骨骼", "大脑", "四大组织"];
  }
  constructor() {
    this.nicknames = ["mangwu", "wumang", "mangmang"];
  }
  *[Symbol.iterator]() {
    yield* this.nicknames.entries();
  }
}

for (const item of Person) {
  console.log(item);
}
const p = new Person();
for (const [key, val] of p) {
  console.log(key, val);
}
