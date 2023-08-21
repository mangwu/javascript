/*
 * @Author: mangwu                                                             *
 * @File: HeapSort.js                                                          *
 * @Date: 2023-08-21 13:39:57                                                  *
 * @LastModifiedDate: 2023-08-21 15:40:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @description 交换数组中的arr[a]和arr[b]
 * @param {[]} arr 数组
 * @param {number} a 索引
 * @param {number} b 索引
 */
function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

/**
 * @description 模拟堆中的下移方法逻辑
 * @param {[]} arr 数组
 * @param {number} start 开始下移的索引
 * @param {number} heapSize 堆长度
 * @param {function} compareFn 比较函数
 */
function heapifyShifyDown(arr, start, heapSize, compareFn) {
  let temp = start;
  while (start < heapSize) {
    const leftIdx = start * 2 + 1;
    const rightIdx = start * 2 + 2;
    if (leftIdx < heapSize && compareFn(arr[start], arr[leftIdx]) < 0) {
      start = leftIdx;
    }
    if (rightIdx < heapSize && compareFn(arr[start], arr[rightIdx]) < 0) {
      start = rightIdx;
    }
    if (temp !== start) {
      swap(arr, temp, start);
      temp = start;
    } else break;
  }
}
/**
 * @description 将数组元素进行初步排序
 * @param {[]} arr 数组
 * @param {function} compareFn 比较函数
 * @returns {[]}
 */
function buildMaxHeap(arr, compareFn) {
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapifyShifyDown(arr, i, arr.length, compareFn);
  }
  return arr;
}
/**
 * @description 堆排序
 * @param {[]} arr 数组
 * @param {function} compareFn 比较函数
 * @returns {[]}
 */
function heapSort(arr, compareFn = (a, b) => a - b) {
  let heapSize = arr.length;
  buildMaxHeap(arr, compareFn); // 将arr的前半部分进行排序，步骤一
  while (heapSize > 1) {
    swap(arr, 0, --heapSize); // 步骤二，将最大值移到最后一位
    heapifyShifyDown(arr, 0, heapSize, compareFn); // 步骤三，下移
  }
  return arr;
}

const arr = [8, 2, 6, 1, 7, 9, 3, 5, 11, 12, 23, 14, 15, 27];

console.log(heapSort(arr));
