/*
 * @Author: mangwu                                                             *
 * @File: 10.5.3 default parameter scope and temporal dead zone.js             *
 * @Date: 2022-10-07 00:09:28                                                  *
 * @LastModifiedDate: 2022-10-07 00:37:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 默认参数作用域

function sayGreetings(greeting = "Hello", name = "mangwu") {
  console.log(`${greeting}, ${name}`);
}

// 逻辑上等价于
function sayGreetings() {
  let greeting = "Hello";
  let name = "mangwu";
  console.log(`${greeting}, ${name}`);
}

// 后定义的参数可以引用先定义的参数

function sayGreetings(greeting = "Hello", fname = "mangwu", sname = fname) {
  console.log(`${greeting}, ${fname} ${sname}`);
}
sayGreetings("How are you", "wumang");

// 暂时性死区
function makeKing(name = numerals, numerals = "IV") {
  console.log(`King ${name} ${numerals}`);
}
try {
  makeKing("wumang"); // 不会报错
  makeKing(undefined); // 报错
} catch (error) {
  console.log(error.toString());
}

function sayName(name = n) {
  let n = 1;
  console.log(name);
}

try {
  sayName("wumang"); // 不会报错
  sayName(undefined); // 报错
} catch (error) {
  console.log(error.toString());
}