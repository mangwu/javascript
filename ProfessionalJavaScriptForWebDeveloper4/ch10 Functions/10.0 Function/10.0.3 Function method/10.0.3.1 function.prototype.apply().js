/*
 * @Author: mangwu                                                             *
 * @File: 10.0.3.1 function.prototype.apply().js                               *
 * @Date: 2022-10-17 14:40:39                                                  *
 * @LastModifiedDate: 2022-10-17 15:44:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// apply方法

const arr = [1, 2];
const eles = ["a", "b", "c"];

arr.push.apply(arr, eles);
console.log(arr);

const arr2 = [1, 2];
const eles2 = ["a", "b", "c"];

arr2.push(...eles2);
console.log(arr2);

const nums = [
  2, 8, 5, 4, 2, 3, 6, 9, 7, 4, 5, 21, 23, 41, 21, 23, 53, 24, 63, 21, 2, 0, 7,
  -2, -6, 9, 5, 4, 42,
];
// 不使用apply
let max = -Infinity;
let min = Infinity;
for (const num of nums) {
  max = Math.max(max, num);
  min = Math.min(min, num);
}
console.log(max, min);
// 是要apply
max = -Infinity;
min = Infinity;

max = Math.max.apply(null, nums);
min = Math.min.apply(null, nums);
console.log(max, min);

// 参数限制
const nums2 = new Array(125568)
  .fill(0)
  .map(() => Math.floor(Math.random() * 10000000));
try {
  console.log(Math.min.apply(null, nums2));
  console.log(Math.max.apply(null, nums2));
} catch (error) {
  console.log(error.toString());
}

// var i, l, a, s;
// for (i = 0, l = 65537, a = []; i < l; i++) a.push(60);
// s = String.fromCharCode.apply(String, a);
// console.log(s);

// 122880  124928 125440 125504 125536 125552 125560 125564 125566  125567- 125568 125696 125952 126976

const nums3 = new Array(1000000)
  .fill(0)
  .map(() => Math.floor(Math.random() * 1000000000));

function minOfArray(arr) {
  let min = Infinity;
  // 量子块
  const QUANTUM = 32768;
  for (let i = 0; i < arr.length; i += QUANTUM) {
    // 每次计算QUANTUM大小的参数，最后一个块可能长度不够，所以需要取小值
    const subMin = Math.min.apply(
      null,
      arr.slice(i, Math.min(i + QUANTUM, arr.length))
    );
    min = Math.min(subMin, min);
  }
  return min;
}
console.log(minOfArray(nums3));
