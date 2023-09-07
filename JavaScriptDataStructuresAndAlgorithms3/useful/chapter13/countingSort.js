/*
 * @Author: mangwu                                                             *
 * @File: sort.js                                                              *
 * @Date: 2023-09-07 13:46:58                                                  *
 * @LastModifiedDate: 2023-09-07 18:02:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function countingSort(arr, type = "increment") {
  const counts = [];
  for (const num of arr) {
    if (counts[num]) counts[num]++;
    else counts[num] = 1;
  }
  let idx = type === "increment" ? 0 : arr.length;
  counts.forEach((count, i) => {
    while (count > 0) {
      arr[idx] = i;
      type === "increment" ? idx++ : idx--;
      count--;
    }
  });
  return arr;
}
console.log(
  countingSort([8, 5, 9, 15, 23, 27, 0, 24, 69, 52, 41, 11, 41, 200])
);
console.log(
  countingSort([8, 5, 9, 15, 23, 27, 0, 24, 69, 52, 41, 11, 41, 200])
);
