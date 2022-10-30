/*
 * @Author: mangwu                                                             *
 * @File: 11.3.3.4 Stack Tracing and Memory Managment.js                       *
 * @Date: 2022-10-31 01:52:14                                                  *
 * @LastModifiedDate: 2022-10-31 02:07:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// // 栈追踪与内部管理
function getError() {
  if (arguments[0] === undefined) {
    throw new Error("need first argument");
  }
  return 2;
}

function foo() {
  let k = getError();
  return k + 1;
}

foo();

// 期约
function barPromiseExecutor(resolve, reject) {
  setTimeout(reject, 1000, "bar");
}
function bar() {
  new Promise(barPromiseExecutor);
}
bar();

async function bar2() {
  await new Promise(barPromiseExecutor);
}
bar2();