/*
 * @Author: mangwu                                                             *
 * @File: 5.1.4 date-function.js                                               *
 * @Date: 2022-06-29 00:40:08                                                  *
 * @LastModifiedDate: 2022-06-29 10:58:54                                      *
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
console.log("---------------");
// 获取设置基于当前时区的完整年份
const date2 = new Date("2022-01-01 00:00:00.000 GMT+0800");
console.log(date2.getFullYear(), date2);
date2.setFullYear(2021);
console.log(date2);

// 获取设置UTC日期的年份
console.log(date2.getUTCFullYear());
date2.setUTCFullYear(2022);
console.log(date2);

console.log("---------------");
// 获取设置基于当前时区的月份
const date3 = new Date("2022-02-01 00:00:00 GMT+0800");
console.log(date3.getMonth(), date3);
date3.setMonth(0);
console.log(date3);
// 获取设置基于UTC时间的月份
console.log(date3.getUTCMonth(), "utc");
date3.setUTCMonth(12);
console.log(date3, date3.getMonth());

console.log("---------------");
// 获取设置当前时区的日
const date4 = new Date(2022, 4, 2);
console.log(date4, date4.getDate());
date4.setDate(0);
console.log(date4.toString());
// 获取设置UTC日期的日
console.log(date4.getUTCDate(), "utc");
date4.setUTCDate(0);
console.log(date4.toString(), date4);
