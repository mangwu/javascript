/*
 * @Author: mangwu                                                             *
 * @File: MinHeap.js                                                           *
 * @Date: 2023-08-14 13:59:10                                                  *
 * @LastModifiedDate: 2023-08-15 10:28:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// class MinHeap {
//   constructor(compareFn = (a, b) => a - b) {
//     this.compareFn = compareFn;
//     this.heap = [];
//   }
//   getLeftIndex(idx) {
//     return 2 * idx + 1;
//   }
//   getRightIndex(idx) {
//     return 2 * idx + 2;
//   }
//   getParentIndex(idx) {
//     if (idx === 0) return -1;
//     return Math.floor((idx - 1) / 2);
//   }
//   insert(value) {
//     if (value !== null) {
//       this.heap.push(value);
//       this.shiftUp(this.heap.length - 1);
//       return true;
//     }
//     return false;
//   }
//   shiftUp(idx) {
//     let parent = this.getParentIndex(idx);
//     while (idx > 0 && this.compareFn(this.heap[parent], this.heap[idx]) > 0) {
//       // 父节点的值比当前节点大，需要交换
//       this.swap(idx, parent);
//       idx = parent;
//       parent = this.getParentIndex(idx);
//     }
//   }
//   swap(a, b) {
//     const temp = this.heap[a];
//     this.heap[a] = this.heap[b];
//     this.heap[b] = temp;
//   }
//   size() {
//     return this.heap.length;
//   }
//   isEmpty() {
//     return this.size() === 0;
//   }
//   peek() {
//     return this.isEmpty() ? undefined : this.heap[0];
//   }
//   extract() {
//     if (this.isEmpty()) return undefined;
//     if (this.size() === 1) return this.heap.pop();
//     this.swap(0, this.size() - 1);
//     let removeValue = this.heap.pop();
//     this.shiftDown(0);
//     return removeValue;
//   }
//   shiftDown(idx) {
//     let left = this.getLeftIndex(idx);
//     let right = this.getRightIndex(idx);
//     let temp = idx;
//     const size = this.size();
//     if (left < size && this.compareFn(this.heap[temp], this.heap[left]) > 0) {
//       // 当前节点值比左子节点大，需要交换
//       temp = left;
//     }
//     if (right < size && this.compareFn(this.heap[temp], this.heap[right]) > 0) {
//       // 当前节点值比右子节点大，需要交换
//       temp = right;
//     }
//     if (temp !== idx) {
//       this.swap(temp, idx);
//       this.shiftDown(temp);
//     }
//   }
// }
class MinHeap {
  constructor(compareFn = (a, b) => a - b) {
    this.compareFn = compareFn;
    this.heap = [];
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
  shiftUp() {
    let idx = this.size() - 1;
    let parent = this.getParentIndex(idx);
    while (idx > 0 && this.compareFn(this.heap[parent], this.heap[idx]) > 0) {
      // 父节点的值比当前节点大，需要交换
      this.swap(idx, parent);
      idx = parent;
      parent = this.getParentIndex(idx);
    }
  }
  peek() {
    return this.isEmpty() ? undefined : this.heap[0];
  }
  poll() {
    if (this.isEmpty()) return undefined;
    if (this.size() === 1) return this.heap.pop();
    this.swap(0, this.size() - 1);
    let removeValue = this.heap.pop();
    this.shiftDown();
    return removeValue;
  }
  shiftDown() {
    let idx = 0;
    let temp = idx; // 保存被交换的父节点索引
    const size = this.size();
    while (idx < size) {
      let left = this.getLeftIndex(idx);
      let right = this.getRightIndex(idx);
      if (left < size && this.compareFn(this.heap[idx], this.heap[left]) > 0) {
        // 当前节点值比左子节点大，需要交换
        idx = left;
      }
      if (
        right < size &&
        this.compareFn(this.heap[idx], this.heap[right]) > 0
      ) {
        // 当前节点值比右子节点大，需要交换
        idx = right;
      }
      if (temp !== idx) {
        this.swap(temp, idx);
        temp = idx;
      } else break; // 没有可以交换的节点
    }
  }
}

module.exports = { MinHeap };
