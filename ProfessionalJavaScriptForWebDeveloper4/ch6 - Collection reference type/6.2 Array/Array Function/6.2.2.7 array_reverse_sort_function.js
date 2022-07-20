/*
 * @Author: mangwu                                                             *
 * @File: 6.2.2.7 array_reverse_sort_function.js                               *
 * @Date: 2022-07-20 23:41:18                                                  *
 * @LastModifiedDate: 2022-07-20 23:56:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 排序方法
// reverse()
const arr = [0, 1, 2, 3, 10, 12, 23, 45, 69, 102, "a", "b", "c", "汉", "A"];
console.log(arr.reverse());
// sort()
console.log(arr.sort());

const arr2 = [-8, 2, 5, 8, 9, 12, 2, -12, 6, 5, 61, 25, 36, 14, 25];
console.log(arr2.sort((a, b) => a - b));
