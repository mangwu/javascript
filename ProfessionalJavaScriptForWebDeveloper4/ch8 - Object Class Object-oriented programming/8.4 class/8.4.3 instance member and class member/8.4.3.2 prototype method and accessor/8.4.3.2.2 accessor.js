/*
 * @Author: mangwu                                                             *
 * @File: 8.4.3.2.2 accessor.js                                                *
 * @Date: 2022-09-20 21:46:29                                                  *
 * @LastModifiedDate: 2022-09-20 22:05:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
class Person {
  set name(newName) {
    this.name_ = newName;
  }
  get name() {
    return this.name_;
  }
}
const person = new Person();
console.log(person);
person.name = "mangwu";
console.log(person);

// 非严格模式不会报错
let private = person;
console.log(private);
