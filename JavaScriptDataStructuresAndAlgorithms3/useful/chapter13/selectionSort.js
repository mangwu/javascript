/*
 * @Author: mangwu                                                             *
 * @File: selectionSort.js                                                     *
 * @Date: 2023-09-01 10:25:44                                                  *
 * @LastModifiedDate: 2023-09-01 10:32:56                                      *
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
function selectionSort(arr, compareFn = (a, b) => a - b) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = n - 1; j >= i; j--)
      if (compareFn(arr[j], arr[minIdx]) < 0) minIdx = j;
    if (minIdx !== i) swap(arr, i, minIdx);
  }
  return arr;
}
console.log(
  selectionSort([8, 5, 1, 3, 6, 2, 11, 19, 54, 23, 65, 41, 23, 33, 37, 12, 15])
);
