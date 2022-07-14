/*
 * @Author: mangwu                                                             *
 * @File: 5.1.1.2 function.js                                                  *
 * @Date: 2022-06-27 23:02:26                                                  *
 * @LastModifiedDate: 2022-06-28 14:24:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Date引用类型继承的方法

// toLocaleString()
const date = new Date("2012-2-18 14:42:52.111 GMT+0500");
console.log(date.toLocaleString());

// toString() 带有时区的日期和信息
console.log(date.toString());

// valueOf() 返回时间戳
const date2 = new Date("2012-2-19 14:42:52.111 GMT+0500");
console.log(date2.valueOf());
console.log(date2 > date);

// 打印date，直接使用iso标准的日期字符串
console.log(date);