/*
 * @Author: mangwu                                                             *
 * @File: 5.2.3 regexp-function.js                                             *
 * @Date: 2022-07-01 10:17:08                                                  *
 * @LastModifiedDate: 2022-07-01 17:11:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 正则实例方法
// exec() test(),compile()已被弃用

const pattern1 = /(((a)b)(?<namedGroups>c))/gi;
console.log(pattern1.exec("Abcabc"));

// 捕获组
// 普通捕获组的编号属性呢

const pattern2 = /(\d{4})-((\d{2})-(\d\d))/;

console.log(pattern2.exec("2022-07-01"));

const pattern3 = /(?<year>\d{4})-(?<date>(?<month>\d{2})-(?<day>\d\d))/;
console.log(pattern3.exec("2022-07-01"));

const pattern4 = /(\d{4})-(?<date>(\d{2})-(?<day>\d\d))/;
console.log(pattern4.exec("2022-07-01"), pattern4.exec("2022-07-01")[3]);
