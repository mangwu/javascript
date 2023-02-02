/*
 * @Author: mangwu                                                             *
 * @File: 10.9.3 function caller.js                                            *
 * @Date: 2022-10-08 22:19:26                                                  *
 * @LastModifiedDate: 2022-10-08 22:32:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// caller属性，调用当前函数的函数，在全局作用域中则为null

// 它实际上表示的是函数被调用时所在的作用域是否为另外一个函数
// 如果是，函数对象的caller就会指代哪个函数，否则就会为null
function outer() {
  inner(arguments.callee);
  console.log(outer.caller);
  console.log(outer.caller === arguments[0]);
}

function inner() {
  console.log(inner.caller);
  console.log(inner.caller === arguments[0]);
}

outer(arguments.callee);
