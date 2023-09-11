/*
 * @Author: mangwu                                                             *
 * @File: bucksSort.js                                                         *
 * @Date: 2023-09-11 11:29:00                                                  *
 * @LastModifiedDate: 2023-09-11 14:31:15                                      *
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

function bucketsSort(arr, bucketSize = 5, compareFn = (a, b) => a - b) {
  if (arr.length <= 2) {
    if (compareFn(arr[0], arr[1]) > 0) swap(arr, 0, 1);
    return arr;
  }
  const buckets = createBuckets(arr, bucketSize); // 数组分组，分成若干个桶
  return sortBuckets(buckets, compareFn);
}

function createBuckets(arr, bucketSize) {
  const minVal = Math.min.apply(null, arr);
  const maxVal = Math.max.apply(null, arr);
  const bucketsCount = Math.floor((maxVal - minVal) / bucketSize) + 1; // 桶数量
  const buckets = new Array(bucketsCount).fill(0).map(() => []);
  for (const num of arr) {
    const bucketIdx = Math.floor((num - minVal) / bucketSize);
    buckets[bucketIdx].push(num);
  }
  return buckets;
}

function sortBuckets(buckets, compareFn) {
  // 判断是递增还是递减
  compareFn(0, 1) > 0 ? buckets.reverse() : null;
  buckets.forEach((ele) => {
    quickSort(ele, compareFn);
  });
  return buckets.reduce((pre, cur) => {
    pre.push(...cur);
    return pre;
  });
}

function quickSort(arr, compareFn = (a, b) => a - b) {
  return quick(arr, 0, arr.length - 1, compareFn);
}

function quick(arr, left, right, compareFn) {
  if (right - left > 1) {
    let index = partition(arr, left, right, compareFn);
    if (left < index - 1) {
      quick(arr, left, index - 1, compareFn);
    }
    if (right > index) {
      quick(arr, index, right, compareFn);
    }
  }
  return arr;
}

function randomNum(left, right) {
  return Math.floor(Math.random() * (right - left + 1) + left);
}
function partition(arr, left, right, compareFn) {
  let i = left;
  let j = right;
  const privot = arr[randomNum(left, right)];
  while (i < j) {
    while (i <= right && compareFn(arr[i], privot) < 0) {
      i++;
    }
    while (j >= left && compareFn(arr[j], privot) > 0) {
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
try {
  console.log(
    bucketsSort(
      [
        1, 5, 8, 9, 4, -8, 6, 2, 4, 4, 5, 6, 8, 9, 5, 4, 2, 3, 1, 4, 6, -2, -4,
        -5, -5, -6, -7, -7, 1, 4, -10, 2, 4, 1, 11, 10, 10, 9, 10, 15, 18, 19,
        20, 22, 23, 25, 35, 24, 11, 23, 55, 21, 41, 23, 24, 12, 24, 13, 25, 35,
        13, 22, 14, 24, 44, 45, 46, 47, 42, 39, 39, 40, 27, 28, 29, 31, 32, 33,
        45, 35, 48, 49, 52, 53, 54, 51,
      ],
      7,
      (a, b) => b - a
    )
  );
} catch (error) {
  console.log(error.message);
}
