/*
 * @Author: mangwu                                                             *
 * @File: 6.2.2 array hole.js                                                  *
 * @Date: 2022-07-15 17:30:18                                                  *
 * @LastModifiedDate: 2022-07-17 20:09:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 数组空位
console.log([1, , , , 5]);
let arr = [];
arr[5] = 0;
arr[2] = undefined;
console.log(arr);
console.log(arr.map((v) => 6));
console.log(arr.join("-"));
