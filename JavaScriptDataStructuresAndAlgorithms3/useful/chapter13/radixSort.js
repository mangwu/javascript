/*
 * @Author: mangwu                                                             *
 * @File: raidxSort.js                                                         *
 * @Date: 2023-09-11 15:11:55                                                  *
 * @LastModifiedDate: 2023-09-12 10:11:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function radixSort(arr, radixBase = 10, compareFn = (a, b) => a - b) {
  if (arr.length < 2) return arr;
  const minVal = Math.min.apply(null, arr);
  const maxVal = Math.max.apply(null, arr);
  let curDigit = 1; // 从个位开始进行排序
  while ((maxVal - minVal) / curDigit >= 1) {
    arr = countingSortForRadix(arr, radixBase, curDigit);
    curDigit *= radixBase;
  }
  compareFn(0, 1) > 0 ? arr.reverse() : null;
  return arr;
}

function countingSortForRadix(arr, radixBase, curDigit) {
  const buckets = new Array(radixBase).fill(0).map(() => []);
  for (const num of arr) {
    const bucketIdx = Math.floor((num % (radixBase * curDigit)) / curDigit);
    buckets[bucketIdx].push(num);
  }
  return buckets.reduce((pre, cur) => {
    pre.push(...cur);
    return pre;
  });
}
console.log(
  radixSort(
    [
      8, 4, 5, 0, 3, 6, 9, 11, 12, 3, 99, 85, 45, 62, 999, 87, 542, 3645, 412,
      365, 412, 368, 745, 66, 524, 4205, 5634, 2412, 3586, 100, 120, 33, 34, 92,
      10, 4, 4, 369, 367, 54, 55, 56, 2410, 2412,
    ],
    10,
    (a, b) => b - a
  )
);
