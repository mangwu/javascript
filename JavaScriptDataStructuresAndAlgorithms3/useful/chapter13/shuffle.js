/*
 * @Author: mangwu                                                             *
 * @File: shuffle.js                                                           *
 * @Date: 2023-09-11 16:30:01                                                  *
 * @LastModifiedDate: 2023-09-11 16:32:55                                      *
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
function shuffle(arr) {
  const n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    const idx = Math.floor(Math.random() * (i + 1));
    swap(arr, idx, i);
  }
  return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));

