/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-30 17:04:18                                                  *
 * @LastModifiedDate: 2022-10-01 22:29:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
"use strict";
// 1. 一个简单的例子，说明this运行时绑定
global.prop = 22; //
function func() {
  // 严格模式下，在全局作用域里调用函数，this为undefined
  console.log(this);
  console.log(this == global);
  console.log(this.prop);
}
const test = { prop: 42, func };
try {
  func();
} catch (error) {
  console.log(error.toString());
}

test.func();

// 2. this值
function func2() {
  console.log(this);
  console.log(this.length);
}
func2.apply(5);
func2.apply("5");

// 全局上下文
console.log(this === globalThis);
console.log(globalThis === global);
