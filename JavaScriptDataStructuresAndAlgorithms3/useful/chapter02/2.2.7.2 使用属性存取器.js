/*
 * @Author: mangwu                                                             *
 * @File: 2.2.7.2 使用属性存取器.js                                                   *
 * @Date: 2022-10-31 16:05:07                                                  *
 * @LastModifiedDate: 2022-10-31 16:05:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(val) {
    this._name = val;
  }
}
const person = new Person("mangwu");
console.log(person.name);
