/*
 * @Author: mangwu                                                             *
 * @File: 6.1.1 Object.js                                                      *
 * @Date: 2022-07-14 16:37:07                                                  *
 * @LastModifiedDate: 2022-07-14 22:12:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Object引用类型，基本使用
// new 操作符创建
const obj = new Object();
obj.name = "mangwu";
obj.age = 22;

// 对象字面量
let sym = Symbol.iterator;
const person = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  },
  5: 2,
  a: 2,
  k: "567",
};
console.log(person);
for (const item of person) {
  console.log(item);
}

function displayInfo(args) {
  const { name, age } = args;
  console.log(name + age);
  return name + age;
}
displayInfo({ name: "mangwu", age: 22 });

// 点语法
person.a = 3;
// 中括号语法
console.log(person[5]);
console.log(person["5"]);
console.log(person[Symbol.iterator]);
console.log(person[sym]);
// 包含特殊字符的字符串属性
let person2 = {
  "first name": "mang",
};
// 只能通过中括号语法调用
console.log(person2["first name"]);
