/*
 * @Author: mangwu                                                             *
 * @File: 10.3.1.3.2 arguments and named argument.js                           *
 * @Date: 2022-10-06 00:18:41                                                  *
 * @LastModifiedDate: 2022-10-06 21:05:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// arguments对象和命名参数可以一起使用
function increase(num1, num2) {
  if (arguments.length == 1) {
    return num1 + 10;
  } else if (arguments.length == 2) {
    return arguments[0] + num2;
  }
  throw new Error("请传递1或2个参数");
}
console.log(increase(10));
console.log(increase(30, 20));

// arguments的值始终和对应的命名参数保持同步
function syncNamedArguments(num) {
  arguments[0] = 5;
  console.log(num);
  num = 7;
  console.log(arguments[0]);
  console.log(arguments.length);
}
syncNamedArguments(1);
syncNamedArguments(undefined);

function syncNamedArguments(num) {
  console.log(arguments.length);
  arguments.length = 1;
  console.log(arguments.length);
  arguments[0] = 5;
  console.log(num);
}
syncNamedArguments();
console.log("-------");
// 严格模式
(function () {
  "use strict";
  function syncNamedArguments(num) {
    arguments[0] = 5;
    console.log(num);
    num = 7;
    console.log(arguments[0]);
    return arguments[0];
  }
  // 二者相互独立
  console.log(syncNamedArguments(1));
  // 不能修改arguments
  function overwriteArguments(num) {
    // arguments = [1];
  }
})();
console.log("-------");
function syncNamedArguments(num, ohter) {
  console.log(arguments.length);
  arguments.length = 1;
  console.log(arguments.length);
  arguments[0] = 5;
  console.log(num);
}
syncNamedArguments();
