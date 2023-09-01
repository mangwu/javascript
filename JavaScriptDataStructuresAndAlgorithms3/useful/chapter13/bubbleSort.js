/*
 * @Author: mangwu                                                             *
 * @File: bubbleSort.js                                                        *
 * @Date: 2023-09-01 10:04:54                                                  *
 * @LastModifiedDate: 2023-09-01 10:20:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

function bubbleSort(arr, compareFn = (a, b) => a - b) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    // 遍历n次，每次将一个最大（小）值移动到顶部（底部）
    for (let j = 0; j < n - 1; j++) {
      if (compareFn(arr[j], arr[j + 1]) > 0) swap(arr, j, j + 1);
    }
  }
  return arr;
}

function bubbleSort(arr, compareFn = (a, b) => a - b) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    // 遍历n次，每次将一个最大（小）值移动到顶部（底部）
    for (let j = 0; j < n - 1 - i; j++) {
      if (compareFn(arr[j], arr[j + 1]) > 0) swap(arr, j, j + 1);
    }
  }
  return arr;
}
console.log(
  bubbleSort([8, 4, 7, 5, 6, 8, 1, 2, 3, 5, 4, 7, 11, 23, 14, 15, 16, 16, 28])
);
