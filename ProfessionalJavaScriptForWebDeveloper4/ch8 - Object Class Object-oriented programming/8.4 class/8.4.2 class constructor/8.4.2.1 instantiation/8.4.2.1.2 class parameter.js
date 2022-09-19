/*
 * @Author: mangwu                                                             *
 * @File: 8.4.2.2 class parameter.js                                           *
 * @Date: 2022-09-19 17:19:55                                                  *
 * @LastModifiedDate: 2022-09-19 17:26:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 省略参数
class Person {
  constructor(age, name) {
    console.log(arguments.length);
    this.age = age;
    this.name = name;
  }
}
let p0 = new Person;
console.log(p0.name);
let p1 = new Person();
console.log(p1.name);
let p2 = new Person(22);
console.log(p2.name);
let p3 = new Person(22, "mangwu");
console.log(p3.name);

