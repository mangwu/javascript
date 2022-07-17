/*
 * @Author: mangwu                                                             *
 * @File: 6.2.3 array index.js                                                 *
 * @Date: 2022-07-17 20:25:41                                                  *
 * @LastModifiedDate: 2022-07-17 21:09:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 数组索引
// 访问和设置元素值
const arr = ["blue", "red", "black"];
console.log(arr[2]);
arr[5] = "orange";
console.log(arr[-1]);
arr[-2] = "orange2";
console.log(arr);
for (const item of arr) {
  console.log(item);
}

// 数组长度
const arr2 = [5, 6, , , 3, 1];
console.log(arr2.length);
arr2.length = 2;
console.log(arr2);
arr2.length = 4;
console.log(arr2);
arr2[arr2.length] = 7;
arr2[arr2.length] = 8;
console.log(arr2);

