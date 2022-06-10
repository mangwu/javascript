/*
 * @Author: mangwu                                                             *
 * @File: 03-param-.js                                                         *
 * @Date: 2022-06-10 16:50:06                                                  *
 * @LastModifiedDate: 2022-06-10 17:26:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 函数参数传递

function test() {
  console.log(arguments);
}
const a = {};
test(23, "mangwu", a);
// 打印结果

// 原始值与引用值传递区别：原始值传递原始值，实参与外部变量互不影响；引用值传入指针，会影响外部值（对象）

function getZero(num) {
  num -= num;
  return num;
}
let num = 10;
getZero(num);
console.log(num);

function setName(person) {
  person.name = "wumang";
}
const person = {
  name: "manwu",
  age: 23,
};
setName(person);
console.log(person);
