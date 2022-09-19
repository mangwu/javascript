/*
 * @Author: mangwu                                                             *
 * @File: 8.4.3.2.1 prototype method.js                                        *
 * @Date: 2022-09-20 00:30:40                                                  *
 * @LastModifiedDate: 2022-09-20 00:52:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 原型方法 在类块中定义的方法就是类的原型方法

class Person {
  // constructor 是类唯一保留的定义在__proto__上的方法
  // 用于创建实例成员
  constructor(friends = []) {
    // 添加到this的所有内容都会存在于不同实例上
    this.locate = () => console.log("instance");
    this.friends = friends;
  }
  locate() {
    console.log("prototype");
  }
  *[Symbol.iterator]() {
    yield* this.friends;
  }
  [22]() {
    console.log(22);
  }
}
const p = new Person(["mangwu", "mangwu", "wugo"]);
p.locate(); // instance
Person.prototype.locate(); // prototype

for (const friend of p) {
  console.log(friend);
}
p[22]();

class Test {
  name = 2;
}
const test = new Test();
console.log(test);
console.log(Object.getOwnPropertyDescriptors(test));
