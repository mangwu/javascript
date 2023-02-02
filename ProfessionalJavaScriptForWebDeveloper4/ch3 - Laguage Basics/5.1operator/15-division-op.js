/*
 * @Author: mangwu                                                             *
 * @File: 15-division-op.js                                                    *
 * @Date: 2022-05-30 15:48:33                                                  *
 * @LastModifiedDate: 2022-05-30 16:10:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 除法操作符
// 先转换为数值，然后考虑Infinity NaN 0 数值范围决定输出合适的number值

// 特殊情况
console.log(Infinity / Infinity);
console.log(Infinity / -0);
console.log(Infinity / NaN);
console.log(2 / Math.pow(10, -308));
console.log(2 / -0);
console.log(0 / 0);
console.log(Math.pow(10, -323) / 0);
console.log(Math.pow(10, -324) / 0);

// 数据转换
console.log("456" / 3);
console.log("0x20" / 16);
console.log("0x123" / false);
console.log("-0x123" / null);
console.log(true / "0.25");

const o = {
  toString() {
    return "456";
  },
};
console.log(o / 3);
