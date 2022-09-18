/*
 * @Author: mangwu                                                             *
 * @File: 8.3.5 parasitic inheritance.js                                       *
 * @Date: 2022-09-18 20:07:24                                                  *
 * @LastModifiedDate: 2022-09-18 20:29:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 寄生式继承

function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function createAnother(original) {
  let clone = object(original); // 通过调用函数创建一个新对象
  clone.sayHi = function () {
    // 以某种方式增强这个对象
    console.log("hi");
  };
  return clone; // 返回这个对象
}

let person = {
  name: "mangwu",
  age: 22,
};

let anotherPerson = createAnother(person);
console.log(anotherPerson);
anotherPerson.sayHi();
