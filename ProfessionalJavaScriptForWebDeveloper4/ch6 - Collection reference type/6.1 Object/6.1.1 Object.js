/*
 * @Author: mangwu                                                             *
 * @File: 6.1.1 Object.js                                                      *
 * @Date: 2022-07-14 16:37:07                                                  *
 * @LastModifiedDate: 2022-07-14 17:28:40                                      *
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
  [sym]: function* () {
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
