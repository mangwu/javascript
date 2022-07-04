/*
 * @Author: mangwu                                                             *
 * @File: 5.2.4 regexp-function-property.js                                    *
 * @Date: 2022-07-04 20:08:59                                                  *
 * @LastModifiedDate: 2022-07-04 20:40:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// RegExp构造函数属性
const pattern = /([\w\d]+)@([\w\d]+).com/g;
let a =
  "1185956753@qq.com, wangzhihao@inspur.com, 13451142805@163.com, invalidEmail@com";

pattern.exec(a);
pattern.exec(a);

console.log(RegExp.input, 1);
console.log(RegExp.lastMatch, 2);
console.log(RegExp.lastParen, 3);
console.log(RegExp.leftContext, 4);
console.log(RegExp.rightContext, 5);
console.log(RegExp.$_, 1);
console.log(RegExp["$&"], 2);
console.log(RegExp["$+"], 3);
console.log(RegExp["$`"], 4);
console.log(RegExp["$'"], 5);

// 捕获组属性
