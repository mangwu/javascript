/*
 * @Author: mangwu                                                             *
 * @File: 10.3.2 arguments in arrow function.js                                *
 * @Date: 2022-10-06 00:53:15                                                  *
 * @LastModifiedDate: 2022-10-06 02:09:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 箭头函数中的函数参数

function foo() {
  console.log(arguments);
}
foo();
const a = () => console.log(arguments);
a();

console.log(arguments[0] === this);

function foo() {
  let bar = () => console.log(arguments);
  bar(); // [Arguments] {}
}
foo(5);
// getter和setter可以使用
// const o = {
//   age_: 2,
//   set age(val) {
//     console.log(arguments);
//     this.age_ = val;
//   },
//   get age() {
//     return this.age_;
//   },
// };

// o.age = 3;
function func() {
  console.log(arguments);
}
const bound = func.bind(null);
bound(1, 2, 3);
