/*
 * @Author: mangwu                                                             *
 * @File: 5.2.1 create-regexp-object.js                                        *
 * @Date: 2022-06-30 14:09:06                                                  *
 * @LastModifiedDate: 2022-06-30 16:34:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 创建正则表达式对象
let pattern1 = /art/g; // 匹配字符串所有的art
let pattern2 = /[bc]at/i; //匹配字符串第一个bat或cat，且不区分大小写
let pattern3 = /.at/gi; // 匹配字符串所有的以at为结尾的三字符，且不区分大小写

console.log([..."123Art4BatCcAt56atart\natbartBat".matchAll(pattern1)]);
console.log("123Art4BatCcAt56atart\natbartBat".match(pattern2));
console.log([..."123Art4BatCcAt56atart\natbartBat".matchAll(pattern3)]);
console.log("-----------");
// 转义元字符，匹配元字符本身的含义
pattern2 = /\[bc\]at/i; // 匹配第一个[bc]at
pattern3 = /\.at/gi; // 匹配所有.at
console.log("[bc]at".match(pattern2));
console.log([..."[bc].at".matchAll(pattern3)]);
console.log("-----------");
// 匹配斜杆与反斜杆
let pattern4 = /\\\//g;
console.log([..."/\\/\\//\\/".matchAll(pattern4)]);

// 通过构造函数创建正则表达式
pattern1 = new RegExp("art", "g");
pattern2 = new RegExp("[bc]at", "i");
pattern3 = new RegExp(".at", "gi");
pattern2 = new RegExp("\\[bc\\]at", "i");
pattern3 = new RegExp("\\.at", "gi");
console.log("-----------");
// 字面量模式和字符串构建方式，只需要将字面量中的模式每个反斜杆额外加一个反斜杆即可
console.log(pattern4.toString());
