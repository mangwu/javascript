/*
 * @Author: mangwu                                                             *
 * @File: 22-.js                                                               *
 * @Date: 2022-06-07 10:50:50                                                  *
 * @LastModifiedDate: 2022-06-07 11:00:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 条件操作符
// 三元操作符，常用于赋值，可以嵌套使用
let a = 5 > 3 ? 5 : 3;

// 可以嵌套使用
let arr = [];
let b = a == 5 ? (arr.length ? "true+true" : "true+false") : false;
console.log(b);
