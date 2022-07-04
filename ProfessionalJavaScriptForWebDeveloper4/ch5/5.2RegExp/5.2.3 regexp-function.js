/*
 * @Author: mangwu                                                             *
 * @File: 5.2.3 regexp-function.js                                             *
 * @Date: 2022-07-01 10:17:08                                                  *
 * @LastModifiedDate: 2022-07-04 13:47:00                                      *
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

// 反向引用
const pattern5 = /(\d{4})-((\d{2})-\3)/;
console.log(pattern5.exec("2022-07-07"));

const pattern6 = /(\d{4})-((?<month>\d{2})-\k<month>)/;
console.log(pattern6.exec("2022-07-07"));

const pattern7 = /<(?<tag>[a-z]+)[^>]*>/gi;
console.log(
  "<table id='test'><tr class='tr-row'><td id='td-cell'>test</td></tr>".replace(
    pattern7,
    "<$<tag>>"
  )
);
// RegExp.$number 方式引用
const pattern8 = /(\d{4})-((?<month>\d{2})-(?<day>\d{2}))/;
console.log(
  pattern8.test("2012-07-04"),
  RegExp.$1,
  RegExp.$2,
  RegExp.$3,
  RegExp.$4
);

// exec方法的状态

const pattern9 = /(\d{4})-((?<month>\d{2})-(?<day>\d{2}))/g;
console.log(
  pattern9.lastIndex,
  pattern9.exec("2012-02-05, 2054-01-02"),
  pattern9.lastIndex,
  pattern9.exec("2012-02-05, 2054-01-02"),
  pattern9.lastIndex,
  pattern9.exec("2012-02-05"),
  pattern9.lastIndex,
  pattern9.exec("2012-02-05"),
  pattern9.lastIndex
);
console.log("----------");
const pattern10 = /(\d{4})-((?<month>\d{2})-(?<day>\d{2}))/y;
console.log(
  pattern10.lastIndex,
  pattern10.exec("2012-02-05, 2054-01-02"),
  pattern10.lastIndex,
  pattern10.exec("2012-02-05, 2054-01-02"),
  pattern10.lastIndex,
  (pattern10.lastIndex = 12),
  pattern10.exec("2012-02-05, 2054-01-02"),
  pattern10.lastIndex
);

