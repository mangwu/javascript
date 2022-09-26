/*
 * @Author: mangwu                                                             *
 * @File: 9.1.7.4 safe functions application.js                                *
 * @Date: 2022-09-26 22:05:52                                                  *
 * @LastModifiedDate: 2022-09-26 22:10:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 安全应用函数
function foo() {
  console.log("foo");
}
foo.apply();
// 自定义apply导致调用时产生问题
foo.apply = function (thisArg, ...rest) {
  console.log("bar");
};
foo.apply();

// 使用Function原型上的apply方法
Function.prototype.apply.call(foo);

// 但是这太麻烦了，可以直接使用Reflect的API
Reflect.apply(foo, null, []);
