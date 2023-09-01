/*
 * @Author: mangwu                                                             *
 * @File: mergeSort.js                                                         *
 * @Date: 2023-09-01 11:17:17                                                  *
 * @LastModifiedDate: 2023-09-01 11:24:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function mergeSort(arr, compareFn = (a, b) => a - b) {
  const n = arr.length;
  if (n > 1) {
    const middle = Math.floor(n / 2);
    const left = mergeSort(arr.slice(0, middle), compareFn);
    const right = mergeSort(arr.slice(middle, n), compareFn);
    arr = merge(left, right, compareFn);
  }
  return arr;
}

function merge(left, right, compareFn) {
  // 归并两个有序数组
  const res = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    res.push(compareFn(left[i], right[j]) < 0 ? left[i++] : right[j++]);
  }
  return res.concat(i < left.length ? left.slice(i) : right.slice(j));
}

console.log(
  mergeSort([
    8, 4, 11, 23, 14, 15, 36, 14, 27, 45, 12, 36, 1, 23, 24, 85, 62, 41, 23,
  ])
);
