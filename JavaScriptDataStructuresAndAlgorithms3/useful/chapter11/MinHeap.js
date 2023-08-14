/*
 * @Author: mangwu                                                             *
 * @File: MinHeap.js                                                           *
 * @Date: 2023-08-14 13:59:10                                                  *
 * @LastModifiedDate: 2023-08-14 17:15:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class MinHeap {
  constructor(compareFn = (a, b) => a - b) {
    this.compareFn = compareFn;
    this.heap = [];
  }
  getLeftIndex(idx) {
    return 2 * idx + 1;
  }
  getRightIndex(idx) {
    return 2 * idx + 2;
  }
  getParentIndex(idx) {
    if (idx === 0) return -1;
    return Math.floor((idx - 1) / 2);
  }
  insert(value) {
    if (value !== null) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }
  shiftUp(idx) {
    let parent = this.getParentIndex(idx);
    while (idx > 0 && this.compareFn(this.heap[parent], this.heap[idx]) > 0) {
      // 父节点的值比当前节点大，需要交换
      this.swap(idx, parent);
      idx = parent;
      parent = this.getParentIndex(idx);
    }
  }
  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    return this.isEmpty() ? undefined : this.heap[0];
  }
}

module.exports = { MinHeap };
