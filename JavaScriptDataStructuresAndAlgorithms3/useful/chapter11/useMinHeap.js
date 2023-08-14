/*
 * @Author: mangwu                                                             *
 * @File: useMinHeap.js                                                        *
 * @Date: 2023-08-14 14:51:50                                                  *
 * @LastModifiedDate: 2023-08-14 14:54:15                                      *
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
console.log(heap.heap);