/*
 * @Author: mangwu                                                             *
 * @File: 18-.js                                                               *
 * @Date: 2022-05-30 22:32:28                                                  *
 * @LastModifiedDate: 2022-05-30 22:37:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 加法操作符
// 两种用法：作为数值相加的操作符，计算两个数值相加后的结果
// 作为字符串连接操作符，将两个字符串拼接

console.log(undefined + 0);
console.log(Infinity + -Infinity);
console.log(-0 + -0);
console.log(-0 + +0);
console.log(null + true);

let o = {
  valueOf() {
    return 2;
  },
  toString() {
    return "o";
  },
};
console.log(o + 3);
console.log(o + "3");
console.log(null + {});
