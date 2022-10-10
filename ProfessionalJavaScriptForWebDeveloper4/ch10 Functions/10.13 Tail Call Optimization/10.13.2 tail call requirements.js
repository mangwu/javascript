/*
 * @Author: mangwu                                                             *
 * @File: 10.13.2 tail call requierments.js                                    *
 * @Date: 2022-10-10 11:15:39                                                  *
 * @LastModifiedDate: 2022-10-10 14:13:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 尾调用优化需要满足的条件

// 在外部函数中调用的内部函数
function innerFunction() {
  "use strict";
  return 4396;
}

// 以下是不不满足条件的例子
function outerFunction() {
  // 无尾调用优化：不是严格模式
  return innerFunction();
}

function outerFunction() {
  // 无尾调用优化：尾调用没有返回
  "use strict";
  innerFunction();
}
function outerFunction() {
  // 无尾调用优化：尾调用没有直接返回
  "use strict";
  const res = innerFunction();
  return res;
}
function outerFunction() {
  // 无尾调用优化：尾调用函数返回后不需要执行额外的逻辑
  "use strict";
  return innerFunction().toString();
}

function outerFunction() {
  // 无尾调用优化：尾调用函数返不能引用外部函数作用域中的闭包
  "use strict";
  let foo = "bar";
  function innerFunction() {
    return foo;
  }
  return innerFunction();
}

// 符合条尾调用优化条件的例子
function outerFunction(a, b) {
  // 有尾调用优化：帧栈销毁前执行参数计算
  "use strict";
  return innerFunction(a + b);
}

function outerFunction(a, b) {
  // 有尾调用优化：初始返回值不涉及栈帧
  "use strict";
  if (a < b) {
    return a;
  }
  return innerFunction(a + b);
}

function outerFunction(a, b) {
  // 有尾调用优化：两个尾调用函数都在尾部且没有额外的逻辑执行
  "use strict";
  return a > b ? innerFunction(a) : innerFunction(b); // 这两个尾调用函数可以不是同一个函数对象
}
