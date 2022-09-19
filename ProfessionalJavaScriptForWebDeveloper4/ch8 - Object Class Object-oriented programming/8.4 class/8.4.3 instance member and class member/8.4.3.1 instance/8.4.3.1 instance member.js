/*
 * @Author: mangwu                                                             *
 * @File: 8.4.3.1 instance member.js                                           *
 * @Date: 2022-09-20 00:12:47                                                  *
 * @LastModifiedDate: 2022-09-20 00:16:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 实例成员，即实例对象的自有属性或方法
class Person {
  constructor() {
    // 使用包装对象是为了说明实例成员不会共享属于对象的自有属性或方法
    this.name = new String("mangwu");
    this.sayName = () => console.log(this.name);
    this.nicknames = ["mang", "mango"];
  }
}
let p1 = new Person();
let p2 = new Person();
console.log(p1.name === p2.name); // false
console.log(p1.sayName === p2.sayName); // false
console.log(p1.nicknames === p2.nicknames); // false
