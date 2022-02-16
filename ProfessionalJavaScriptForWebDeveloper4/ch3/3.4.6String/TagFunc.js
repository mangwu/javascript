/*
 * @Author: mangwu                                                             *
 * @File: TagFunc.js                                                           *
 * @Date: 2022-02-16 23:48:45                                                  *
 * @LastModifiedDate: 2022-02-16 23:55:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 标签函数：模板字面量支持的函数

function tagFunc(strings, ...expressions) {
  console.log(strings);
  for (const expression of expressions) {
    console.log(expression);
  }
  return "处理后的模板字面量";
}

let a = 1;
let b = 2;
let str = `${a} + ${b} = ${a + b}`;
tagFunc`${a} + ${b} = ${a + b}`;