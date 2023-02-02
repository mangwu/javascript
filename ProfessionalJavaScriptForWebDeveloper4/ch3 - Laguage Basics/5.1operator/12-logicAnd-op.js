/*
 * @Author: mangwu                                                             *
 * @File: 12-logicAnd-op.js                                                    *
 * @Date: 2022-05-30 13:55:45                                                  *
 * @LastModifiedDate: 2022-05-30 13:59:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 逻辑与
// 短路原则
// 第一个操作数转换为布尔值为true就返回第二个操作数
// 第一个操作数转换为布尔值为false就返回第一个操作数
let zero = 0;
let rez = zero && undeclaredVar; // undeclaredVar是一个未声明变量
console.log(rez);

try {
  let o = {};
  let rez = o && undeclaredVar; // undeclaredVar是一个未声明变量
  console.log(rez);
} catch (error) {
  console.log("有未声明的变量");
}
