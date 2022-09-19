/*
 * @Author: mangwu                                                             *
 * @File: 8.4.2.1.4 use new.js                                                 *
 * @Date: 2022-09-19 17:31:20                                                  *
 * @LastModifiedDate: 2022-09-19 17:33:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 调用类构造函数必须使用new
class Person {
  constructor(name) {
    this.name = name;
  }
}

try {
  const p1 = Person("mangwu");
} catch (error) {
  console.log(error.toString());
}

const p2 = new Person("mangwu");
try {
  const p3 = p2.constructor("wumang");
} catch (error) {
  console.log(error.toString());
}

const p4 = new p2.constructor("wumang");

console.log(p2);
console.log(p4);
