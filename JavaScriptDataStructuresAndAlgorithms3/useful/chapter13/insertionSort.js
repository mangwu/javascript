/*
 * @Author: mangwu                                                             *
 * @File: insertionSort.js                                                     *
 * @Date: 2023-09-01 10:54:10                                                  *
 * @LastModifiedDate: 2023-09-01 10:59:26                                      *
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

function insertionSort(arr, compareFn = (a, b) => a - b) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let j = i;
    while (j > 0 && compareFn(arr[j - 1], arr[j]) > 0) {
      swap(arr, j - 1, j);
      j--;
    }
  }
  return arr;
}
console.log(insertionSort([8, 5, 3, 1, 11, 13, 14, 21, 12, 7, 8]));

