/*
 * @Author: mangwu                                                             *
 * @File: 5.1.1.2 create-date-object.js                                        *
 * @Date: 2022-06-27 11:11:57                                                  *
 * @LastModifiedDate: 2022-06-27 15:00:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 创建date对象
// 使用Date构造函数，不传递参数构造默认（保存创建时的日期）的date对象

const now = new Date();
console.log(now.toUTCString());

// 日期格式
// 推荐使用格式 2022-06-27 14:18:22.258 GMT-0700

const date1 = new Date(Date.parse("2022-06-27 00:00:00.000 GMT+0800"));
console.log(date1.toUTCString());

// 推荐使用格式 ISO 8601格式 2022-06-27T12:25:32.255+0800
const date2 = new Date(Date.parse("2022-06-27T14:25:12.222+08:00"));
console.log(date2.toUTCString());

// 可省略parse，直接传入日期格式的字符串
const date3 = new Date("2022-06-27 08:00:00.000 GMT+0800");
console.log(date3.toUTCString());

// 越界时间
const date4 = new Date("2022-06-31 08:00:00.000 GMT+0800");
console.log(date4.toUTCString());


