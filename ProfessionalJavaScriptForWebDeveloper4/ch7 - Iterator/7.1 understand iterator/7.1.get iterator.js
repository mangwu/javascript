/*
 * @Author: mangwu                                                             *
 * @File: 7.1.get iterator.js                                                  *
 * @Date: 2022-09-02 15:28:40                                                  *
 * @LastModifiedDate: 2022-09-02 16:03:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 理解迭代
// 1. 最简单的迭代就是计数循环
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 2. 在有序集合上的迭代
const arr = [1, 5, 2, 3, 6, 8];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 3. forEach
const set = new Set().add(1).add(NaN).add(8);
set.forEach((item) => console.log(item));
