/*
 * @Author: mangwu                                                             *
 * @File: 10.13.2 tail call requierments.js                                    *
 * @Date: 2022-10-10 11:15:39                                                  *
 * @LastModifiedDate: 2022-10-10 11:29:39                                      *
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
