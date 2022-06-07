/*
 * @Author: mangwu                                                             *
 * @File: 05-and-op.js                                                         *
 * @Date: 2022-05-25 20:33:08                                                  *
 * @LastModifiedDate: 2022-05-25 20:45:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 按位与 &
// 任何数与其取负减1后的数相与都是0
// 因为取负减1的数就是按位非后的数
let num = Math.floor(Math.random() * Math.pow(2, 31));
console.log(num);
console.log((num & (-num - 1)) == 0);
