/*
 * @Author: mangwu                                                             *
 * @File: 11-logicNot-op.js                                                    *
 * @Date: 2022-05-30 11:13:39                                                  *
 * @LastModifiedDate: 2022-05-30 11:16:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 逻辑非
// 应用于任何变量
// 两个逻辑非符号相当于Boolean()转型函数
console.log(!!123);
console.log(!!0);
console.log(!!{});
console.log(!!NaN);
console.log(!!Infinity);
console.log(!!"");
console.log(!!undefined);
console.log(!!Symbol["isConcatSpreadable"]);
console.log(!!((x) => x));
