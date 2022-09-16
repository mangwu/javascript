/*
 * @Author: mangwu                                                             *
 * @File: 8.2.4.8.4 prototype problem.js                                       *
 * @Date: 2022-09-16 14:49:02                                                  *
 * @LastModifiedDate: 2022-09-16 14:53:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 原型问题
function Person() {}
Person.prototype = {
  constructor: Person,
  name: "mangwu",
  age: 22,
  job: "Software",
  friends: ["wumang", "mangmang"],
};
const person1 = new Person();
const person2 = new Person();
person1.friends.push("wuwu");
console.log(person2.friends);
console.log(person1.friends);
console.log(person1.friends === person2.friends);
