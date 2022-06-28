/*
 * @Author: mangwu                                                             *
 * @File: 5.1.4 date-function.js                                               *
 * @Date: 2022-06-29 00:40:08                                                  *
 * @LastModifiedDate: 2022-06-29 01:05:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Date引用类型自定义的一些get和set方法

const date = new Date();
// 获取设置时间戳
let a = date.getTime();
console.log(a);
date.setTime(a + 86400000);
console.log(date);

// 获取设置基于当前时区的完整年份
const date2 = new Date("2022-01-01");
console.log(date2.getFullYear(), date2);
date2.setFullYear(2021);
console.log(date2);

// 获取设置UTC日期的年份
console.log(date2.getUTCFullYear());
date2.setUTCFullYear(2022);
console.log(date2);
