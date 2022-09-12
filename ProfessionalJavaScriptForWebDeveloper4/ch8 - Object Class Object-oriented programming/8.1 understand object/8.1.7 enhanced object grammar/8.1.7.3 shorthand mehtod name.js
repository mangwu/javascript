/*
 * @Author: mangwu                                                             *
 * @File: 8.1.7.3 .js                                                          *
 * @Date: 2022-09-12 04:37:45                                                  *
 * @LastModifiedDate: 2022-09-12 18:15:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 简写方法名
function sayName2() {
  console.log(this.name);
}
// 朴素定义
const person = {
  name: "mangwu",
  sayName: function () {
    console.log(this.name);
  },
  sayName2,
};
person.sayName();
person.sayName2();

const person2 = {
  name_: "mangwu",
  /**
   * @param {string} val
   */
  set name(val) {
    this.name_ = val;
  },
  get name() {
    return this.name_;
  },
};
person2.name = "wumang";
console.log(person2.name);

1
