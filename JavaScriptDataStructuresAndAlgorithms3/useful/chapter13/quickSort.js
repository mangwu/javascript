/*
 * @Author: mangwu                                                             *
 * @File: quickSort.js                                                         *
 * @Date: 2023-09-06 09:36:56                                                  *
 * @LastModifiedDate: 2023-09-06 11:20:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function quickSort(arr, compareFn = (a, b) => a - b) {
  return quick(arr, 0, arr.length - 1, compareFn);
}

function quick(arr, left, right, compareFn) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right, compareFn);
    if (left < index - 1) {
      quick(arr, left, index - 1, compareFn);
    }
    if (index < right) {
      quick(arr, index, right, compareFn);
    }
  }
  return arr;
}
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
function partition(arr, left, right, compareFn) {
  const privot = arr[Math.floor((right + left) / 2)]; // 主元的选择方式有多种
  let i = left;
  let j = right;
  while (i <= j) {
    while (i <= right && compareFn(arr[i], privot) <= 0) {
      i++;
    }
    while (j >= left && compareFn(arr[j], privot) >= 0) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

console.log(
  quickSort([8, 9, 1, 12, 15, -5, 8, -85, 6, -7, -65, 2, 25, 85, 41, 23, 54])
);
