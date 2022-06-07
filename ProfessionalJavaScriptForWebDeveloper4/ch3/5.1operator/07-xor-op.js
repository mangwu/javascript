/*
 * @Author: mangwu                                                             *
 * @File: 07-xor-op.js                                                         *
 * @Date: 2022-05-25 21:12:27                                                  *
 * @LastModifiedDate: 2022-05-25 22:17:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 按位异或
// 所有相同数按位异或得到0，因为每位都是相同值，相同值异或返回0
const num = Math.floor(Math.random() * Math.pow(2, 31));
console.log((num ^ num) == 0);
