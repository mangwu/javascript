/*
 * @Author: mangwu                                                             *
 * @File: useMinHeap.js                                                        *
 * @Date: 2023-08-14 14:51:50                                                  *
 * @LastModifiedDate: 2023-08-15 10:29:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { MinHeap } = require("./MinHeap.js");
const heap = new MinHeap();
heap.insert(2);
heap.insert(4);
heap.insert(3);
heap.insert(5);
heap.insert(1);

console.log("min:", heap.peek());

heap.insert(11);
heap.insert(1);
heap.insert(8);
heap.insert(7);
heap.insert(-7);
heap.insert(-6);
heap.insert(-8);
heap.insert(0);
console.log("min:", heap.peek());
console.log(heap.heap);
console.log("pop min", heap.poll());
console.log("pop min", heap.poll());
console.log("pop min", heap.poll());
console.log("pop min", heap.poll());
console.log("pop min", heap.poll());
console.log("pop min", heap.poll());
console.log("pop min", heap.poll());
console.log("pop min", heap.poll());
console.log("pop min", heap.poll());
console.log("pop min", heap.poll());
console.log("pop min", heap.poll());
console.log("pop min", heap.poll());
console.log("pop min", heap.poll());


